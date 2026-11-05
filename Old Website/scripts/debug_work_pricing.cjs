const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9227',
  '--window-size=1440,900',
  '--no-sandbox',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9227/json');
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

      const res = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const w = document.querySelector('.work-section');
            const p = document.querySelector('.pricing-section');
            return JSON.stringify({
              work: { top: w.getBoundingClientRect().top + window.scrollY, h: w.offsetHeight, bottom: w.getBoundingClientRect().bottom + window.scrollY },
              pricing: { top: p.getBoundingClientRect().top + window.scrollY, h: p.offsetHeight, bottom: p.getBoundingClientRect().bottom + window.scrollY }
            });
          })()
        `
      });
      console.log('Work vs Pricing:');
      console.log(JSON.parse(res.result.value));
      ws.close();
      chrome.kill();
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

