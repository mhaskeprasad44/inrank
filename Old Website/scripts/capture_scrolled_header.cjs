const { spawn } = require('child_process');
const fs = require('fs');

async function testScrolledHeader() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9352;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/index.html'
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

  // 1. Scroll slightly down over the services section (light background)
  await send('Runtime.evaluate', {
    expression: `
      window.scrollTo(0, 1200);
    `
  });
  await new Promise(r => setTimeout(r, 600));

  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_scrolled_header_services.png', Buffer.from(shot.data, 'base64'));

  // 2. Scroll to philosophy section
  await send('Runtime.evaluate', {
    expression: `
      window.scrollTo(0, 2400);
    `
  });
  await new Promise(r => setTimeout(r, 600));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_scrolled_header_philosophy.png', Buffer.from(shot.data, 'base64'));

  ws.close();
  chrome.kill();
  console.log('Saved scripts/verified_scrolled_header_services.png and philosophy.png');
}

testScrolledHeader().catch(console.error);

