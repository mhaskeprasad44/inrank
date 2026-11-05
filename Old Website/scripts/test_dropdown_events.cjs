const { spawn } = require('child_process');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9305;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const res = await fetch(`http://127.0.0.1:${port}/json`);
  const tabs = await res.json();
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

    await send('Page.enable');
    await send('Runtime.enable');

    const result = await send('Runtime.evaluate', {
      expression: `(() => {
        const nav = document.getElementById('nav');
        const items = Array.from(nav.querySelectorAll('.nav-item[data-dropdown]'));
        const btn = items[0]?.querySelector('button');
        
        // Let's inspect listeners or manually trigger
        const beforeClick = items[0]?.hasAttribute('data-open');
        btn?.click();
        const afterClick = items[0]?.hasAttribute('data-open');

        // Let's also check if mouseenter works
        items[0]?.dispatchEvent(new Event('mouseenter'));
        const afterEnter = items[0]?.hasAttribute('data-open');

        return {
          navFound: !!nav,
          itemsCount: items.length,
          btnFound: !!btn,
          btnClasses: btn?.className,
          beforeClick,
          afterClick,
          afterEnter,
          coreLoaded: typeof window !== 'undefined'
        };
      })()`,
      returnByValue: true
    });

    console.log('Test result:', JSON.stringify(result.result.value, null, 2));
    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

test();

