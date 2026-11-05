const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9620',
  '--disable-gpu',
  '--window-size=1400,900',
  'http://localhost:8080/contact.html'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9620/json').then(r => r.json());
    const page = list.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);

    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

      ws.onmessage = async (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === 1) {
          send('Page.captureScreenshot', { format: 'png' });
        } else if (msg.id === 2) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\contact_top_nav.png', Buffer.from(msg.result.data, 'base64'));

          send('Runtime.evaluate', { expression: 'window.scrollTo(0, 300);' });
        } else if (msg.id === 3) {
          setTimeout(() => {
            send('Page.captureScreenshot', { format: 'png' });
          }, 400);
        } else if (msg.id === 4) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\contact_scrolled_nav.png', Buffer.from(msg.result.data, 'base64'));
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

