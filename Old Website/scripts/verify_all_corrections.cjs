const { spawn } = require('child_process');
const fs = require('fs');

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9415;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,1200',
    '--no-sandbox',
    'about:blank'
  ]);

  let tabs = null;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch('http://127.0.0.1:' + port + '/json');
      tabs = await res.json();
      if (tabs.find(t => t.type === 'page')) break;
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
    await send('Runtime.enable');

    // 1. Capture Fludio
    await send('Page.navigate', { url: 'http://localhost:8080/our-work/fludio.html' });
    await new Promise(r => setTimeout(r, 1500));
    let snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_fludio_fountain.png', Buffer.from(snap.data, 'base64'));
    console.log('Saved: scripts/verified_fludio_fountain.png');

    // 2. Capture CyTOS
    await send('Page.navigate', { url: 'http://localhost:8080/our-work/cytos.html' });
    await new Promise(r => setTimeout(r, 1500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_cytos_cnc.png', Buffer.from(snap.data, 'base64'));
    console.log('Saved: scripts/verified_cytos_cnc.png');

    // 3. Capture Greytothegreen
    await send('Page.navigate', { url: 'http://localhost:8080/our-work/greytothegreen.html' });
    await new Promise(r => setTimeout(r, 1500));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_greytothegreen_skincare.png', Buffer.from(snap.data, 'base64'));
    console.log('Saved: scripts/verified_greytothegreen_skincare.png');

    // 4. Capture Dropdown Open
    await send('Page.navigate', { url: 'http://localhost:8080/' });
    await new Promise(r => setTimeout(r, 1500));
    await send('Runtime.evaluate', { expression: `(() => {
      const work = document.querySelector('.nav-item[data-dropdown=\"work\"]');
      if (work) work.setAttribute('data-open', 'true');
    })()` });
    await new Promise(r => setTimeout(r, 600));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_work_dropdown_corrected.png', Buffer.from(snap.data, 'base64'));
    console.log('Saved: scripts/verified_work_dropdown_corrected.png');

    try { chrome.kill(); } catch (e) {}
    process.exit(0);
  };
}
run();

