const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function captureDetailedElements() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9450;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,1050',
    '--no-sandbox',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const tabs = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:' + port + '/json', res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
  const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
  const WebSocket = require('ws');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise((resolve) => {
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

  await send('Page.navigate', { url: 'http://localhost:8080/index.html' });
  await new Promise(r => setTimeout(r, 2000));

  // Capture Pillars Strip specifically
  const pillarsRect = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.querySelector('.pillars-strip');
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { x: r.x, y: r.y + window.scrollY, width: r.width, height: r.height };
      })()
    `,
    returnByValue: true
  });
  console.log('Pillars strip rect:', pillarsRect.result.result.value);

  if (pillarsRect.result.result.value) {
    const r = pillarsRect.result.result.value;
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${Math.max(0, r.y - 120)});` });
    await new Promise(r => setTimeout(r, 400));
    const pic = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_redesigned_pillars_strip.png', Buffer.from(pic.result.data, 'base64'));
    console.log('Saved scripts/verified_redesigned_pillars_strip.png');
  }

  // Capture Services Grid specifically
  const gridRect = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.querySelector('.services-grid');
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { x: r.x, y: r.y + window.scrollY, width: r.width, height: r.height };
      })()
    `,
    returnByValue: true
  });
  console.log('Services grid rect:', gridRect.result.result.value);

  if (gridRect.result.result.value) {
    const r = gridRect.result.result.value;
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${Math.max(0, r.y - 60)});` });
    await new Promise(r => setTimeout(r, 400));
    const pic = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_services_grid_8cards.png', Buffer.from(pic.result.data, 'base64'));
    console.log('Saved scripts/verified_services_grid_8cards.png');
  }

  // Capture Manifesto Section specifically
  const manRect = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.querySelector('.manifesto-section');
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { x: r.x, y: r.y + window.scrollY, width: r.width, height: r.height };
      })()
    `,
    returnByValue: true
  });
  console.log('Manifesto rect:', manRect.result.result.value);

  if (manRect.result.result.value) {
    const r = manRect.result.result.value;
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${Math.max(0, r.y)});` });
    await new Promise(r => setTimeout(r, 400));
    const pic = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_manifesto_section.png', Buffer.from(pic.result.data, 'base64'));
    console.log('Saved scripts/verified_manifesto_section.png');
  }

  ws.close();
  chrome.kill();
  console.log('Done.');
}

captureDetailedElements().catch(console.error);

