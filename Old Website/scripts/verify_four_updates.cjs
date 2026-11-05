const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function shot(action) {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9422;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,1100',
    '--no-sandbox',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1200));
  const tabs = await new Promise((resolve) => {
    http.get('http://127.0.0.1:' + port + '/json', res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    });
  });
  const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
  const WebSocket = require('ws');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise(resolve => {
    const curId = id++;
    const handler = msg => {
      const res = JSON.parse(msg);
      if (res.id === curId) { ws.off('message', handler); resolve(res); }
    };
    ws.on('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });
  await new Promise(r => ws.on('open', r));
  await send('Page.enable');
  await send('Runtime.enable');

  try {
    await action(send);
  } finally {
    ws.close();
    chrome.kill();
  }
}

async function run() {
  // 1. Verify About Dropdown Open
  await shot(async (send) => {
    await send('Page.navigate', { url: 'http://localhost:8080/index.html' });
    await new Promise(r => setTimeout(r, 1200));

    // Hover or open about dropdown
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const item = document.querySelector('.nav-item[data-dropdown="about"]');
          if (item) item.setAttribute('data-open', '');
          const nav = document.getElementById('nav');
          if (nav) nav.classList.add('nav-open');
        })()
      `
    });
    await new Promise(r => setTimeout(r, 500));

    const pic = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verify_about_dropdown_open.png', Buffer.from(pic.result.data, 'base64'));
    console.log('Saved scripts/verify_about_dropdown_open.png');
  });

  // 2. Verify Redesigned 4 Pillars Strip on Homepage
  await shot(async (send) => {
    await send('Page.navigate', { url: 'http://localhost:8080/index.html' });
    await new Promise(r => setTimeout(r, 1200));
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, 1950);` });
    await new Promise(r => setTimeout(r, 500));

    const res = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const el = document.querySelector('.pillars-strip');
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { x: r.left, y: r.top + window.scrollY - 120, width: r.width, height: r.height + 240 };
        })()
      `,
      returnByValue: true
    });

    const clip = res.result && res.result.value ? res.result.value : null;
    let captureParams = { format: 'png' };
    if (clip) {
      captureParams.clip = {
        x: Math.max(0, clip.x - 20),
        y: Math.max(0, clip.y),
        width: Math.min(1440, clip.width + 40),
        height: Math.min(1100, clip.height),
        scale: 1
      };
    }
    const pic = await send('Page.captureScreenshot', captureParams);
    fs.writeFileSync('scripts/verify_redesigned_pillars_strip.png', Buffer.from(pic.result.data, 'base64'));
    console.log('Saved scripts/verify_redesigned_pillars_strip.png');
  });

  // 3. Verify Service Page Hero (Reduced H1 and Outlined Logo)
  await shot(async (send) => {
    await send('Page.navigate', { url: 'http://localhost:8080/services/seo-company-pune.html' });
    await new Promise(r => setTimeout(r, 1200));

    const res = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const title = document.querySelector('.eco-title');
          const avail = document.querySelector('.eco-availability');
          const computed = title ? window.getComputedStyle(title) : null;
          return {
            h1FontSize: computed ? computed.fontSize : null,
            h1LineHeight: computed ? computed.lineHeight : null,
            availText: avail ? avail.innerText.trim() : null
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Service Page Hero Metrics:', res.result ? res.result.value : res);

    const pic = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verify_service_page_hero.png', Buffer.from(pic.result.data, 'base64'));
    console.log('Saved scripts/verify_service_page_hero.png');
  });
}

run().catch(console.error);

