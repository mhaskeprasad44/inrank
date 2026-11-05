const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9662;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/services/seo-company-pune.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('seo-company-pune.html')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    // 1. Click on Services button
    const res = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btn = document.querySelector('.nav-item[data-dropdown="services"] button');
          if (btn) btn.click();
          const drop = document.querySelector('.nav-item[data-dropdown="services"] .nav-drop');
          const s = drop ? window.getComputedStyle(drop) : null;
          return {
            hasBtn: !!btn,
            dropDisplay: s ? s.display : null,
            dropVisibility: s ? s.visibility : null,
            dropOpacity: s ? s.opacity : null,
            dropWidth: s ? s.width : null,
            dropHeight: s ? s.height : null,
            dropTop: s ? s.top : null,
            dropLeft: s ? s.left : null,
            dropTransform: s ? s.transform : null,
            rect: drop ? drop.getBoundingClientRect() : null
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Drop status:', res.result.value);

    await new Promise(r => setTimeout(r, 400));
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'service_dropdown_open_broken.png'), Buffer.from(shot.data, 'base64'));
    console.log('Saved service_dropdown_open_broken.png');

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

