const { spawn } = require('child_process');
const fs = require('fs');

async function testMobilePricing() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9351;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    '--no-sandbox',
    'http://localhost:8080/pricing.html'
  ]);

  let tabs = null;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      tabs = await res.json();
      if (tabs.find(t => t.type === 'page')) break;
    } catch(e) {}
  }

  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  let id = 1;
  const pending = new Map();
  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    if (pending.has(data.id)) {
      pending.get(data.id)(data.result);
      pending.delete(data.id);
    }
  };

  const send = (method, params = {}) => new Promise((resolve) => {
    const curId = id++;
    pending.set(curId, resolve);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await new Promise(r => ws.onopen = r);
  await new Promise(r => setTimeout(r, 1000));

  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });

  await send('Runtime.evaluate', {
    expression: `
      const p = document.getElementById('pricing');
      if (p) p.scrollIntoView({ behavior: 'instant', block: 'start' });
    `
  });
  await new Promise(r => setTimeout(r, 400));

  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_mobile_pricing.png', Buffer.from(shot.data, 'base64'));

  // Test services pillars on mobile
  await send('Page.navigate', { url: 'http://localhost:8080/services.html' });
  await new Promise(r => setTimeout(r, 1200));

  await send('Runtime.evaluate', {
    expression: `
      const g = document.querySelector('.pillars-grid-4');
      if (g) g.scrollIntoView({ behavior: 'instant', block: 'center' });
    `
  });
  await new Promise(r => setTimeout(r, 400));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_mobile_pillars.png', Buffer.from(shot.data, 'base64'));

  ws.close();
  chrome.kill();
  console.log('Saved scripts/verified_mobile_pricing.png and verified_mobile_pillars.png');
}

testMobilePricing().catch(console.error);

