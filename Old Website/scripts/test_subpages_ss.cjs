const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9232',
  '--window-size=1440,900',
  '--no-sandbox',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9232/json');
    const tabs = await listRes.json();
    const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
    ws.onopen = async () => {
      let msgId = 1;
      function send(method, params = {}) {
        return new Promise((resolve) => {
          const id = msgId++;
          const handler = (evt) => {
            const data = JSON.parse(evt.data);
            if (data.id === id) {
              ws.removeEventListener('message', handler);
              resolve(data.result);
            }
          };
          ws.addEventListener('message', handler);
          ws.send(JSON.stringify({ id, method, params }));
        });
      }

      const pages = ['services.html', 'pricing.html', 'about.html', 'contact.html'];
      for (const p of pages) {
        await send('Page.navigate', { url: `http://localhost:8080/${p}` });
        await new Promise(r => setTimeout(r, 600));
        await send('Runtime.evaluate', {
          expression: `document.querySelectorAll('[data-reveal]').forEach(e => e.classList.add('is-visible', 'revealed'))`
        });
        const ss = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(`scripts/ss_subpage_${p.replace('.html','')}.png`, Buffer.from(ss.data, 'base64'));
      }

      console.log('Subpage screenshots saved!');
      ws.close();
      chrome.kill();
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

