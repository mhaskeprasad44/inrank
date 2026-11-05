const { spawn } = require('child_process');
const fs = require('fs');

async function captureExact() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9723;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1050',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

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

    await send('Page.enable');
    await send('Runtime.enable');

    // 1. Homepage: view right between testimonials and pricing
    await send('Page.navigate', { url: 'http://localhost:8080/' });
    await new Promise(r => setTimeout(r, 800));
    await send('Runtime.evaluate', {
      expression: `(() => {
        const p = document.getElementById('pricing');
        if (p) {
          const r = p.getBoundingClientRect();
          window.scrollBy(0, r.top - 120);
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 500));
    const shotHome = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_homepage_no_checklist.png', Buffer.from(shotHome.data, 'base64'));
    console.log('Saved verified_homepage_no_checklist.png');

    // 2. Service page: view .thread-node cards
    await send('Page.navigate', { url: 'http://localhost:8080/services/seo-company-pune.html' });
    await new Promise(r => setTimeout(r, 800));
    await send('Runtime.evaluate', {
      expression: `(() => {
        const node = document.querySelector('.thread-node');
        if (node) {
          const r = node.getBoundingClientRect();
          window.scrollBy(0, r.top - 150);
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 500));
    const shotThread = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_service_thread_h3.png', Buffer.from(shotThread.data, 'base64'));
    console.log('Saved verified_service_thread_h3.png');

    ws.close();
    chrome.kill();
  };
}

captureExact().catch(console.error);

