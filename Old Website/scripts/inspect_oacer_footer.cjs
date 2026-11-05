const { spawn } = require('child_process');
const fs = require('fs');

async function run() {
  // 1. Fetch and save raw footer HTML
  const res = await fetch('https://oacer.com/');
  const html = await res.text();
  const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
  if (footerMatch) {
    fs.writeFileSync('scripts/oacer_footer.html', footerMatch[0], 'utf8');
    console.log('Saved: scripts/oacer_footer.html');
  }

  // 2. Launch headless Chrome to take screenshot of oacer.com footer
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9390;
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

    await send('Page.navigate', { url: 'https://oacer.com/' });
    await new Promise(r => setTimeout(r, 3000));

    // Scroll to bottom
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, document.body.scrollHeight);` });
    await new Promise(r => setTimeout(r, 1000));

    let snap = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/oacer_footer_screenshot.png', Buffer.from(snap.data, 'base64'));
    console.log('Saved: scripts/oacer_footer_screenshot.png');

    // Also get computed styles of footer
    const styles = await send('Runtime.evaluate', { expression: `(() => {
      const f = document.querySelector('footer');
      if (!f) return null;
      const cs = window.getComputedStyle(f);
      return {
        background: cs.backgroundColor,
        color: cs.color,
        fontFamily: cs.fontFamily,
        padding: cs.padding
      };
    })()`, returnByValue: true });
    console.log('Computed styles of footer:', styles.result.value);

    try { chrome.kill(); } catch (e) {}
    process.exit(0);
  };
}
run();

