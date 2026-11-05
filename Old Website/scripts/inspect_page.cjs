const http = require('http');
const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9222',
  '--no-sandbox',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9222/json');
    const tabs = await listRes.json();
    console.log('Open tabs:', tabs.length);
    const targetTab = tabs.find(t => t.url.includes('localhost:8080'));
    if (!targetTab) {
      console.log('Target tab not found');
      chrome.kill();
      return;
    }
    const wsUrl = targetTab.webSocketDebuggerUrl;
    console.log('WS URL:', wsUrl);

    // Let's connect with standard WebSocket (Node 22+ has built-in global WebSocket)
    const ws = new WebSocket(wsUrl);
    ws.onopen = () => {
      console.log('Connected to CDP');
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

      (async () => {
        // Evaluate expressions
        const res1 = await send('Runtime.evaluate', {
          expression: `JSON.stringify({
            navClass: document.getElementById('nav')?.className,
            navRect: document.getElementById('nav')?.getBoundingClientRect(),
            navComputed: {
              position: getComputedStyle(document.getElementById('nav')).position,
              top: getComputedStyle(document.getElementById('nav')).top,
              height: getComputedStyle(document.getElementById('nav')).height,
              zIndex: getComputedStyle(document.getElementById('nav')).zIndex,
            },
            bodyRect: document.body.getBoundingClientRect(),
            bodyPadding: getComputedStyle(document.body).padding,
            heroRect: document.querySelector('.image-hero')?.getBoundingClientRect(),
          })`
        });
        console.log('At y=0:');
        console.log(JSON.parse(res1.result.value));

        // Now scroll to 300
        await send('Runtime.evaluate', { expression: `window.scrollTo(0, 300);` });
        // wait 200ms
        await new Promise(r => setTimeout(r, 200));

        const res2 = await send('Runtime.evaluate', {
          expression: `JSON.stringify({
            scrollY: window.scrollY,
            navClass: document.getElementById('nav')?.className,
            navRect: document.getElementById('nav')?.getBoundingClientRect(),
            navBarRect: document.querySelector('.nav-bar')?.getBoundingClientRect(),
            navComputed: {
              position: getComputedStyle(document.getElementById('nav')).position,
              top: getComputedStyle(document.getElementById('nav')).top,
              height: getComputedStyle(document.getElementById('nav')).height,
            },
            navBarComputed: {
              background: getComputedStyle(document.querySelector('.nav-bar')).background,
              color: getComputedStyle(document.querySelector('.nav-link')).color,
            }
          })`
        });
        console.log('At y=300:');
        console.log(JSON.parse(res2.result.value));

        // Take a screenshot at y=300
        const ss = await send('Page.captureScreenshot', { format: 'png' });
        const fs = require('fs');
        fs.writeFileSync('scripts/screenshot_cdp_scrolled.png', Buffer.from(ss.data, 'base64'));
        console.log('Screenshot saved to scripts/screenshot_cdp_scrolled.png');

        ws.close();
        chrome.kill();
      })();
    };
  } catch (err) {
    console.error('Error:', err);
    chrome.kill();
  }
}, 1500);

