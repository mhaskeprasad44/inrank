const { spawn } = require('child_process');
const http = require('http');

async function testHeader() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9416;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,1200',
    '--no-sandbox',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1200));

  function getJSON(url) {
    return new Promise((resolve, reject) => {
      http.get(url, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });
  }

  const tabs = await getJSON(`http://127.0.0.1:${port}/json`);
  const wsUrl = tabs[0].webSocketDebuggerUrl;
  const WebSocket = require('ws');
  const ws = new WebSocket(wsUrl);

  let id = 1;
  function send(method, params = {}) {
    return new Promise(resolve => {
      const curId = id++;
      const handler = msg => {
        const res = JSON.parse(msg);
        if (res.id === curId) {
          ws.off('message', handler);
          resolve(res.result);
        }
      };
      ws.on('message', handler);
      ws.send(JSON.stringify({ id: curId, method, params }));
    });
  }

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
    await new Promise(r => setTimeout(r, 1000));
    // Scroll down 200px
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 300);' });
    await new Promise(r => setTimeout(r, 400));

    const res = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const nav = document.getElementById('nav');
          const bar = nav ? nav.querySelector('.nav-bar') : null;
          const rect = bar ? bar.getBoundingClientRect() : null;
          const computed = bar ? window.getComputedStyle(bar) : null;
          return {
            page: window.location.pathname,
            isScrolledClass: nav ? nav.classList.contains('is-scrolled') : false,
            barWidth: rect ? rect.width : null,
            barHeight: rect ? rect.height : null,
            barMaxWidth: computed ? computed.maxWidth : null,
            shellWidth: (() => {
              const s = document.querySelector('.shell, .eco-shell');
              return s ? s.getBoundingClientRect().width : null;
            })()
          };
        })()
      `,
      returnByValue: true
    });
    console.log(page, res.value);
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

testHeader().catch(e => { console.error(e); process.exit(1); });

