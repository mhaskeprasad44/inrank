const { spawn } = require('child_process');
const fs = require('fs');

async function testMobileMenu() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9721;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
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

    // Click burger
    const clickRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const burger = document.getElementById('nav-burger');
        if (burger) {
          burger.click();
          const mob = document.getElementById('mob');
          return JSON.stringify({ clicked: true, isOpen: mob ? mob.classList.contains('is-open') || mob.getAttribute('aria-hidden') === 'false' : false });
        }
        return JSON.stringify({ clicked: false });
      })()`,
      returnByValue: true
    });

    console.log('Mobile click result:', clickRes.result.value);

    await new Promise(r => setTimeout(r, 500));
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\mobile_menu_audit_test.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved mobile_menu_audit_test.png');

    ws.close();
    chrome.kill();
  };
}

testMobileMenu().catch(console.error);

