const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9385;
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

  let connected = false;
  let tabs = null;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      tabs = await res.json();
      if (tabs && tabs.length > 0) {
        connected = true;
        break;
      }
    } catch (e) {}
  }

  if (!connected) {
    console.error('Could not connect to Chrome on port ' + port);
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
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    try {
      await send('Page.enable');
      await send('Runtime.enable');
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });

      await new Promise(r => setTimeout(r, 1200));

      const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

      // 1. Mobile Top
      await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
      await new Promise(r => setTimeout(r, 600));

      const topShot = await send('Page.captureScreenshot', { format: 'png' });
      const topFile = path.join(artifactDir, 'verified_hp2_hero_mobile_top.png');
      fs.writeFileSync(topFile, Buffer.from(topShot.data, 'base64'));
      console.log('Saved mobile top screenshot to', topFile);

      // 2. Mobile Scrolled
      await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 300);' });
      await new Promise(r => setTimeout(r, 600));

      const scrolledShot = await send('Page.captureScreenshot', { format: 'png' });
      const scrolledFile = path.join(artifactDir, 'verified_hp2_hero_mobile_scrolled.png');
      fs.writeFileSync(scrolledFile, Buffer.from(scrolledShot.data, 'base64'));
      console.log('Saved mobile scrolled screenshot to', scrolledFile);

    } catch (e) {
      console.error('Error during capture:', e);
    } finally {
      ws.close();
      killChrome();
      process.exit(0);
    }
  };
}

main();

