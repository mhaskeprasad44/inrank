const { spawn } = require('child_process');
const fs = require('fs');

async function finalVerify() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9727;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1400',
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
    await new Promise(r => setTimeout(r, 1200));

    // Scroll to the contact grid
    await send('Runtime.evaluate', {
      expression: `(() => {
        const section = document.querySelector('.contact-section');
        if (section) section.scrollIntoView({ block: 'start' });
      })()`
    });
    await new Promise(r => setTimeout(r, 2500));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/verified_final_contact_page.png', Buffer.from(shot.data, 'base64'));
    console.log('Final contact page screenshot captured!');

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

finalVerify().catch(err => {
  console.error(err);
  process.exit(1);
});

