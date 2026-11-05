const { spawn } = require('child_process');
const fs = require('fs');
const http = require('http');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9388;
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
  let connected = false;
  let tabs = null;
  for (let i = 0; i < 20; i++) {
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
      // 1. Mobile view
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });

      // Click the burger button
      await send('Runtime.evaluate', {
        expression: `
          const b = document.getElementById('nav-burger');
          if (b) b.click();
        `
      });

      await new Promise(r => setTimeout(r, 400));

      const ssDrawer = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_mobile_drawer_fresh.png', Buffer.from(ssDrawer.data, 'base64'));
      console.log('Mobile drawer screenshot saved: scripts/v_mobile_drawer_fresh.png');

      // Now close drawer, test desktop subpages
      await send('Runtime.evaluate', {
        expression: `
          const c = document.getElementById('mob-close');
          if (c) c.click();
        `
      });

      // 2. Desktop subpages
      await send('Emulation.setDeviceMetricsOverride', {
        width: 1440,
        height: 900,
        deviceScaleFactor: 1,
        mobile: false
      });

      const pages = ['services.html', 'pricing.html', 'about.html', 'contact.html', 'case-studies.html'];
      for (const p of pages) {
        await send('Page.navigate', { url: `http://localhost:8080/${p}` });
        await new Promise(r => setTimeout(r, 500));
        await send('Runtime.evaluate', {
          expression: `
            document.documentElement.style.scrollBehavior = 'auto';
            document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible', 'revealed'));
          `
        });
        const ssPage = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(`scripts/ss_${p.replace('.html','')}.png`, Buffer.from(ssPage.data, 'base64'));
        console.log(`Saved screenshot for ${p}`);
      }

      console.log('All verification screenshots captured successfully!');
    } catch (err) {
      console.error('Error during capture:', err);
    } finally {
      ws.close();
      killChrome();
      process.exit(0);
    }
  };

  ws.onerror = (e) => {
    console.error('WebSocket error:', e);
    killChrome();
    process.exit(1);
  };
}

main();

