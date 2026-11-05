const { spawn } = require('child_process');

async function testFilter() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9703;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/our-work.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('our-work')) || tabs[0];
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

    // Click on Healthcare button
    const res = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btn = document.querySelector('.filter-btn[data-target="healthcare"]');
          btn.click();

          const cards = Array.from(document.querySelectorAll('.work-card'));
          const visible = cards.map(c => ({
            filter: c.getAttribute('data-filter'),
            inlineStyle: c.getAttribute('style'),
            computedDisplay: window.getComputedStyle(c).display
          }));

          return { visible };
        })()
      `,
      returnByValue: true
    });

    console.log('Filter result after clicking Healthcare:', JSON.stringify(res.result.value, null, 2));

    ws.close();
    chrome.kill();
  };
}

testFilter();

