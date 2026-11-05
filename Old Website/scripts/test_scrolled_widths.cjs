const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function shot(url, width, outPath) {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9420;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,1000',
    '--no-sandbox',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1200));
  const tabs = await new Promise((resolve) => {
    http.get('http://127.0.0.1:' + port + '/json', res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    });
  });
  const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
  const WebSocket = require('ws');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise(resolve => {
    const curId = id++;
    const handler = msg => {
      const res = JSON.parse(msg);
      if (res.id === curId) { ws.off('message', handler); resolve(res); }
    };
    ws.on('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });
  await new Promise(r => ws.on('open', r));
  await send('Page.enable');
  await send('Runtime.enable');

  await send('Page.navigate', { url });
  await new Promise(r => setTimeout(r, 1200));

  if (width) {
    await send('Runtime.evaluate', {
      expression: `
        const style = document.createElement('style');
        style.textContent = '#nav.is-scrolled .nav-bar { max-width: ${width} !important; width: min(${width}, calc(100% - 32px)) !important; }';
        document.head.appendChild(style);
      `
    });
  }

  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 400);' });
  await new Promise(r => setTimeout(r, 600));

  const pic = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(outPath, Buffer.from(pic.result.data, 'base64'));

  ws.close();
  chrome.kill();
}

async function run() {
  await shot('http://localhost:8080/index.html', null, 'scripts/shot_scrolled_1180.png');
  await shot('http://localhost:8080/index.html', '1400px', 'scripts/shot_scrolled_1400.png');
  console.log('Screenshots saved.');
}
run().catch(console.error);

