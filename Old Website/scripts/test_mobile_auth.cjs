const { spawn } = require('child_process');
const fs = require('fs');

async function testMobileAuth() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9396;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      const tabs = await res.json();
      if (tabs.length) break;
    } catch (e) {}
  }

  const res = await fetch(`http://127.0.0.1:${port}/json`);
  const tabs = await res.json();
  const targetTab = tabs.find(t => t.url.includes('localhost:8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const timer = setTimeout(() => reject(new Error('Timeout ' + method)), 5000);
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
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });

      await send('Page.enable');
      await send('Page.navigate', { url: 'http://localhost:8080/' });
      await new Promise(r => setTimeout(r, 1200));

      const ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_auth_mobile_top.png', Buffer.from(ss.data, 'base64'));
      console.log('Saved scripts/ss_auth_mobile_top.png');
    } catch(err) {
      console.error(err);
    } finally {
      ws.close();
      chrome.kill();
      process.exit(0);
    }
  };
}

testMobileAuth();

