const { spawn } = require('child_process');
const fs = require('fs');

async function testMobileDrawer() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9391;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  const killChrome = () => {
    try { chrome.kill(); } catch (e) {}
  };

  // Wait for Chrome to be ready
  let tabs = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      tabs = await res.json();
      if (tabs && tabs.length > 0) break;
    } catch (e) {}
  }

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

      // Wait a moment for page to settle
      await new Promise(r => setTimeout(r, 1500));

      const clickResult = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const b = document.getElementById('nav-burger');
            const m = document.getElementById('mob');
            if (b) {
              b.click();
              return { success: true, burgerFound: true, mobClass: m?.className, mobVisible: window.getComputedStyle(m).visibility, mobTransform: window.getComputedStyle(m).transform };
            }
            return { success: false, burgerFound: false, url: window.location.href };
          })()
        `,
        returnByValue: true
      });

      console.log('Burger click result:', clickResult.result.value);

      await new Promise(r => setTimeout(r, 500));
      const ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_mobile_drawer_open_verified.png', Buffer.from(ss.data, 'base64'));
      console.log('Saved scripts/v_mobile_drawer_open_verified.png');
    } catch (e) {
      console.error('Error:', e);
    } finally {
      ws.close();
      killChrome();
      process.exit(0);
    }
  };
}

testMobileDrawer();
