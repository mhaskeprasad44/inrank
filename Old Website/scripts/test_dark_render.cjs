const { spawn } = require('child_process');
const fs = require('fs');

async function testRender() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9731;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=256,256',
    '--no-sandbox',
    'http://localhost:8080/'
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
    const svgData = fs.readFileSync('inrank2.0/img/inrank-dark-logo.svg', 'utf8');
    const b64 = Buffer.from(svgData).toString('base64');
    
    // Evaluate in DOM
    await send('Runtime.evaluate', {
      expression: `(() => {
        document.body.innerHTML = '<div id="icon-box" style="width:256px;height:256px;display:flex;align-items:center;justify-content:center;background:transparent;"><img src="data:image/svg+xml;base64,${b64}" style="width:220px;height:220px;object-fit:contain;" /></div>';
      })()`
    });
    await new Promise(r => setTimeout(r, 1000));

    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: 0, y: 0, width: 256, height: 256, scale: 1 }
    });
    const pngBuf = Buffer.from(shot.data, 'base64');
    fs.writeFileSync('inrank2.0/favicon-dark.png', pngBuf);
    console.log('Saved inrank2.0/favicon-dark.png, bytes:', pngBuf.length);

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

testRender().catch(err => {
  console.error(err);
  process.exit(1);
});

