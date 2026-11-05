const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9234',
  '--window-size=1440,900',
  '--no-sandbox',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9234/json');
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

      await send('Emulation.setDeviceMetricsOverride', {
        width: 1440,
        height: 900,
        deviceScaleFactor: 1,
        mobile: false
      });

      // Turn off smooth scroll for instant testing
      await send('Runtime.evaluate', { expression: `document.documentElement.style.scrollBehavior = 'auto';` });

      // 1. Homepage Top
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0);` });
      await new Promise(r => setTimeout(r, 100));
      let ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_home_top.png', Buffer.from(ss.data, 'base64'));

      // 2. Marquee + Manifesto
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 900);` });
      await new Promise(r => setTimeout(r, 100));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_home_manifesto.png', Buffer.from(ss.data, 'base64'));

      // 3. Operating Model
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 1600);` });
      await new Promise(r => setTimeout(r, 100));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_home_operating.png', Buffer.from(ss.data, 'base64'));

      // 4. Capabilities / Pillars
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 2600);` });
      await new Promise(r => setTimeout(r, 100));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_home_capabilities.png', Buffer.from(ss.data, 'base64'));

      // 5. Proof & Stats
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 4100);` });
      await new Promise(r => setTimeout(r, 100));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_home_proof.png', Buffer.from(ss.data, 'base64'));

      // 6. Work Showcase
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 5000);` });
      await new Promise(r => setTimeout(r, 100));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_home_work.png', Buffer.from(ss.data, 'base64'));

      // 7. Pricing
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 6700);` });
      await new Promise(r => setTimeout(r, 100));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_home_pricing.png', Buffer.from(ss.data, 'base64'));

      // 8. Comparison Table
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 8400);` });
      await new Promise(r => setTimeout(r, 100));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_home_comparison.png', Buffer.from(ss.data, 'base64'));

      // 9. People / Baner Lab
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 9300);` });
      await new Promise(r => setTimeout(r, 100));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_home_people.png', Buffer.from(ss.data, 'base64'));

      // 10. FAQ Accordion
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 11700);` });
      await new Promise(r => setTimeout(r, 100));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_home_faq.png', Buffer.from(ss.data, 'base64'));

      // 11. Closing + Footer
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 12600);` });
      await new Promise(r => setTimeout(r, 100));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_home_closing_footer.png', Buffer.from(ss.data, 'base64'));

      // 12. Dropdown Open
      await send('Runtime.evaluate', {
        expression: `
          window.scrollTo(0, 0);
          const item = document.querySelector('.nav-item[data-nav="services"]');
          item.setAttribute('data-open', '');
          item.querySelector('[aria-expanded]')?.setAttribute('aria-expanded', 'true');
          document.getElementById('nav')?.classList.add('nav-open');
        `
      });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_dropdown_open.png', Buffer.from(ss.data, 'base64'));

      // 13. Mobile Top (390x844)
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });
      await send('Runtime.evaluate', {
        expression: `
          window.scrollTo(0, 0);
          const item = document.querySelector('.nav-item[data-nav="services"]');
          item.removeAttribute('data-open');
          document.getElementById('nav')?.classList.remove('nav-open');
        `
      });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_mobile_top.png', Buffer.from(ss.data, 'base64'));

      // 14. Mobile Drawer Open
      await send('Runtime.evaluate', {
        expression: `document.getElementById('nav-burger')?.click();`
      });
      await new Promise(r => setTimeout(r, 200));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/v_mobile_drawer.png', Buffer.from(ss.data, 'base64'));

      console.log('All verification screenshots captured successfully!');
      ws.close();
      chrome.kill();
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

