const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9235',
  '--window-size=390,844',
  '--no-sandbox',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9235/json');
    const tabs = await listRes.json();
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

      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });

      await send('Runtime.evaluate', {
        expression: `
          document.getElementById('nav-burger')?.click();
        `
      });
      await new Promise(r => setTimeout(r, 200));

      const ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_mobile_drawer_fixed.png', Buffer.from(ss.data, 'base64'));

      console.log('Mobile drawer fixed screenshot captured!');
      ws.close();
      chrome.kill();
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

