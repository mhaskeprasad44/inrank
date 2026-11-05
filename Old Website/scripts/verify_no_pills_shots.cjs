const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function shotElement(url, selector, outPath, scrollY = 0) {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9421;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,1200',
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

  await send('Page.navigate', { url });
  await new Promise(r => setTimeout(r, 1500));

  if (scrollY > 0) {
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${scrollY});` });
    await new Promise(r => setTimeout(r, 500));
  }

  // Get selector bounding rect
  const res = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.querySelector('${selector}');
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { x: r.left, y: r.top + window.scrollY, width: r.width, height: r.height };
      })()
    `,
    returnByValue: true
  });

  const clip = res.result && res.result.value ? res.result.value : null;

  let captureParams = { format: 'png' };
  if (clip) {
    captureParams.clip = {
      x: Math.max(0, clip.x),
      y: Math.max(0, clip.y),
      width: Math.min(1440, clip.width),
      height: Math.min(1200, clip.height),
      scale: 1
    };
  }

  const pic = await send('Page.captureScreenshot', captureParams);
  fs.writeFileSync(outPath, Buffer.from(pic.result.data, 'base64'));

  ws.close();
  chrome.kill();
  console.log(`Saved screenshot: ${outPath}`);
}

async function verifyAll() {
  await shotElement('http://localhost:8080/index.html', '#philosophy', 'scripts/verify_no_pill_philosophy.png', 700);
  await shotElement('http://localhost:8080/our-work/fludio.html', '.work-hero', 'scripts/verify_fludio_hero_button.png', 0);
  await shotElement('http://localhost:8080/our-work/fludio.html', '.work-details-grid', 'scripts/verify_fludio_kicker.png', 800);
}

verifyAll().catch(console.error);

