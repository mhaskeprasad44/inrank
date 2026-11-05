const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9223',
  '--window-size=1440,900',
  '--no-sandbox',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9223/json');
    const tabs = await listRes.json();
    const targetTab = tabs.find(t => t.url.includes('localhost:8080'));
    if (!targetTab) {
      console.log('Target tab not found');
      chrome.kill();
      return;
    }
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

      // 1. Desktop y=0
      let ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_desktop_top.png', Buffer.from(ss.data, 'base64'));

      // 2. Desktop y=600 (scrolled onto hero bottom / marquee)
      await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 600);' });
      await new Promise(r => setTimeout(r, 200));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_desktop_scrolled_600.png', Buffer.from(ss.data, 'base64'));

      // 3. Desktop y=1200 (light section)
      await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 1200);' });
      await new Promise(r => setTimeout(r, 200));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_desktop_scrolled_1200.png', Buffer.from(ss.data, 'base64'));

      // 4. Services dropdown opened
      await send('Runtime.evaluate', {
        expression: `
          const item = document.querySelector('.nav-item[data-nav="services"]');
          if (item) {
            item.setAttribute('data-open', '');
            item.querySelector('[aria-expanded]')?.setAttribute('aria-expanded', 'true');
            document.getElementById('nav')?.classList.add('nav-open');
          }
        `
      });
      await new Promise(r => setTimeout(r, 200));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_desktop_dropdown.png', Buffer.from(ss.data, 'base64'));

      // 5. Mobile 390x844
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });
      await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
      await new Promise(r => setTimeout(r, 200));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_mobile_top.png', Buffer.from(ss.data, 'base64'));

      // 6. Mobile open drawer
      await send('Runtime.evaluate', {
        expression: `
          document.getElementById('nav-burger')?.click();
        `
      });
      await new Promise(r => setTimeout(r, 300));
      ss = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('scripts/ss_mobile_drawer.png', Buffer.from(ss.data, 'base64'));

      console.log('All 6 screenshots captured!');
      ws.close();
      chrome.kill();
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

