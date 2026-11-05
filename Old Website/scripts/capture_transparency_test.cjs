const { spawn } = require('child_process');
const fs = require('fs');

async function testTransparentHeader() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9353;
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

  // Scroll to where heading "OUR OPERATING PHILOSOPHY" or cards are passing behind the header
  await send('Runtime.evaluate', {
    expression: `
      window.scrollTo(0, 1500);
    `
  });
  await new Promise(r => setTimeout(r, 500));

  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_transparency_1500.png', Buffer.from(shot.data, 'base64'));

  // Also scroll to position 850 (over services title)
  await send('Runtime.evaluate', {
    expression: `
      window.scrollTo(0, 850);
    `
  });
  await new Promise(r => setTimeout(r, 500));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_transparency_850.png', Buffer.from(shot.data, 'base64'));

  ws.close();
  chrome.kill();
  console.log('Saved transparency test screenshots');
}

testTransparentHeader().catch(console.error);

