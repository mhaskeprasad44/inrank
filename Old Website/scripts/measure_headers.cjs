const { spawn } = require('child_process');
const http = require('http');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9419;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,1200',
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

  const pages = [
    'http://localhost:8080/index.html',
    'http://localhost:8080/services/seo-company-pune.html',
    'http://localhost:8080/our-work/fludio.html',
    'http://localhost:8080/about.html'
  ];

  for (const page of pages) {
    await send('Page.navigate', { url: page });
    await new Promise(r => setTimeout(r, 1200));
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 300);' });
    await new Promise(r => setTimeout(r, 600));

    const r = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const nav = document.getElementById('nav');
          const bar = nav ? nav.querySelector('.nav-bar') : null;
          const rect = bar ? bar.getBoundingClientRect() : null;
          const s = document.querySelector('.eco-shell') || document.querySelector('.shell');
          const sRect = s ? s.getBoundingClientRect() : null;
          return JSON.stringify({
            url: window.location.href,
            isScrolled: nav ? nav.classList.contains('is-scrolled') : false,
            barWidth: rect ? Math.round(rect.width) : null,
            barHeight: rect ? Math.round(rect.height) : null,
            shellWidth: sRect ? Math.round(sRect.width) : null
          });
        })()
      `
    });
    console.log(page, '->', r.result ? r.result.result.value : r);
  }
  ws.close();
  chrome.kill();
  process.exit(0);
}
test().catch(e => { console.error(e); process.exit(1); });
