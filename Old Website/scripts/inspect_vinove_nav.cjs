const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9595',
  '--disable-gpu',
  '--window-size=1400,900',
  'https://www.vinove.com/'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9595/json').then(r => r.json());
    const page = list.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);

    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

      ws.onmessage = async (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === 1) {
          setTimeout(() => {
            send('Runtime.evaluate', { expression: 'window.scrollTo(0, 600);' });
          }, 2500);
        } else if (msg.id === 2) {
          setTimeout(() => {
            send('Runtime.evaluate', {
              expression: `(() => {
                const nav = document.getElementById('nav');
                const bar = document.querySelector('.nav-bar');
                const links = document.querySelector('.nav-links');
                return {
                  navClass: nav ? nav.className : null,
                  navBg: nav ? window.getComputedStyle(nav).backgroundColor : null,
                  barBg: bar ? window.getComputedStyle(bar).backgroundColor : null,
                  linksBg: links ? window.getComputedStyle(links).backgroundColor : null,
                  barRadius: bar ? window.getComputedStyle(bar).borderRadius : null,
                  barWidth: bar ? window.getComputedStyle(bar).width : null,
                  navHeight: nav ? window.getComputedStyle(nav).height : null
                };
              })()`,
              returnByValue: true
            });
          }, 1000);
        } else if (msg.id === 3) {
          console.log('Vinove Scrolled Nav Info:', JSON.stringify(msg.result.value, null, 2));
          send('Page.captureScreenshot', { clip: { x: 0, y: 0, width: 1400, height: 140, scale: 1 } });
        } else if (msg.id === 4) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\vinove_scrolled_nav.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] Captured vinove_scrolled_nav.png');
          chrome.kill();
          process.exit(0);
        }
      };

      send('Page.enable');
    };
  } catch (err) {
    console.error(err);
    chrome.kill();
    process.exit(1);
  }
}, 3000);

