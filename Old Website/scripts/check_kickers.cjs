const { spawn } = require('child_process');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9556',
  '--disable-gpu',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9556/json').then(r => r.json());
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
              const kickers = Array.from(document.querySelectorAll('.section-kicker, .eyebrow, .kicker, .cap-badge')).map(k => ({
                text: k.innerText.trim(),
                parent: (k.closest('section') || k.parentElement).id || (k.closest('section') || k.parentElement).className,
                bg: window.getComputedStyle(k).backgroundColor,
                border: window.getComputedStyle(k).border,
                radius: window.getComputedStyle(k).borderRadius,
                before: window.getComputedStyle(k, '::before').content,
                beforeDisplay: window.getComputedStyle(k, '::before').display
              }));
              return kickers;
            })()`,
            returnByValue: true
          });
        } else if (msg.id === 2) {
          console.log('Result:', JSON.stringify(msg.result.result.value, null, 2));
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
