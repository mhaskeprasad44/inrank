const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9387;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  let tabs = null;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      tabs = await res.json();
      if (tabs && tabs.length > 0) break;
    } catch (e) {}
  }

  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
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
    const res = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const elAtCenter = document.elementFromPoint(195, 400);
          const bgHero = window.getComputedStyle(document.querySelector('.hero-hp2-section')).backgroundColor;
          const ambientGlow = document.querySelector('.ambient-glow-hero');
          const ambientStyle = ambientGlow ? window.getComputedStyle(ambientGlow) : null;
          return {
            elAtCenterTag: elAtCenter ? elAtCenter.tagName + '.' + elAtCenter.className : null,
            bgHero,
            ambientGlowWidth: ambientStyle ? ambientStyle.width : null,
            ambientGlowHeight: ambientStyle ? ambientStyle.height : null,
            bodyBg: window.getComputedStyle(document.body).backgroundColor
          };
        })()
      `,
      returnByValue: true
    });
    console.log(JSON.stringify(res.result.value, null, 2));
    ws.close();
    chrome.kill();
  };
}
main();

