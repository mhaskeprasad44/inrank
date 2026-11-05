const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9688;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1050',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('8080')) || tabs[0];
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
        (() => {
          const container = document.querySelector('.hero-hp2-container');
          const stickersRow = document.querySelector('.hero-stickers-row');
          const kicker = document.querySelector('.hero-hp2-kicker');
          const title = document.querySelector('.hero-hp2-title');
          const sub = document.querySelector('.hero-hp2-sub');
          const actions = document.querySelector('.hero-hp2-actions');
          const metrics = document.querySelector('.hero-hp2-metrics');
          const section = document.querySelector('.hero-hp2-section');

          function getBox(el) {
            if (!el) return null;
            const r = el.getBoundingClientRect();
            const cs = window.getComputedStyle(el);
            return {
              x: r.x, y: r.y, width: r.width, height: r.height,
              marginTop: cs.marginTop, marginBottom: cs.marginBottom,
              paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom,
              textAlign: cs.textAlign
            };
          }

          return {
            viewportWidth: window.innerWidth,
            section: getBox(section),
            container: getBox(container),
            stickersRow: getBox(stickersRow),
            kicker: getBox(kicker),
            title: getBox(title),
            sub: getBox(sub),
            actions: getBox(actions),
            metrics: getBox(metrics)
          };
        })()
      `,
      returnByValue: true
    });

    console.log(JSON.stringify(res.result.value, null, 2));
    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

