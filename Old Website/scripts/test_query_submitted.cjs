const { spawn } = require('child_process');
const os = require('os');
const path = require('path');

async function testQueryParam() {
  const port = 9791;
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${path.join(os.tmpdir(), 'c_' + port)}`,
    '--no-sandbox',
    'http://localhost:8080/contact.html?submitted=true'
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
    await new Promise(r => setTimeout(r, 1000));

    const res = await send('Runtime.evaluate', {
      expression: 'document.getElementById("form-status-banner")?.style.display',
      returnByValue: true
    });
    console.log('Banner display on submitted=true:', res.result.value);

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

testQueryParam().catch(console.error);
