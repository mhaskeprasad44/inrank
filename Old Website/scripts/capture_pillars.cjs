const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9559',
  '--disable-gpu',
  '--window-size=1400,1200',
  'http://localhost:8080/services.html'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9559/json').then(r => r.json());
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
              window.scrollTo(0, 700);
              const el = document.querySelector('.pillars-grid-4');
              if (!el) return null;
              const r = el.getBoundingClientRect();
              return { x: r.left, y: r.top, width: r.width, height: r.height };
            })()`,
            returnByValue: true
          });
        } else if (msg.id === 2) {
          const rect = msg.result.result.value;
          console.log('Rect after scroll:', rect);
          setTimeout(() => {
            send('Page.captureScreenshot', {
              clip: {
                x: Math.max(0, rect.x - 20),
                y: Math.max(0, rect.y - 20),
                width: rect.width + 40,
                height: rect.height + 40,
                scale: 1
              }
            });
          }, 400);
        } else if (msg.id === 3) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\pillars_current.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved pillars_current.png');
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
