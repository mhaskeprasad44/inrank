const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function testCompBadges() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9455;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,1050',
    '--no-sandbox',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const tabs = await new Promise((resolve) => {
    http.get('http://127.0.0.1:' + port + '/json', res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    });
  });
  const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
  const WebSocket = require('ws');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise((resolve) => {
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

  await send('Page.navigate', { url: 'http://localhost:8080/index.html' });
  await new Promise(r => setTimeout(r, 2000));

  const compSec = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.getElementById('comparison');
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { y: r.y + window.scrollY };
      })()
    `,
    returnByValue: true
  });

  if (compSec.result.result.value) {
    const y = compSec.result.result.value.y;
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${y});` });
    await new Promise(r => setTimeout(r, 400));
    const pic = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_comparison_clean_text.png', Buffer.from(pic.result.data, 'base64'));
    console.log('Saved scripts/verified_comparison_clean_text.png');
  }

  ws.close();
  chrome.kill();
}

testCompBadges().catch(console.error);

