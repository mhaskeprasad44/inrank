const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9570',
  '--disable-gpu',
  '--window-size=1400,900',
  'http://localhost:8080/'
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
          send('Runtime.evaluate', {
            expression: `(() => {
              const el = document.querySelector('#our-work .work-grid') || document.querySelector('#our-work');
              const r = el.getBoundingClientRect();
              return { x: r.left + window.scrollX, y: r.top + window.scrollY, width: r.width, height: r.height };
            })()`,
            returnByValue: true
          });
        } else if (msg.id === 2) {
          const rect = msg.result.result.value;
          console.log('Work grid doc rect:', rect);
          send('Page.captureScreenshot', {
            captureBeyondViewport: true,
            clip: {
              x: Math.max(0, rect.x - 20),
              y: Math.max(0, rect.y - 20),
              width: rect.width + 40,
              height: Math.min(800, rect.height + 40),
              scale: 1
            }
          });
        } else if (msg.id === 3) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\work_grid_no_dravya.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved work_grid_no_dravya.png');
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
