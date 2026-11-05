const { spawn } = require('child_process');
const fs = require('fs');

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9382;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,1100',
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

    // 1. Capture Dravya individual work page
    await send('Page.navigate', { url: 'http://localhost:8080/our-work/dravyafinancial.html' });
    await new Promise(r => setTimeout(r, 1500));
    let snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/check_req1_work_page.png', Buffer.from(snap.data, 'base64'));
    console.log('Saved: scripts/check_req1_work_page.png');

    // 2. Capture Services Dropdown
    await send('Page.navigate', { url: 'http://localhost:8080/' });
    await new Promise(r => setTimeout(r, 1500));
    await send('Runtime.evaluate', { expression: `(() => {
      const navItem = document.querySelector('.nav-item[data-dropdown="services"]');
      if (navItem) navItem.setAttribute('data-open', 'true');
    })()` });
    await new Promise(r => setTimeout(r, 600));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/check_req2_services_dropdown.png', Buffer.from(snap.data, 'base64'));
    console.log('Saved: scripts/check_req2_services_dropdown.png');

    // 3. Capture Our Work Dropdown
    await send('Runtime.evaluate', { expression: `(() => {
      const serv = document.querySelector('.nav-item[data-dropdown="services"]');
      if (serv) serv.removeAttribute('data-open');
      const work = document.querySelector('.nav-item[data-dropdown="work"]');
      if (work) work.setAttribute('data-open', 'true');
    })()` });
    await new Promise(r => setTimeout(r, 600));
    snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/check_req3_work_dropdown.png', Buffer.from(snap.data, 'base64'));
    console.log('Saved: scripts/check_req3_work_dropdown.png');

    try { chrome.kill(); } catch (e) {}
    process.exit(0);
  };
}
run();

