const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9565',
  '--disable-gpu',
  '--window-size=1400,1200',
  'http://localhost:8080/blog.html'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9565/json').then(r => r.json());
    const page = list.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);

    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

      ws.onmessage = async (e) => {
        const msg = JSON.parse(e.data);

        if (msg.id === 1) {
          // 1. Capture Blog Hub
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 800);
        } else if (msg.id === 2) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_blog_hub.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] Captured verified_blog_hub.png');

          // Navigate to individual blog post
          send('Page.navigate', { url: 'http://localhost:8080/blog/top-digital-marketing-web-development-agencies-pune.html' });
        } else if (msg.id === 3) {
          // After navigate
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 1000);
        } else if (msg.id === 4) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_blog_post_top.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] Captured verified_blog_post_top.png');

          // Scroll to AEO and sections
          send('Runtime.evaluate', {
            expression: `window.scrollTo(0, 950);`
          });
        } else if (msg.id === 5) {
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 400);
        } else if (msg.id === 6) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_blog_post_aeo_and_body.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] Captured verified_blog_post_aeo_and_body.png');

          // Navigate to Dravya Financial Work page
          send('Page.navigate', { url: 'http://localhost:8080/our-work/dravyafinancial.html' });
        } else if (msg.id === 7) {
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 800);
        } else if (msg.id === 8) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_dravya_work_page.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] Captured verified_dravya_work_page.png');

          // Navigate to index.html and open Work dropdown
          send('Page.navigate', { url: 'http://localhost:8080/index.html' });
        } else if (msg.id === 9) {
          setTimeout(() => {
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
          }, 600);
        } else if (msg.id === 10) {
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 400);
        } else if (msg.id === 11) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_work_drop_with_dravya.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] Captured verified_work_drop_with_dravya.png');

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

