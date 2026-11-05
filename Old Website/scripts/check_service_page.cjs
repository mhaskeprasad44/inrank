const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9399;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/services/seo-company-pune.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('seo-company-pune')) || tabs[0];
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

    const evalRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const title = document.title;
          const h1 = document.querySelector('h1');
          const failedImages = Array.from(document.images)
            .filter(img => !img.complete || img.naturalWidth === 0)
            .map(img => img.src);
          const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
            .map(l => l.href);
          return JSON.stringify({
            title,
            h1Text: h1 ? h1.innerText : null,
            failedImagesCount: failedImages.length,
            failedImages: failedImages.slice(0, 5),
            stylesheets: links
          });
        })()
      `
    });

    console.log('Page test result:', evalRes.result.value);

    // Also take screenshot
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const fs = require('fs');
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\test_service_page.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved test_service_page.png');

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main();
