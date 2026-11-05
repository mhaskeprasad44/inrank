const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9566',
  '--disable-gpu',
  '--window-size=1400,1200',
  'http://localhost:8080/blog/top-digital-marketing-web-development-agencies-pune.html'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9566/json').then(r => r.json());
    const page = list.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);

    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

      ws.onmessage = async (e) => {
        const msg = JSON.parse(e.data);

        if (msg.id === 1) {
          // Scroll to FAQ section
          send('Runtime.evaluate', {
            expression: `(() => {
              const el = document.getElementById('faqs');
              if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
            })()`
          });
        } else if (msg.id === 2) {
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 400);
        } else if (msg.id === 3) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verified_blog_faqs_expanded.png', Buffer.from(msg.result.data, 'base64'));
          console.log('[OK] Captured verified_blog_faqs_expanded.png');

          chrome.kill();
          process.exit(0);
        }
      };

      send('Page.enable');
    };
  } catch (err) {
    console.error(err);
    chrome.kill();
  }
}, 2000);

