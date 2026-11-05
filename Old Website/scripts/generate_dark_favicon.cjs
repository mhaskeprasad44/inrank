const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function generateDarkFavicon() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9728;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=512,512',
    '--no-sandbox',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs[0];
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
    await send('Emulation.setDefaultBackgroundColorOverride', {
      color: { r: 0, g: 0, b: 0, a: 0 }
    });

    const svgContent = fs.readFileSync('inrank2.0/img/inrank-dark-logo.svg', 'utf8');
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; padding: 0; background: transparent; display: flex; align-items: center; justify-content: center; height: 100vh; width: 100vw; }
          svg { width: 92vw; height: 92vh; }
        </style>
      </head>
      <body>${svgContent}</body>
      </html>
    `;

    await send('Page.navigate', { url: 'data:text/html;charset=utf-8,' + encodeURIComponent(html) });
    await new Promise(r => setTimeout(r, 1000));

    // Capture 64x64 icon
    await send('Emulation.setDeviceMetricsOverride', {
      width: 64,
      height: 64,
      deviceScaleFactor: 1,
      mobile: false
    });
    await new Promise(r => setTimeout(r, 400));
    const shot64 = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
    const buf64 = Buffer.from(shot64.data, 'base64');
    fs.writeFileSync('inrank2.0/img/favicon-dark.png', buf64);
    fs.writeFileSync('inrank2.0/favicon.ico', buf64); // Modern browsers happily accept PNG as favicon.ico
    fs.writeFileSync('public/img/favicon-dark.png', buf64);
    fs.writeFileSync('public/favicon.ico', buf64);
    fs.writeFileSync('dist/favicon.ico', buf64);

    console.log('Dark favicons generated successfully!');

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

generateDarkFavicon().catch(err => {
  console.error(err);
  process.exit(1);
});

