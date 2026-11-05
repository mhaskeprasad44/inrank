const { spawn } = require('child_process');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9336;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const res = await fetch('http://127.0.0.1:' + port + '/json');
  const tabs = await res.json();
  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

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

    await send('Runtime.enable');
    const result = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const winW = window.innerWidth;
        const docW = document.documentElement.scrollWidth;
        const bodyW = document.body.scrollWidth;
        
        // Find elements that overflow
        const overflowing = [];
        document.querySelectorAll('*').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > winW + 5) {
            overflowing.push({
              tag: el.tagName,
              id: el.id,
              class: el.className,
              right: Math.round(rect.right),
              width: Math.round(rect.width)
            });
          }
        });

        // Check broken images
        const brokenImages = [];
        document.querySelectorAll('img').forEach(img => {
          if (!img.complete || img.naturalWidth === 0) {
            brokenImages.push({ src: img.src, alt: img.alt });
          }
        });

        // Check cards and alignments
        const sectionProblems = [];
        document.querySelectorAll('section').forEach(s => {
          const sRect = s.getBoundingClientRect();
          const sStyle = window.getComputedStyle(s);
          sectionProblems.push({
            id: s.id,
            className: s.className,
            display: sStyle.display,
            width: sRect.width
          });
        });

        return {
          winW, docW, bodyW,
          overflowingCount: overflowing.length,
          overflowing: overflowing.slice(0, 10),
          brokenImages,
          sectionCount: sectionProblems.length
        };
      })()`
    });

    console.log(JSON.stringify(result.result.value, null, 2));
    ws.close();
    chrome.kill();
    process.exit(0);
  };
}
test();

