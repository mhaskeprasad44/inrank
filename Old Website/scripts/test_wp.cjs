const { spawn } = require('child_process');
const fs = require('fs');

async function testWp() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { background: #f1f5f9; padding: 40px; font-family: sans-serif; display: flex; gap: 20px; align-items: center; }
        .pill { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: #fff; border: 1.5px solid #cbd5e1; border-radius: 999px; font-size: 12px; font-weight: 600; }
        .pill img, .pill svg { height: 18px; width: 18px; }
      </style>
    </head>
    <body>
      <div class="pill">
        <img src="http://localhost:8080/tech-stack/wordpress.svg" alt="Current SVG" />
        <span>Current SVG</span>
      </div>
      <div class="pill">
        <img src="http://localhost:8080/tech-stack/wordpress.webp" alt="wordpress.webp" />
        <span>wordpress.webp</span>
      </div>
      <div class="pill">
        <img src="http://localhost:8080/tech-stack/WordPress_blue_logo.svg.webp" alt="WordPress_blue_logo" />
        <span>WordPress_blue_logo</span>
      </div>
      <div class="pill">
        <!-- Crisp Standard WordPress SVG with Solid Blue Circle & White W -->
        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="#00749C"/>
          <path fill="#FFFFFF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-8.88 10c0-1.85.58-3.57 1.57-4.99L8.9 18.25C5.46 16.89 3.12 13.72 3.12 12zm8.88 8.88c-1.39 0-2.69-.37-3.81-1.01l3.35-9.74 3.42 9.38c-1.04.85-2.37 1.37-3.96 1.37zm1.14-13.88c.42.02.82.04 1.24.04.81 0 2.05-.08 2.05-.08.42-.03.47.59.05.64 0 0-.42.05-.89.08l2.84 8.44 1.71-5.13-1.22-3.34c-.41-.03-.8-.05-.8-.05-.42-.05-.37-.67.05-.64 0 0 1.27.08 2.03.08.42 0 .84-.02 1.26-.04l-3.9 11.33-3.16-9.42c-.41-.03-.82-.05-.82-.05-.42-.05-.37-.67.05-.64 0 0 .8.08 1.56.08zm-7.36 0c.42.02.82.04 1.24.04.81 0 2.05-.08 2.05-.08.42-.03.47.59.05.64 0 0-.42.05-.89.08l2.84 8.44 1.71-5.13-1.22-3.34c-.41-.03-.8-.05-.8-.05-.42-.05-.37-.67.05-.64 0 0 1.27.08 2.03.08.42 0 .84-.02 1.26-.04l-3.9 11.33-3.16-9.42c-.41-.03-.82-.05-.82-.05-.42-.05-.37-.67.05-.64 0 0 .8.08 1.56.08zm12.35 4.99c.99 1.42 1.57 3.14 1.57 4.99 0 2.19-1.02 4.15-2.6 5.48l3.32-9.1c.03-.01.07-.03.11-.04.64-.01.91-.01.91-.01l-3.31-1.32z"/>
        </svg>
        <span>Crisp Bold SVG</span>
      </div>
    </body>
    </html>
  `;
  fs.writeFileSync('inrank2.0/test_wp.html', html);

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9699;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=900,300',
    '--no-sandbox',
    'http://localhost:8080/test_wp.html'
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
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\test_wp_comparison.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved test_wp_comparison.png');
    ws.close();
    chrome.kill();
  };
}

testWp();

