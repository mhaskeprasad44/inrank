const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

async function debugBrowserFetch() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9779;
  const tempDir = path.join(os.tmpdir(), `chrome_debug_${port}_${Date.now()}`);

  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tempDir}`,
    '--window-size=1440,1200',
    '--no-sandbox',
    'http://localhost:8080/contact.html'
  ]);

  await new Promise(r => setTimeout(r, 2500));
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

    const consoleLogs = [];
    const netFailed = [];
    const netResponses = [];

    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === 'Runtime.consoleAPICalled') {
        consoleLogs.push({ type: data.params.type, args: data.params.args.map(a => a.value || a.description) });
      }
      if (data.method === 'Network.responseReceived') {
        netResponses.push({ url: data.params.response.url, status: data.params.response.status });
      }
      if (data.method === 'Network.loadingFailed') {
        netFailed.push({ url: data.params.requestId, error: data.params.errorText });
      }
    });

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Network.enable');

    await new Promise(r => setTimeout(r, 1500));

    // Execute direct fetch test in page context
    const testRes = await send('Runtime.evaluate', {
      expression: `(async () => {
        try {
          const res = await fetch('https://inranktech.com/contact.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Browser CORS Probe', phone: '+919999999999', email: 'probe@test.com', message: 'test' })
          });
          const text = await res.text();
          return { ok: res.ok, status: res.status, text: text };
        } catch (err) {
          return { error: err.message, stack: err.stack };
        }
      })()`,
      awaitPromise: true,
      returnByValue: true
    });

    console.log('Direct browser fetch to inranktech.com result:', JSON.stringify(testRes.result.value, null, 2));
    console.log('Network responses:', JSON.stringify(netResponses, null, 2));
    console.log('Network failed:', JSON.stringify(netFailed, null, 2));

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

debugBrowserFetch().catch(err => {
  console.error(err);
  process.exit(1);
});

