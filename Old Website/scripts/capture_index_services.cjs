const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9561',
  '--disable-gpu',
  '--window-size=1400,1200',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9561/json').then(r => r.json());
    const page = list.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    
    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));
      
      ws.onmessage = async (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === 1) {
          send('Runtime.evaluate', {
            expression: `(() => {
              const el = document.querySelector('#services');
              if (!el) return null;
              el.scrollIntoView({ block: 'start' });
              const r = el.getBoundingClientRect();
              return { x: r.left, y: r.top, width: r.width, height: 750 };
            })()`,
            returnByValue: true
          });
        } else if (msg.id === 2) {
          const rect = msg.result.result.value;
          console.log('Rect:', rect);
          setTimeout(() => {
            send('Page.captureScreenshot', {
              clip: {
                x: Math.max(0, rect.x),
                y: Math.max(0, rect.y),
                width: rect.width,
                height: rect.height,
                scale: 1
              }
            });
          }, 400);
        } else if (msg.id === 3) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\index_services_screenshot.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved index_services_screenshot.png');
          chrome.kill();
          process.exit(0);
        }
      };
      
      send('Runtime.enable');
    };
  } catch (err) {
    console.error(err);
    chrome.kill();
  }
}, 2000);

