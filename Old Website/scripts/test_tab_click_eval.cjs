const { spawn } = require('child_process');

async function testClick() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9347;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
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

  const result1 = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = document.querySelector('button[data-tab="tab-social"]');
        if (!btn) return 'btn not found';
        btn.click();
        const activeBtn = document.querySelector('.pricing-tab-btn.active');
        const visiblePanel = Array.from(document.querySelectorAll('.pricing-content-panel')).filter(p => !p.classList.contains('is-hidden')).map(p => p.id);
        return {
          activeBtnText: activeBtn ? activeBtn.textContent : null,
          visiblePanel
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Click result:', JSON.stringify(result1.result.value));

  ws.close();
  chrome.kill();
}

testClick().catch(console.error);

