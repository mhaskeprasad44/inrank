const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9660;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
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

    const res = await send('Runtime.evaluate', {
      expression: `
        (async () => {
          function testImgLoad(url) {
            return new Promise((resolve) => {
              const img = new Image();
              img.onload = () => resolve({ url, success: true, w: img.naturalWidth, h: img.naturalHeight });
              img.onerror = (e) => resolve({ url, success: false, err: 'failed to load' });
              img.src = url;
            });
          }

          const webpRes = await testImgLoad('/portfolio/screenshots/greytothegreen.webp');
          const pngRes = await testImgLoad('/portfolio/screenshots/greytothegreen.png');
          return { webpRes, pngRes };
        })()
      `,
      awaitPromise: true,
      returnByValue: true
    });

    console.log(JSON.stringify(res.result.value, null, 2));

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

