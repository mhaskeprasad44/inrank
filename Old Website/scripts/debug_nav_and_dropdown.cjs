const { spawn } = require('child_process');
const fs = require('fs');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9310;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  const killChrome = () => {
    try { chrome.kill(); } catch (e) {}
  };

  let connected = false;
  let tabs = null;
  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      tabs = await res.json();
      if (tabs && tabs.length > 0) {
        connected = true;
        break;
      }
    } catch (e) {}
  }

  if (!connected) {
    console.error('Could not connect to Chrome on port ' + port);
    killChrome();
    process.exit(1);
  }

  const targetTab = tabs.find(t => t.url.includes('localhost:8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const timer = setTimeout(() => reject(new Error('Timeout ' + method)), 8000);
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            clearTimeout(timer);
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    try {
      await send('Page.enable');
      await send('DOM.enable');
      await send('Runtime.enable');
      await send('Log.enable');

      // Listen for console messages and exceptions
      ws.addEventListener('message', evt => {
        const data = JSON.parse(evt.data);
        if (data.method === 'Runtime.consoleAPICalled') {
          console.log('[BROWSER CONSOLE]', data.params.type, data.params.args.map(a => a.value || a.description).join(' '));
        }
        if (data.method === 'Runtime.exceptionThrown') {
          console.error('[BROWSER EXCEPTION]', data.params.exceptionDetails);
        }
      });

      console.log('Navigating to http://localhost:8080/...');
      await send('Page.navigate', { url: 'http://localhost:8080/' });
      await new Promise(r => setTimeout(r, 1500));

      // Inspect #nav element
      const navInfo = await send('Runtime.evaluate', {
        expression: `(() => {
          const nav = document.getElementById('nav');
          if (!nav) return { error: 'No #nav element found!' };
          const rect = nav.getBoundingClientRect();
          const comp = window.getComputedStyle(nav);
          const bar = nav.querySelector('.nav-bar');
          const barComp = bar ? window.getComputedStyle(bar) : null;
          const drop = nav.querySelector('.nav-drop');
          const dropComp = drop ? window.getComputedStyle(drop) : null;
          return {
            navClasses: nav.className,
            navRect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
            navDisplay: comp.display,
            navVisibility: comp.visibility,
            navOpacity: comp.opacity,
            navZIndex: comp.zIndex,
            barFound: !!bar,
            barDisplay: barComp ? barComp.display : null,
            barHeight: barComp ? barComp.height : null,
            barWidth: barComp ? barComp.width : null,
            dropFound: !!drop,
            dropDisplay: dropComp ? dropComp.display : null,
            dropOpacity: dropComp ? dropComp.opacity : null,
            dropVisibility: dropComp ? dropComp.visibility : null,
            navItemsCount: nav.querySelectorAll('.nav-item').length,
            linksCount: nav.querySelectorAll('a').length
          };
        })()`,
        returnByValue: true
      });

      console.log('Nav Debug Info:', JSON.stringify(navInfo.result.value, null, 2));

      // Test hovering/clicking on Services dropdown
      const hoverTest = await send('Runtime.evaluate', {
        expression: `(() => {
          const item = document.querySelector('.nav-item[data-dropdown="services"]');
          if (!item) return { error: 'No services nav-item found!' };
          const btn = item.querySelector('button');
          if (btn) btn.click();
          item.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
          const drop = item.querySelector('.nav-drop');
          const dropComp = drop ? window.getComputedStyle(drop) : null;
          return {
            clicked: !!btn,
            itemHasDataOpen: item.hasAttribute('data-open'),
            dropCompDisplay: dropComp ? dropComp.display : null,
            dropCompOpacity: dropComp ? dropComp.opacity : null,
            dropCompVisibility: dropComp ? dropComp.visibility : null,
            dropRect: drop ? drop.getBoundingClientRect() : null
          };
        })()`,
        returnByValue: true
      });

      console.log('Dropdown Hover/Click Test:', JSON.stringify(hoverTest.result.value, null, 2));

      // Capture screenshot of top with dropdown attempt
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/debug_dropdown_attempt.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved: scripts/debug_dropdown_attempt.png');

    } catch (e) {
      console.error(e);
    } finally {
      ws.close();
      killChrome();
      process.exit(0);
    }
  };
}

main();

