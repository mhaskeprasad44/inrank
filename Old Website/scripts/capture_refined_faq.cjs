const { spawn } = require('child_process');
const fs = require('fs');

async function testRefinedFaq() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9350;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
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

  await send('Runtime.evaluate', {
    expression: `
      const faq = document.getElementById('faq');
      if (faq) faq.scrollIntoView({ behavior: 'instant', block: 'start' });
    `
  });
  await new Promise(r => setTimeout(r, 500));

  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_refined_faq.png', Buffer.from(shot.data, 'base64'));

  // Click first FAQ to test expansion
  await send('Runtime.evaluate', {
    expression: `
      const firstFaqBtn = document.querySelector('.faq-btn');
      if (firstFaqBtn) firstFaqBtn.click();
    `
  });
  await new Promise(r => setTimeout(r, 400));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_refined_faq_expanded.png', Buffer.from(shot.data, 'base64'));

  ws.close();
  chrome.kill();
  console.log('Saved scripts/verified_refined_faq.png and verified_refined_faq_expanded.png');
}

testRefinedFaq().catch(console.error);

