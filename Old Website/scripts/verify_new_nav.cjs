const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9630',
  '--disable-gpu',
  '--window-size=1400,900',
  'http://localhost:8080/index.html'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9630/json').then(r => r.json());
    const page = list.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);

    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

      ws.onmessage = async (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === 1) {
          setTimeout(() => {
            send('Page.captureScreenshot', { clip: { x: 0, y: 0, width: 1400, height: 160, scale: 1 } });
          }, 600);
        } else if (msg.id === 2) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_vinove_nav_top.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] verified_vinove_nav_top.png captured');

          // Scroll down 400px
          send('Runtime.evaluate', { expression: 'window.scrollTo(0, 400);' });
        } else if (msg.id === 3) {
          setTimeout(() => {
            send('Page.captureScreenshot', { clip: { x: 0, y: 0, width: 1400, height: 160, scale: 1 } });
          }, 600);
        } else if (msg.id === 4) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_vinove_nav_scrolled.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] verified_vinove_nav_scrolled.png captured');

          // Check computed dimensions
          send('Runtime.evaluate', {
            expression: `(() => {
              const nav = document.getElementById('nav');
              const bar = document.querySelector('.nav-bar');
              return {
                navClass: nav.className,
                navPadding: window.getComputedStyle(nav).padding,
                navBg: window.getComputedStyle(nav).backgroundColor,
                barWidth: window.getComputedStyle(bar).width,
                barHeight: window.getComputedStyle(bar).height,
                barBg: window.getComputedStyle(bar).background,
                barRadius: window.getComputedStyle(bar).borderRadius,
                barBoxShadow: window.getComputedStyle(bar).boxShadow
              };
            })()`,
            returnByValue: true
          });
        } else if (msg.id === 5) {
          console.log('Computed values:', msg.result.result.value);
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

