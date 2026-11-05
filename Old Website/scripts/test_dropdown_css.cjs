const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9666;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/services/seo-company-pune.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('seo-company-pune.html')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    const info = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const item = document.querySelector('.nav-item[data-dropdown="services"]');
          item.setAttribute('data-open', '');
          const drop = item.querySelector('.nav-drop');
          const s = window.getComputedStyle(drop);
          return {
            itemClasses: item.className,
            hasDataOpen: item.hasAttribute('data-open'),
            opacity: s.opacity,
            visibility: s.visibility,
            pointerEvents: s.pointerEvents,
            transform: s.transform,
            display: s.display,
            zIndex: s.zIndex,
            top: s.top,
            left: s.left,
            width: s.width,
            height: s.height
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Result with data-open:', info.result.value);

    // Also check event listeners on the button
    const btnListeners = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btn = document.querySelector('.nav-item[data-dropdown="services"] button');
          return {
            hasBtn: !!btn,
            btnOuter: btn ? btn.outerHTML : null
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Button:', btnListeners.result.value);

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

