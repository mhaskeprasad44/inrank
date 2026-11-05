const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9567',
  '--disable-gpu',
  '--window-size=1400,900',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9567/json').then(r => r.json());
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
              const item = document.querySelector('.nav-item[data-dropdown="work"]');
              if (item) {
                item.setAttribute('data-open', '');
              }
              const drop = document.querySelector('.drop-work');
              if (drop) {
                const r = drop.getBoundingClientRect();
                return { x: r.left, y: r.top, width: r.width, height: r.height };
              }
              return null;
            })()`,
            returnByValue: true
          });
        } else if (msg.id === 2) {
          const rect = msg.result.result.value;
          console.log('Drop rect:', rect);
          setTimeout(() => {
            send('Page.captureScreenshot', {
              clip: {
                x: Math.max(0, rect.x - 10),
                y: Math.max(0, rect.y - 10),
                width: rect.width + 20,
                height: rect.height + 20,
                scale: 1
              }
            });
          }, 400);
        } else if (msg.id === 3) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\work_drop_active.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved work_drop_active.png');
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
