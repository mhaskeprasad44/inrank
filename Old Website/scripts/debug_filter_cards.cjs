const { spawn } = require('child_process');

async function debugCards() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9710;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1200',
    '--no-sandbox',
    'http://localhost:8080/our-work.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);

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

    const res = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const cards = document.querySelectorAll('.work-card');
          const btns = document.querySelectorAll('.filter-btn');
          return {
            totalCards: cards.length,
            totalBtns: btns.length,
            url: window.location.href,
            title: document.title
          };
        })()
      `,
      returnByValue: true
    });

    console.log('DOM check:', res.result.value);
    ws.close();
    chrome.kill();
  };
}

debugCards();

