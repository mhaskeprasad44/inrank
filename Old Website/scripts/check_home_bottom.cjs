const { spawn } = require('child_process');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9402;
  const chrome = spawn(chromePath, ['--headless', '--disable-gpu', '--remote-debugging-port=' + port, '--no-sandbox', 'about:blank']);
  await new Promise(r => setTimeout(r, 1000));
  const res = await fetch('http://127.0.0.1:' + port + '/json');
  const tabs = await res.json();
  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);

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

    const res1 = await send('Runtime.evaluate', { expression: `(() => {
      window.scrollTo(0, 999999);
      return {
        scrollY: window.scrollY,
        innerHeight: window.innerHeight,
        bodyHeight: document.body.scrollHeight,
        docHeight: document.documentElement.scrollHeight
      };
    })()`, returnByValue: true });
    console.log('Scroll state:', res1.result.value);

    const snap = await send('Page.captureScreenshot', { format: 'png' });
    require('fs').writeFileSync('scripts/home_bottom_verified.png', Buffer.from(snap.data, 'base64'));

    try { chrome.kill(); } catch (e) {}
    process.exit(0);
  };
}
test();

