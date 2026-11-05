const { spawn } = require('child_process');
const fs = require('fs');

async function makeDarkIco() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9733;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=400,400',
    '--no-sandbox',
    'http://localhost:8080/index.html'
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
    await send('Runtime.enable');

    const svgContent = fs.readFileSync('inrank2.0/img/inrank-dark-logo.svg', 'utf8');

    const evalResult = await send('Runtime.evaluate', {
      expression: `new Promise(async (resolve) => {
        try {
          const svgString = ${JSON.stringify(svgContent)};
          const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 2, 2, 60, 60);
            URL.revokeObjectURL(url);
            resolve(canvas.toDataURL('image/png'));
          };
          img.onerror = (e) => resolve('ERROR loading blob: ' + e);
          img.src = url;
        } catch(err) {
          resolve('CATCH: ' + err.message);
        }
      })`,
      awaitPromise: true,
      returnByValue: true
    });

    const dataUrl = evalResult.result.value;
    if (dataUrl && dataUrl.startsWith('data:image/png;base64,')) {
      const base64Data = dataUrl.replace('data:image/png;base64,', '');
      const pngBuffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync('inrank2.0/favicon-dark.png', pngBuffer);
      fs.writeFileSync('inrank2.0/favicon.png', pngBuffer);

      // Create ICO
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
      dirEntry.writeUInt32LE(pngBuffer.length, 8);
      dirEntry.writeUInt32LE(22, 12);

      const icoBuffer = Buffer.concat([header, dirEntry, pngBuffer]);
      fs.writeFileSync('inrank2.0/favicon.ico', icoBuffer);
      fs.writeFileSync('favicon.ico', icoBuffer);
      if (fs.existsSync('public')) fs.writeFileSync('public/favicon.ico', icoBuffer);
      if (fs.existsSync('dist')) fs.writeFileSync('dist/favicon.ico', icoBuffer);
      console.log('SUCCESS! Generated dark favicon.ico, size:', icoBuffer.length);
    } else {
      console.error('Result:', dataUrl);
    }

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

makeDarkIco().catch(err => {
  console.error(err);
  process.exit(1);
});
