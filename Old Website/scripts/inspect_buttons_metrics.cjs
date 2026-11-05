const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9689;
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
          const btn1 = document.querySelector('.hero-hp2-btn-primary');
          const btn2 = document.querySelector('.hero-hp2-btn-secondary');
          const cards = Array.from(document.querySelectorAll('.hero-metric-card')).map(c => {
            const r = c.getBoundingClientRect();
            return { width: r.width, height: r.height, top: r.top, left: r.left };
          });
          const r1 = btn1.getBoundingClientRect();
          const r2 = btn2.getBoundingClientRect();

          return {
            btn1: { width: r1.width, height: r1.height, top: r1.top, left: r1.left },
            btn2: { width: r2.width, height: r2.height, top: r2.top, left: r2.left },
            cards
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

