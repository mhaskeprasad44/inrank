const { spawn } = require('child_process');
const fs = require('fs');

async function testCors() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9751;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=800,600',
    '--no-sandbox',
    'http://localhost:8080/contact.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('contact.html')) || tabs[0];
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

    const result = await send('Runtime.evaluate', {
      expression: `fetch('https://inranktech.com/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'CORS Test from Localhost',
          phone: '+91 87888 23182',
          email: 'inranktech@gmail.com',
          message: 'Testing CORS dispatch from browser origin'
        })
      }).then(async r => ({ status: r.status, data: await r.json() })).catch(e => ({ error: e.message }))`,
      awaitPromise: true,
      returnByValue: true
    });

    console.log('Browser CORS dispatch result:', result.result.value);

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

testCors().catch(console.error);

