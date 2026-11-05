const { spawn } = require('child_process');

async function testFilter() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9704;
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

    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === 'Runtime.consoleAPICalled') {
        console.log('BROWSER CONSOLE:', data.params.type, data.params.args.map(a => a.value));
      } else if (data.method === 'Runtime.exceptionThrown') {
        console.log('BROWSER EXCEPTION:', JSON.stringify(data.params.exceptionDetails));
      }
    });

    await send('Page.enable');
    await send('Runtime.enable');

    // Check ready state and evaluate filter script directly
    const evalRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btn = document.querySelector('.filter-btn[data-target="healthcare"]');
          const cards = Array.from(document.querySelectorAll('.work-card'));
          const buttons = Array.from(document.querySelectorAll('.filter-btn'));
          
          return {
            readyState: document.readyState,
            btnFound: !!btn,
            btnCount: buttons.length,
            cardCount: cards.length,
            btnClasses: btn ? btn.className : null
          };
        })()
      `,
      returnByValue: true
    });
    console.log('DOM status:', evalRes.result.value);

    // Now test dispatching a real click
    const clickRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btn = document.querySelector('.filter-btn[data-target="healthcare"]');
          btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
          
          const cards = Array.from(document.querySelectorAll('.work-card'));
          return cards.map(c => ({
            filter: c.getAttribute('data-filter'),
            inlineStyle: c.getAttribute('style'),
            computedDisplay: window.getComputedStyle(c).display,
            classList: Array.from(c.classList)
          }));
        })()
      `,
      returnByValue: true
    });
    console.log('Cards after click:', JSON.stringify(clickRes.result.value, null, 2));

    ws.close();
    chrome.kill();
  };
}

testFilter();

