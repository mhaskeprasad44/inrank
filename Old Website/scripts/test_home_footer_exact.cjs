const { spawn } = require('child_process');

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9399;
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

    await send('Page.navigate', { url: 'http://localhost:8080/' });
    await new Promise(r => setTimeout(r, 2000));

    const rect = await send('Runtime.evaluate', { expression: `(() => {
      const ft = document.querySelector('footer.ft');
      return {
        top: ft ? ft.offsetTop : null,
        height: ft ? ft.offsetHeight : null,
        scrollHeight: document.documentElement.scrollHeight
      };
    })()`, returnByValue: true });
    console.log('Footer offset:', rect.result.value);

    // Now scroll directly to ft.offsetTop
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, document.querySelector('footer.ft').offsetTop);` });
    await new Promise(r => setTimeout(r, 800));

    const snap = await send('Page.captureScreenshot', { format: 'png' });
    require('fs').writeFileSync('scripts/verified_homepage_footer_success.png', Buffer.from(snap.data, 'base64'));
    console.log('Saved: scripts/verified_homepage_footer_success.png');

    try { chrome.kill(); } catch (e) {}
    process.exit(0);
  };
}
run();

