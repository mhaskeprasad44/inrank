const { spawn } = require('child_process');

async function testMobAccurate() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9394;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 1200));

  const res = await fetch(`http://127.0.0.1:${port}/json`);
  const tabs = await res.json();
  console.log('All tabs:', tabs.map(t => ({ id: t.id, url: t.url })));

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
      await send('Page.enable');
      await send('Page.navigate', { url: 'http://localhost:8080/' });
      await new Promise(r => setTimeout(r, 1500));

      const info = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const b = document.getElementById('nav-burger');
            const m = document.getElementById('mob');
            return {
              url: window.location.href,
              burgerFound: !!b,
              mobFound: !!m,
              burgerVisible: b ? window.getComputedStyle(b).display : 'none',
              mobInitialClass: m ? m.className : '',
              mobInitialVisibility: m ? window.getComputedStyle(m).visibility : ''
            };
          })()
        `,
        returnByValue: true
      });
      console.log('DOM info:', info.result.value);

      // Now click burger
      await send('Runtime.evaluate', { expression: `document.getElementById('nav-burger')?.click();` });
      await new Promise(r => setTimeout(r, 400));

      const afterClick = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const m = document.getElementById('mob');
            return {
              mobClass: m?.className,
              mobVisibility: m ? window.getComputedStyle(m).visibility : '',
              mobTransform: m ? window.getComputedStyle(m).transform : ''
            };
          })()
        `,
        returnByValue: true
      });
      console.log('After burger click:', afterClick.result.value);

      const ss = await send('Page.captureScreenshot', { format: 'png' });
      const fs = require('fs');
      fs.writeFileSync('scripts/v_mob_drawer_real.png', Buffer.from(ss.data, 'base64'));
      console.log('Saved scripts/v_mob_drawer_real.png');
    } catch(err) {
      console.error(err);
    } finally {
      ws.close();
      chrome.kill();
      process.exit(0);
    }
  };
}

testMobAccurate();

