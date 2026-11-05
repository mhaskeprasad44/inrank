const { spawn } = require('child_process');
const fs = require('fs');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9686;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1100',
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
        const cards = document.querySelectorAll('.eco-work-card');
        if (cards[2]) {
          const rect = cards[2].getBoundingClientRect();
          window.scrollTo(0, window.scrollY + rect.top + 250);
        }
      `
    });

    await new Promise(r => setTimeout(r, 800));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${artifactDir}\\verify_index_card3_cytos_body.png`, Buffer.from(shot.data, 'base64'));

    console.log('Card 3 body screenshot saved!');
    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
