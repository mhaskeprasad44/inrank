const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9231',
  '--window-size=1440,900',
  '--no-sandbox',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9231/json');
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

      // Instant scroll to pricing: 6800
      await send('Runtime.evaluate', {
        expression: `
          document.documentElement.style.scrollBehavior = 'auto';
          window.scrollTo(0, 6800);
          document.querySelectorAll('[data-reveal]').forEach(e => e.classList.add('is-visible', 'revealed'));
        `
      });
      await new Promise(r => setTimeout(r, 100));

      const ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_pricing_instant.png', Buffer.from(ss.data, 'base64'));

      // Instant scroll to work: 5100
      await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 5100);' });
      await new Promise(r => setTimeout(r, 100));
      const ss2 = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_work_instant.png', Buffer.from(ss2.data, 'base64'));

      console.log('Saved instant screenshots!');
      ws.close();
      chrome.kill();
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

