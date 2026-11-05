const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9610',
  '--disable-gpu',
  '--window-size=1400,900',
  'http://localhost:8080/index.html'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9610/json').then(r => r.json());
    const page = list.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);

    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

      ws.onmessage = async (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === 1) {
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 600);
        } else if (msg.id === 2) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\our_nav_top_full.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] our_nav_top_full.png');

          send('Runtime.evaluate', { expression: 'window.scrollTo(0, 500);' });
        } else if (msg.id === 3) {
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 600);
        } else if (msg.id === 4) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\our_nav_scrolled_full.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] our_nav_scrolled_full.png');

          send('Runtime.evaluate', {
            expression: `(() => {
              const nav = document.getElementById('nav');
              const bar = document.querySelector('.nav-bar');
              return {
                navClass: nav ? nav.className : null,
                navComputed: nav ? {
                  position: window.getComputedStyle(nav).position,
                  background: window.getComputedStyle(nav).background,
                  padding: window.getComputedStyle(nav).padding,
                  height: window.getComputedStyle(nav).height
                } : null,
                barComputed: bar ? {
                  width: window.getComputedStyle(bar).width,
                  maxWidth: window.getComputedStyle(bar).maxWidth,
                  height: window.getComputedStyle(bar).height,
                  background: window.getComputedStyle(bar).background,
                  borderRadius: window.getComputedStyle(bar).borderRadius,
                  boxShadow: window.getComputedStyle(bar).boxShadow
                } : null
              };
            })()`,
            returnByValue: true
          });
        } else if (msg.id === 5) {
          console.log('Our Nav Scrolled Info:', JSON.stringify(msg.result.value, null, 2));
          chrome.kill();
          process.exit(0);
        }
      };

      send('Page.enable');
    };
  } catch(err) {
    console.error(err);
    chrome.kill();
    process.exit(1);
  }
}, 2000);

