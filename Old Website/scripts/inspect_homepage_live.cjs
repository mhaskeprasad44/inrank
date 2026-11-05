const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function testHomepage() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9433;
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
  const send = (method, params = {}) => new Promise((resolve, reject) => {
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

  const evalRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const sections = Array.from(document.querySelectorAll('section, header, footer')).map(s => {
          const r = s.getBoundingClientRect();
          return {
            id: s.id,
            className: s.className,
            top: Math.round(r.top + window.scrollY),
            height: Math.round(r.height),
            width: Math.round(r.width)
          };
        });
        return { height, sections };
      })()
    `,
    returnByValue: true
  });

  const data = evalRes.result.result.value;
  console.log('Homepage document height:', data.height);
  console.log('Sections:');
  data.sections.forEach((s, idx) => {
    console.log(`[${idx}] #${s.id || '(no id)'} .${s.className} -> top: ${s.top}px, h: ${s.height}px, w: ${s.width}px`);
  });

  // Take screenshot of hero
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
  await new Promise(r => setTimeout(r, 400));
  let pic = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/home_inspect_hero.png', Buffer.from(pic.result.data, 'base64'));

  // Take screenshot of manifesto & operating (y=1000)
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 1000);' });
  await new Promise(r => setTimeout(r, 400));
  pic = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/home_inspect_manifesto.png', Buffer.from(pic.result.data, 'base64'));

  // Take screenshot of services section
  const servSec = data.sections.find(s => s.id === 'services');
  if (servSec) {
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${servSec.top});` });
    await new Promise(r => setTimeout(r, 400));
    pic = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/home_inspect_services.png', Buffer.from(pic.result.data, 'base64'));
  }

  ws.close();
  chrome.kill();
  console.log('Inspection complete.');
}

testHomepage().catch(console.error);

