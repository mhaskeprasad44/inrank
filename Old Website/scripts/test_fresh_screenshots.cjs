const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9233',
  '--window-size=1440,900',
  '--no-sandbox',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9233/json');
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

      // 1. Top
      await send('Runtime.evaluate', { expression: `document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, 0);` });
      await new Promise(r => setTimeout(r, 150));
      let ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_new_top.png', Buffer.from(ss.data, 'base64'));

      // 2. Scrolled dock (y=400)
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 400);` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_new_dock_scrolled.png', Buffer.from(ss.data, 'base64'));

      // 3. Middle (y=1200)
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 1200);` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_new_middle.png', Buffer.from(ss.data, 'base64'));

      // 4. Pricing (y=6800)
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 6800);` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_new_pricing.png', Buffer.from(ss.data, 'base64'));

      // 5. Closing & Footer (y=12700)
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, 12700);` });
      await new Promise(r => setTimeout(r, 150));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_new_footer.png', Buffer.from(ss.data, 'base64'));

      // 6. Dropdown open
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
      fs.writeFileSync('scripts/ss_new_dropdown.png', Buffer.from(ss.data, 'base64'));

      // 7. Mobile top
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
      fs.writeFileSync('scripts/ss_new_mobile_top.png', Buffer.from(ss.data, 'base64'));

      // 8. Mobile open drawer
      await send('Runtime.evaluate', {
        expression: `document.getElementById('nav-burger')?.click();`
      });
      await new Promise(r => setTimeout(r, 200));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_new_mobile_drawer.png', Buffer.from(ss.data, 'base64'));

      console.log('All 8 new screenshots taken!');
      ws.close();
      chrome.kill();
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

