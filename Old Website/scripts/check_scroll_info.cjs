const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9230',
  '--window-size=1440,900',
  '--no-sandbox',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9230/json');
    const tabs = await listRes.json();
    const targetTab = tabs.find(t => t.url.includes('localhost:8080'));
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

      await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 7100);' });
      await new Promise(r => setTimeout(r, 200));

      const res = await send('Runtime.evaluate', {
        expression: `
          (() => {
            return JSON.stringify({
              scrollY: window.scrollY,
              totalHeight: document.documentElement.scrollHeight,
              workTitle: document.querySelector('.work-section h2')?.getBoundingClientRect(),
              pricingTitle: document.getElementById('pricing-title')?.getBoundingClientRect()
            });
          })()
        `
      });
      console.log('Scroll info:');
      console.log(JSON.parse(res.result.value));
      ws.close();
      chrome.kill();
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

