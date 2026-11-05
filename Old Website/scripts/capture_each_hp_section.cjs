const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9640;
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

    // Check each section individually:
    // Capture screenshot of each section by ID
    const sectionIds = ['top', 'services', 'philosophy', 'process', 'niches', 'proof', 'our-work', 'comparison', 'about', 'testimonials', 'lead-magnet', 'pricing', 'faq', 'contact'];
    
    for (const sid of sectionIds) {
      await send('Runtime.evaluate', {
        expression: `
          (() => {
            const el = document.getElementById('${sid}');
            if (el) el.scrollIntoView();
          })()
        `
      });
      await new Promise(r => setTimeout(r, 400));
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(artifactDir, `hp_sec_${sid}.png`), Buffer.from(shot.data, 'base64'));
      console.log(`Captured hp_sec_${sid}.png`);
    }

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

