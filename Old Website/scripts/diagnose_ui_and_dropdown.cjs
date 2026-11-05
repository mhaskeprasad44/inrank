const { spawn } = require('child_process');
const fs = require('fs');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9331;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  const killChrome = () => { try { chrome.kill(); } catch (e) {} };

  let connected = false;
  let tabs = null;
  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch('http://127.0.0.1:' + port + '/json');
      tabs = await res.json();
      if (tabs && tabs.length > 0) {
        connected = true;
        break;
      }
    } catch (e) {}
  }

  if (!connected) {
    console.error('Failed to connect to Chrome');
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

      const consoleLogs = [];
      ws.addEventListener('message', (evt) => {
        const data = JSON.parse(evt.data);
        if (data.method === 'Runtime.consoleAPICalled') {
          consoleLogs.push({ type: data.params.type, args: data.params.args });
        }
        if (data.method === 'Runtime.exceptionThrown') {
          consoleLogs.push({ type: 'exception', error: data.params.exceptionDetails });
        }
      });

      const pages = [
        '/',
        '/services.html',
        '/pricing.html',
        '/our-work.html',
        '/about.html',
        '/case-studies.html',
        '/contact.html'
      ];

      for (const p of pages) {
        await send('Page.navigate', { url: 'http://localhost:8080' + p });
        await new Promise(r => setTimeout(r, 1200));

        const evalRes = await send('Runtime.evaluate', {
          returnByValue: true,
          expression: `(() => {
            const nav = document.getElementById('nav');
            const navBar = document.querySelector('.nav-bar');
            const logo = document.querySelector('.nav-logo img');
            const dropItem = document.querySelector('.nav-item[data-dropdown="services"]');
            const dropMenu = dropItem ? dropItem.querySelector('.nav-drop') : null;
            
            // Hover simulation
            let dropVisibleBefore = false;
            let dropVisibleAfter = false;
            let dropRect = null;
            let dropItemHasDataOpen = false;
            if (dropMenu) {
              const comp0 = window.getComputedStyle(dropMenu);
              dropVisibleBefore = comp0.visibility !== 'hidden' && comp0.opacity !== '0';
              
              // trigger mouseenter on dropItem
              dropItem.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
              dropItemHasDataOpen = dropItem.hasAttribute('data-open');
              const comp1 = window.getComputedStyle(dropMenu);
              dropVisibleAfter = comp1.visibility !== 'hidden' && comp1.opacity !== '0';
              dropRect = dropMenu.getBoundingClientRect();
            }

            return {
              title: document.title,
              navPresent: !!nav,
              navBarRect: navBar ? navBar.getBoundingClientRect() : null,
              logoSrc: logo ? logo.src : null,
              logoComplete: logo ? logo.complete : false,
              logoNaturalWidth: logo ? logo.naturalWidth : null,
              dropItemFound: !!dropItem,
              dropMenuFound: !!dropMenu,
              dropVisibleBefore,
              dropItemHasDataOpen,
              dropVisibleAfter,
              dropRect,
              bodyHeight: document.body.scrollHeight
            };
          })()`
        });

        console.log('PAGE:', p);
        console.log(JSON.stringify(evalRes.result.value, null, 2));

        // Take a screenshot of the hover dropdown on this page!
        const shot = await send('Page.captureScreenshot', { format: 'png' });
        const cleanName = p === '/' ? 'home' : p.replace(/[\/\.]/g, '_');
        fs.writeFileSync('scripts/diag_' + cleanName + '_hover.png', Buffer.from(shot.data, 'base64'));
      }

      console.log('Console Logs/Exceptions count:', consoleLogs.length);
      if (consoleLogs.length > 0) {
        console.log('Logs:', JSON.stringify(consoleLogs, null, 2));
      }

    } catch (e) {
      console.error('Error during test:', e);
    } finally {
      ws.close();
      killChrome();
      process.exit(0);
    }
  };
}

test();

