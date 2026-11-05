const { spawn } = require('child_process');
const fs = require('fs');

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9392;
  const fileUrl = 'file:///C:/Users/PrasadMhaske/Downloads/Anti%20Websites/Web/Inrank/scripts/preview_oacer_footer.html';
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

    await send('Page.navigate', { url: fileUrl });
    await new Promise(r => setTimeout(r, 1500));

    let snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/oacer_rendered_footer.png', Buffer.from(snap.data, 'base64'));
    console.log('Saved: scripts/oacer_rendered_footer.png');

    try { chrome.kill(); } catch (e) {}
    process.exit(0);
  };
}
run();

