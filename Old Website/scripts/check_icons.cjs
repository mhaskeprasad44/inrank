const { spawn } = require('child_process');
const fs = require('fs');

async function checkIcons() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9698;
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

    // Scroll to services
    await send('Runtime.evaluate', {
      expression: `document.getElementById('services').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 800));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\services_current_capture.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved services_current_capture.png');

    // Also get the exact bounding box and outerHTML of card 6 icon
    const iconInfo = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const cards = document.querySelectorAll('.eco-service-card');
          const card6 = cards[5]; // Card 06: AI SEO & GEO
          const icon = card6.querySelector('.eco-service-icon');
          const svg = card6.querySelector('svg');
          const path = card6.querySelector('path');
          return {
            iconBox: icon.getBoundingClientRect(),
            svgBox: svg.getBoundingClientRect(),
            pathBox: path.getBoundingClientRect(),
            svgOuter: svg.outerHTML,
            pathOuter: path.outerHTML
          };
        })()
      `,
      returnByValue: true
    });

    console.log('Card 6 Icon Info:', JSON.stringify(iconInfo.result.value, null, 2));

    ws.close();
    chrome.kill();
  };
}

checkIcons();

