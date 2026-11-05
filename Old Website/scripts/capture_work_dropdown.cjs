const { spawn } = require('child_process');
const fs = require('fs');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9370;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  let connected = false, tabs = null;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      tabs = await res.json();
      if (tabs.find(t => t.type === 'page')) { connected = true; break; }
    } catch(e) {}
  }

  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise(res => {
        const id = msgId++;
        const h = (evt) => {
          const d = JSON.parse(evt.data);
          if (d.id === id) { ws.removeEventListener('message', h); res(d.result); }
        };
        ws.addEventListener('message', h);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('DOM.enable');
    await send('Runtime.enable');

    await send('Page.navigate', { url: 'http://localhost:8080/' });
    await new Promise(r => setTimeout(r, 1200));

    // Open work dropdown
    await send('Runtime.evaluate', { expression: `(() => {
      const navItem = document.querySelector('.nav-item[data-dropdown="work"]');
      if (navItem) {
        navItem.setAttribute('data-open', 'true');
      }
    })()` });
    await new Promise(r => setTimeout(r, 600));

    const snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_work_dropdown_open.png', Buffer.from(snap.data, 'base64'));
    console.log('Saved: scripts/verified_work_dropdown_open.png');

    try { chrome.kill(); } catch (e) {}
    process.exit(0);
  };
}
test();

