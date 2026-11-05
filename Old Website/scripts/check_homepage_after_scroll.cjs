const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9625;
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

    // Scroll through the entire page and check for any broken images or layout glitches
    const res = await send('Runtime.evaluate', {
      expression: `
        (async () => {
          // Scroll down to load all lazy images
          for (let y = 0; y < document.body.scrollHeight; y += 800) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 100));
          }

          const imgs = Array.from(document.images);
          const broken = imgs.filter(img => img.naturalWidth === 0).map(img => ({
            src: img.src,
            alt: img.alt,
            parent: img.parentElement ? img.parentElement.className : null
          }));

          // Check if any sections have 0 height or weird margins
          const sections = Array.from(document.querySelectorAll('section')).map(s => ({
            id: s.id,
            h: s.offsetHeight,
            w: s.offsetWidth
          }));

          return { totalImages: imgs.length, brokenImages: broken, sections };
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

