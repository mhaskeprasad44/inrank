const { spawn } = require('child_process');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9332;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  const killChrome = () => { try { chrome.kill(); } catch (e) {} };

  await new Promise(r => setTimeout(r, 1000));
  const res = await fetch('http://127.0.0.1:' + port + '/json');
  const tabs = await res.json();
  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);

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
    await send('Page.navigate', { url: 'http://localhost:8080/' });
    await new Promise(r => setTimeout(r, 1200));

    const check = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const item = document.querySelector('.nav-item[data-dropdown="services"]');
        if (!item) return { error: 'No item' };
        const drop = item.querySelector('.nav-drop');
        if (!drop) return { error: 'No drop' };
        const before = {
          opacity: window.getComputedStyle(drop).opacity,
          visibility: window.getComputedStyle(drop).visibility,
          display: window.getComputedStyle(drop).display,
          dataOpen: item.hasAttribute('data-open')
        };
        item.setAttribute('data-open', '');
        const after = {
          opacity: window.getComputedStyle(drop).opacity,
          visibility: window.getComputedStyle(drop).visibility,
          display: window.getComputedStyle(drop).display,
          dataOpen: item.hasAttribute('data-open')
        };
        return { before, after };
      })()`
    });

    console.log('Result:', JSON.stringify(check.result.value, null, 2));
    ws.close();
    killChrome();
    process.exit(0);
  };
}
test();

