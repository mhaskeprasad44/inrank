const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9560',
  '--disable-gpu',
  '--window-size=390,844',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9560/json').then(r => r.json());
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
              const burger = document.querySelector('#nav-burger') || document.querySelector('.nav-burger');
              if (burger) {
                burger.click();
                return 'Clicked burger';
              }
              const mob = document.querySelector('#mob');
              if (mob) {
                mob.classList.add('is-open');
                mob.setAttribute('aria-hidden', 'false');
                return 'Forced is-open';
              }
              return 'No burger or mob';
            })()`,
            returnByValue: true
          });
        } else if (msg.id === 2) {
          console.log('Action:', msg.result.result.value);
          setTimeout(() => {
            send('Page.captureScreenshot', {});
          }, 300);
        } else if (msg.id === 3) {
          fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\mobile_drawer_open.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved mobile_drawer_open.png');
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

