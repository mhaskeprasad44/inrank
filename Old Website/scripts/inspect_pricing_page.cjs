const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9660;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/pricing.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('pricing.html')) || tabs[0];
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

    // 1. Top of pricing page
    let shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'pricing_inspect_hero.png'), Buffer.from(shot.data, 'base64'));

    // 2. Pricing cards section
    await send('Runtime.evaluate', { expression: 'document.getElementById("pricing").scrollIntoView();' });
    await new Promise(r => setTimeout(r, 500));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'pricing_inspect_cards.png'), Buffer.from(shot.data, 'base64'));

    // 3. Tab switching check
    const tabsInfo = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btns = Array.from(document.querySelectorAll('.pricing-tab-btn'));
          const panels = Array.from(document.querySelectorAll('.pricing-content-panel'));
          return {
            btnCount: btns.length,
            btnTexts: btns.map(b => b.textContent.trim()),
            panelCount: panels.length,
            panelDisplays: panels.map(p => window.getComputedStyle(p).display)
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Tabs Info:', tabsInfo.result.value);

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);
