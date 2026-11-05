const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9570',
  '--disable-gpu',
  '--window-size=1400,1200',
  'http://localhost:8080/index.html'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9570/json').then(r => r.json());
    const page = list.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);

    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

      ws.onmessage = async (e) => {
        const msg = JSON.parse(e.data);

        if (msg.id === 1) {
          // 1. Capture Header showing Blog in Nav Dock
          setTimeout(() => {
            send('Page.captureScreenshot', {
              clip: { x: 0, y: 0, width: 1400, height: 160, scale: 1 }
            });
          }, 600);
        } else if (msg.id === 2) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_nav_with_blog.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] Captured verified_nav_with_blog.png');

          // Open Our Work dropdown to verify Box 1 is Greytothegreen and no Dravya
          send('Runtime.evaluate', {
            expression: `(() => {
              const drop = document.querySelector('.drop-work');
              if (drop) {
                drop.style.opacity = '1';
                drop.style.visibility = 'visible';
                drop.style.pointerEvents = 'auto';
                drop.style.transform = 'translateX(-50%) translateY(0)';
              }
            })()`
          });
        } else if (msg.id === 3) {
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 400);
        } else if (msg.id === 4) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_work_drop_greytothegreen_box1.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] Captured verified_work_drop_greytothegreen_box1.png');

          // Navigate to blog.html
          send('Page.navigate', { url: 'http://localhost:8080/blog.html' });
        } else if (msg.id === 5) {
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 800);
        } else if (msg.id === 6) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_live_structure_blog_hub.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] Captured verified_live_structure_blog_hub.png');

          // Scroll down to Category sections on blog.html
          send('Runtime.evaluate', {
            expression: `window.scrollTo(0, 1100);`
          });
        } else if (msg.id === 7) {
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 400);
        } else if (msg.id === 8) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_blog_hub_categories.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] Captured verified_blog_hub_categories.png');

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
}, 2000);

