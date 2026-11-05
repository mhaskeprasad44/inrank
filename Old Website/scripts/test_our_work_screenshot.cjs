const { spawn } = require('child_process');
const fs = require('fs');

async function testOurWorkPage() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9707;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,2000',
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

    const evalRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const cards = Array.from(document.querySelectorAll('.work-card'));
          const buttons = Array.from(document.querySelectorAll('.filter-btn'));
          return {
            totalCards: cards.length,
            buttons: buttons.map(b => b.innerText.trim()),
            titles: cards.map(c => c.querySelector('.work-card-title').innerText.trim())
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Our work page analysis:', JSON.stringify(evalRes.result.value, null, 2));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\our_work_verified.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved screenshot our_work_verified.png');

    ws.close();
    chrome.kill();
  };
}

testOurWorkPage();

