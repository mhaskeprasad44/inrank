const { spawn } = require('child_process');

async function testPages() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9724;
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
  const targetTab = tabs.find(t => t.url.includes('8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  const errors = [];
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

    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === 'Runtime.exceptionThrown') {
        errors.push(data.params.exceptionDetails);
      }
    });

    await send('Page.enable');
    await send('Runtime.enable');

    const urls = ['/about.html', '/contact.html', '/services.html', '/pricing.html', '/our-work.html'];
    for (const u of urls) {
      await send('Page.navigate', { url: 'http://localhost:8080' + u });
      await new Promise(r => setTimeout(r, 600));
    }

    console.log('Total console exceptions across all tested pages:', errors.length);
    ws.close();
    chrome.kill();
  };
}

testPages().catch(console.error);

