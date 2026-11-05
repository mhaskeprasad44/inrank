const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function testOpenDropdown() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9438;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,1000',
    '--no-sandbox',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const tabs = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:' + port + '/json', res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
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

  // Set data-open on work item
  const res = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const item = document.querySelector('[data-dropdown="work"]');
        if (item) {
          item.setAttribute('data-open', 'true');
          const drop = item.querySelector('.drop-work');
          const rect = drop ? drop.getBoundingClientRect() : null;
          return { found: true, rect };
        }
        return { found: false };
      })()
    `,
    returnByValue: true
  });
  console.log('Work dropdown eval:', res.result.result.value);

  await new Promise(r => setTimeout(r, 400));
  const pic = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/test_work_drop_open.png', Buffer.from(pic.result.data, 'base64'));
  console.log('Saved scripts/test_work_drop_open.png');

  ws.close();
  chrome.kill();
}

testOpenDropdown().catch(console.error);

