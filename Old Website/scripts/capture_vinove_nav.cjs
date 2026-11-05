const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9600',
  '--disable-gpu',
  '--window-size=1400,900',
  'https://www.vinove.com/blog/'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9600/json').then(r => r.json());
    const page = list.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);

    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

      ws.onmessage = async (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === 1) {
          setTimeout(() => {
            send('Runtime.evaluate', { expression: 'window.scrollTo(0, 450);' });
          }, 3000);
        } else if (msg.id === 2) {
          setTimeout(() => {
            send('Page.captureScreenshot', {
              clip: { x: 0, y: 0, width: 1400, height: 120, scale: 1 }
            });
          }, 1000);
        } else if (msg.id === 3) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\vinove_blog_scrolled_nav.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] vinove_blog_scrolled_nav.png written, size:', fs.statSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\vinove_blog_scrolled_nav.png').size);

          // Also inspect nav HTML and styles
          send('Runtime.evaluate', {
            expression: `(() => {
              const nav = document.getElementById('nav');
              const bar = document.querySelector('.nav-bar');
              const cta = document.querySelector('.nav-cta');
              return {
                navClass: nav.className,
                navRect: nav.getBoundingClientRect(),
                barRect: bar.getBoundingClientRect(),
                barBg: window.getComputedStyle(bar).background,
                ctaRect: cta ? cta.getBoundingClientRect() : null,
                navHtml: nav.outerHTML.substring(0, 800)
              };
            })()`,
            returnByValue: true
          });
        } else if (msg.id === 4) {
          console.log('Vinove Scrolled Info:', JSON.stringify(msg.result.value, null, 2));
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
}, 3000);

