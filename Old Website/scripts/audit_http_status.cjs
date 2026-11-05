const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const testUrls = [
  '/',
  '/index.html',
  '/about.html',
  '/services.html',
  '/pricing.html',
  '/our-work.html',
  '/case-studies.html',
  '/contact.html',
  '/blog.html',
  '/privacy-policy.html',
  '/terms-and-conditions.html',
  '/digital-marketing-agency-in-pune.html',
  '/website-design-company-in-pune.html',
  '/our-work/cytos.html',
  '/our-work/fludio.html',
  '/our-work/greytothegreen.html',
  '/our-work/dravyafinancial.html',
  '/case-studies/cytos.html',
  '/case-studies/fludio.html',
  '/services/seo-company-pune.html',
  '/services/custom-website-development.html',
  '/services/ai-seo-services.html',
  '/services/ai-ranking-citations.html',
  '/services/geo-seo-agency.html',
  '/blog/top-digital-marketing-web-development-agencies-pune.html',
  '/blog/ai-seo-agency-generative-optimization.html'
];

async function checkHttpStatusAndConsole() {
  console.log('Testing HTTP responses on http://localhost:8080...');
  const httpResults = [];
  for (const u of testUrls) {
    try {
      const res = await fetch('http://localhost:8080' + u);
      if (res.status >= 400) {
        httpResults.push({ url: u, status: res.status });
      }
    } catch (e) {
      httpResults.push({ url: u, error: e.message });
    }
  }

  console.log('HTTP errors count:', httpResults.length);
  if (httpResults.length > 0) {
    console.log(httpResults);
  }

  // Now test browser console errors with headless Chrome
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9719;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  const consoleLogs = [];

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((res) => {
        const id = msgId++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            res(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === 'Runtime.consoleAPICalled' || data.method === 'Log.entryAdded') {
        const entry = data.params.entry || data.params;
        const type = entry.type || entry.level;
        if (type === 'error' || type === 'warning') {
          consoleLogs.push({ method: data.method, entry });
        }
      }
      if (data.method === 'Runtime.exceptionThrown') {
        consoleLogs.push({ exception: data.params.exceptionDetails });
      }
    });

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Log.enable');

    const samplePagesToNavigate = [
      '/',
      '/services.html',
      '/pricing.html',
      '/our-work.html',
      '/case-studies.html',
      '/contact.html',
      '/blog.html',
      '/our-work/cytos.html',
      '/services/ai-seo-services.html'
    ];

    for (const p of samplePagesToNavigate) {
      consoleLogs.length = 0; // reset for this page
      await send('Page.navigate', { url: 'http://localhost:8080' + p });
      await new Promise(r => setTimeout(r, 1200));
      if (consoleLogs.length > 0) {
        console.log(`[PAGE ERROR/WARN] on ${p}:`, consoleLogs);
      } else {
        console.log(`[OK] No console exceptions on ${p}`);
      }
    }

    ws.close();
    chrome.kill();
  };
}

checkHttpStatusAndConsole().catch(console.error);

