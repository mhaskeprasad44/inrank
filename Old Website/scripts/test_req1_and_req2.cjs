const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9415;
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
  const targetTab = tabs.find(t => t.url.includes('localhost:8080')) || tabs[0];
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
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });

    await new Promise(r => setTimeout(r, 1200));

    // 1. Top of homepage (y = 0): dark logo, all 8 stickers balanced, proper vertical spacing
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await new Promise(r => setTimeout(r, 600));
    const topShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'test_hero_aligned.png'), Buffer.from(topShot.data, 'base64'));
    console.log('Saved test_hero_aligned.png');

    // 2. Open the Services dropdown to simulate hover at y = 0
    await send('Runtime.evaluate', { 
      expression: `
        const nav = document.getElementById('nav');
        const sDrop = document.querySelector('[data-dropdown="services"]');
        const sBtn = sDrop ? sDrop.querySelector('.nav-link') : null;
        if (sBtn) {
          sBtn.click();
        }
      ` 
    });
    await new Promise(r => setTimeout(r, 800));
    const hoverShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'test_header_hover_dropdown.png'), Buffer.from(hoverShot.data, 'base64'));
    console.log('Saved test_header_hover_dropdown.png');

    chrome.kill();
    process.exit(0);
  };
}

main();

