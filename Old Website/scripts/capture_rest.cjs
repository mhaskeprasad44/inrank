const { spawn } = require('child_process');
const fs = require('fs');

async function captureRest() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9355;
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
    await new Promise(r => setTimeout(r, 1500));

    const totalHeight = 15855;
    let step = 16;
    for (let scrollY = 12000; scrollY < totalHeight; scrollY += 750) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${scrollY})` });
      await new Promise(r => setTimeout(r, 400));
      const snap = await send('Page.captureScreenshot', { format: 'png' });
      const filename = `scripts/home_section_${step}_y${scrollY}.png`;
      fs.writeFileSync(filename, Buffer.from(snap.data, 'base64'));
      console.log('Saved:', filename);
      step++;
    }

    try { chrome.kill(); } catch (e) {}
    process.exit(0);
  };
}
captureRest();

