const { spawn } = require('child_process');
const fs = require('fs');

async function testContactPage() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9355;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/contact.html'
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
  await new Promise(r => setTimeout(r, 1200));

  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/broken_contact_top.png', Buffer.from(shot.data, 'base64'));

  // Scroll down 600px
  await send('Runtime.evaluate', { expression: `window.scrollBy(0, 600);` });
  await new Promise(r => setTimeout(r, 500));
  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/broken_contact_mid.png', Buffer.from(shot.data, 'base64'));

  // Full page height
  const heightRes = await send('Runtime.evaluate', { expression: `document.body.scrollHeight` });
  console.log('Contact page total scrollHeight:', heightRes.result.value);

  ws.close();
  chrome.kill();
  console.log('Saved contact screenshots');
}

testContactPage().catch(console.error);

