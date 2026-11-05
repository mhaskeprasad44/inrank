const { spawn } = require('child_process');
const fs = require('fs');

async function testAllUpdates() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9700;
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

    // Test Hero Section Spacing
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const style = document.createElement('style');
          style.innerHTML = \`
            .hero-stickers-wrap {
              gap: 2.25rem !important;
            }
            .eco-service-list {
              list-style: none;
              padding: 0;
              margin: 0 0 1.5rem 0;
              display: flex;
              flex-direction: column;
              gap: 0.65rem;
            }
            .eco-service-item {
              display: flex;
              align-items: center;
              gap: 0.6rem;
              font-size: 0.84rem;
              font-weight: 600;
              color: #334155;
              line-height: 1.35;
            }
            .eco-check-badge {
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background: rgba(0, 157, 73, 0.12);
              color: #009d49;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }
          \`;
          document.head.appendChild(style);
        })()
      `
    });

    await new Promise(r => setTimeout(r, 600));

    // Capture hero section
    const shotHero = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\test_hero_gap225.png', Buffer.from(shotHero.data, 'base64'));
    console.log('Saved test_hero_gap225.png');

    ws.close();
    chrome.kill();
  };
}

testAllUpdates();

