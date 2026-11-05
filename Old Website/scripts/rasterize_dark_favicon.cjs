const { spawn } = require('child_process');
const fs = require('fs');

async function rasterize() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9730;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=256,256',
    '--no-sandbox',
    'http://localhost:8080/img/inrank-dark-logo.svg'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('inrank-dark-logo.svg')) || tabs[0];
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
    await new Promise(r => setTimeout(r, 800));

    const shot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
    const pngBuf = Buffer.from(shot.data, 'base64');
    fs.writeFileSync('inrank2.0/favicon-dark.png', pngBuf);

    // Build ICO
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0);
    header.writeUInt16LE(1, 2);
    header.writeUInt16LE(1, 4);

    const dirEntry = Buffer.alloc(16);
    dirEntry.writeUInt8(64, 0);
    dirEntry.writeUInt8(64, 1);
    dirEntry.writeUInt8(0, 2);
    dirEntry.writeUInt8(0, 3);
    dirEntry.writeUInt16LE(1, 4);
    dirEntry.writeUInt16LE(32, 6);
    dirEntry.writeUInt32LE(pngBuf.length, 8);
    dirEntry.writeUInt32LE(22, 12);

    const icoBuf = Buffer.concat([header, dirEntry, pngBuf]);
    fs.writeFileSync('inrank2.0/favicon.ico', icoBuf);
    fs.writeFileSync('favicon.ico', icoBuf);
    if (fs.existsSync('public')) fs.writeFileSync('public/favicon.ico', icoBuf);
    if (fs.existsSync('dist')) fs.writeFileSync('dist/favicon.ico', icoBuf);

    console.log('Dark favicon ICO & PNG generated successfully, size:', icoBuf.length);

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

rasterize().catch(err => {
  console.error(err);
  process.exit(1);
});

