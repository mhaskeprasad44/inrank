const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function verifyNewLayout() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9488;
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

  const evalRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const sections = Array.from(document.querySelectorAll('section, footer')).map((s, idx) => {
          const r = s.getBoundingClientRect();
          return {
            idx,
            id: s.id,
            className: s.className,
            top: Math.round(r.top + window.scrollY),
            height: Math.round(r.height)
          };
        });
        const totalHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        return { totalHeight, sections };
      })()
    `,
    returnByValue: true
  });

  const { totalHeight, sections } = evalRes.result.result.value;
  console.log('New total document height:', totalHeight);
  sections.forEach(s => {
    console.log(`[${s.idx}] #${s.id || '(no id)'} .${s.className} -> top: ${s.top}px, h: ${s.height}px`);
  });

  // 1. Capture transition from Hero + Marquee to Services
  const servSec = sections.find(s => s.id === 'services');
  if (servSec) {
    // Scroll to right before services so we see the bottom of marquee and top of services
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${Math.max(0, servSec.top - 120)});` });
    await new Promise(r => setTimeout(r, 450));
    let pic = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_flow_1_marquee_to_services.png', Buffer.from(pic.result.data, 'base64'));
    console.log('Saved scripts/verified_flow_1_marquee_to_services.png');

    // Scroll to services grid
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${servSec.top + 100});` });
    await new Promise(r => setTimeout(r, 450));
    pic = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_flow_2_services_grid.png', Buffer.from(pic.result.data, 'base64'));
    console.log('Saved scripts/verified_flow_2_services_grid.png');
  }

  // 2. Capture transition from Services to OUR OPERATING PHILOSOPHY
  const philSec = sections.find(s => s.id === 'philosophy');
  if (philSec) {
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${Math.max(0, philSec.top - 80)});` });
    await new Promise(r => setTimeout(r, 450));
    const pic = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('scripts/verified_flow_3_services_to_philosophy.png', Buffer.from(pic.result.data, 'base64'));
    console.log('Saved scripts/verified_flow_3_services_to_philosophy.png');
  }

  ws.close();
  chrome.kill();
  console.log('Verification finished.');
}

verifyNewLayout().catch(console.error);

