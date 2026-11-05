const { spawn } = require('child_process');
const fs = require('fs');

async function scrapeVinovePost() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9590',
    '--disable-gpu',
    '--window-size=1440,1200',
    'https://www.vinove.com/blog/business/group-enquiry-handover/'
  ]);

  setTimeout(async () => {
    try {
      const list = await fetch('http://127.0.0.1:9590/json').then(r => r.json());
      const page = list.find(t => t.type === 'page');
      const ws = new WebSocket(page.webSocketDebuggerUrl);

      ws.onopen = () => {
        let id = 1;
        const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

        ws.onmessage = async (e) => {
          const msg = JSON.parse(e.data);
          if (msg.id === 1) {
            setTimeout(() => {
              send('Runtime.evaluate', { expression: `document.documentElement.outerHTML` });
            }, 2500);
          } else if (msg.id === 2) {
            fs.writeFileSync('scripts/vinove_single_post.html', msg.result.result.value, 'utf8');
            console.log('Saved scripts/vinove_single_post.html');
            send('Page.captureScreenshot', { format: 'png' });
          } else if (msg.id === 3) {
            fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\ref_vinove_single_post.png', Buffer.from(msg.result.data, 'base64'));
            console.log('Saved ref_vinove_single_post.png');
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
}

scrapeVinovePost();

