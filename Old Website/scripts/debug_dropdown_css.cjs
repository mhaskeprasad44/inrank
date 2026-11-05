const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9674;
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

    const result = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const item = document.querySelector('.nav-item[data-dropdown="services"]');
          item.setAttribute('data-open', '');
          const drop = item.querySelector('.drop-mega');
          
          const matchResult = drop.matches('.nav-item[data-dropdown="services"][data-open] > .drop-mega');
          const style = window.getComputedStyle(drop);
          
          return {
            matchesDirect: matchResult,
            computedOpacity: style.opacity,
            computedVisibility: style.visibility,
            computedPointerEvents: style.pointerEvents,
            computedTransform: style.transform,
            hasDataOpenOnItem: item.hasAttribute('data-open'),
            itemDataDropdown: item.getAttribute('data-dropdown')
          };
        })()
      `,
      returnByValue: true
    });
    console.log(result.result.value);

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

