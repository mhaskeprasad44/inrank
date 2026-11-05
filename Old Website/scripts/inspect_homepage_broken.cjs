const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function inspectHomepage() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9425;
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

  await send('Page.navigate', { url: 'http://localhost:8080/index.html' });
  await new Promise(r => setTimeout(r, 1500));

  const info = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const sections = Array.from(document.querySelectorAll('section, header, footer')).map(s => ({
          tag: s.tagName,
          id: s.id,
          class: s.className,
          rect: s.getBoundingClientRect()
        }));
        return JSON.stringify({ height, sections });
      })()
    `
  });

  const parsed = JSON.parse(info.result.result.value);
  console.log('Total height:', parsed.height);
  console.log('Sections count:', parsed.sections.length);
  parsed.sections.forEach((s, idx) => {
    console.log(`Sec ${idx}: <${s.tag} id="${s.id}" class="${s.class}"> top=${Math.round(s.rect.top)} h=${Math.round(s.rect.height)} w=${Math.round(s.rect.width)}`);
  });

  // Capture slices
  const scrollPositions = [0, 800, 1600, 2400, 3200, 4000, 4800, 5600, 6400, 7200, 8000, 8800, 9600];
  for (let i = 0; i < scrollPositions.length; i++) {
    const y = scrollPositions[i];
    if (y > parsed.height) break;
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${y});` });
    await new Promise(r => setTimeout(r, 400));
    const pic = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`scripts/home_broken_check_${i}_y${y}.png`, Buffer.from(pic.result.data, 'base64'));
    console.log(`Saved scripts/home_broken_check_${i}_y${y}.png`);
  }

  ws.close();
  chrome.kill();
}

inspectHomepage().catch(console.error);
