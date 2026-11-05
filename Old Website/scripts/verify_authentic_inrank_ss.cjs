const { spawn } = require('child_process');
const fs = require('fs');

async function captureAuthenticInrank() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9395;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
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
        width: 1440,
        height: 900,
        deviceScaleFactor: 1,
        mobile: false
      });

      await send('Page.enable');
      await send('Page.navigate', { url: 'http://localhost:8080/' });
      await new Promise(r => setTimeout(r, 1200));

      await send('Runtime.evaluate', {
        expression: `
          document.documentElement.style.scrollBehavior = 'auto';
          document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible', 'revealed'));
        `
      });

      // 1. Top Hero
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0);` });
      await new Promise(r => setTimeout(r, 150));
      let ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_auth_1_hero.png', Buffer.from(ss.data, 'base64'));

      // 2. Manifesto / Operating Philosophy
      await send('Runtime.evaluate', { expression: `document.getElementById('philosophy')?.scrollIntoView();` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_auth_2_philosophy.png', Buffer.from(ss.data, 'base64'));

      // 3. 4-Stage Operating Model
      await send('Runtime.evaluate', { expression: `document.getElementById('process')?.scrollIntoView();` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_auth_3_process.png', Buffer.from(ss.data, 'base64'));

      // 4. Capabilities (4 Pillars & 27 Services)
      await send('Runtime.evaluate', { expression: `document.getElementById('services')?.scrollIntoView();` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_auth_4_capabilities.png', Buffer.from(ss.data, 'base64'));

      // 5. Niches
      await send('Runtime.evaluate', { expression: `document.getElementById('niches')?.scrollIntoView();` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_auth_5_niches.png', Buffer.from(ss.data, 'base64'));

      // 6. Proof & Numbers
      await send('Runtime.evaluate', { expression: `document.getElementById('proof')?.scrollIntoView();` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_auth_6_proof.png', Buffer.from(ss.data, 'base64'));

      // 7. Work Showcase
      await send('Runtime.evaluate', { expression: `document.getElementById('our-work')?.scrollIntoView();` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_auth_7_work.png', Buffer.from(ss.data, 'base64'));

      // 8. Pricing
      await send('Runtime.evaluate', { expression: `document.getElementById('pricing')?.scrollIntoView();` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_auth_8_pricing.png', Buffer.from(ss.data, 'base64'));

      // 9. Closing & Footer
      await send('Runtime.evaluate', { expression: `document.getElementById('contact')?.scrollIntoView();` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_auth_9_closing.png', Buffer.from(ss.data, 'base64'));

      console.log('All authentic Inrank screenshots captured successfully!');
    } catch(err) {
      console.error(err);
    } finally {
      ws.close();
      chrome.kill();
      process.exit(0);
    }
  };
}

captureAuthenticInrank();

