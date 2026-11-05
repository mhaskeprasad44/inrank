const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9658;
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

    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const p = document.getElementById('pricing');
          if (p) p.scrollIntoView({ behavior: 'instant', block: 'start' });
        })()
      `
    });
    await new Promise(r => setTimeout(r, 800));

    // Scroll 250px down so the 3 pricing cards are front and center
    await send('Runtime.evaluate', { expression: `window.scrollBy(0, 260);` });
    await new Promise(r => setTimeout(r, 400));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verify_hp_pricing_fixed_view.png'), Buffer.from(shot.data, 'base64'));
    console.log('Saved verify_hp_pricing_fixed_view.png');

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);
