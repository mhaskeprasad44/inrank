const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9224',
  '--window-size=1440,900',
  '--no-sandbox',
  'http://localhost:8080/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9224/json');
    const tabs = await listRes.json();
    const targetTab = tabs.find(t => t.url.includes('localhost:8080'));
    if (!targetTab) {
      console.log('Target tab not found');
      chrome.kill();
      return;
    }
    const ws = new WebSocket(targetTab.webSocketDebuggerUrl);
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

      await send('Emulation.setDeviceMetricsOverride', {
        width: 1440,
        height: 900,
        deviceScaleFactor: 1,
        mobile: false
      });

      // Get section positions
      const evalRes = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const sections = Array.from(document.querySelectorAll('section, footer'));
            return JSON.stringify(sections.map(s => ({
              class: s.className,
              id: s.id,
              top: s.getBoundingClientRect().top + window.scrollY,
              height: s.getBoundingClientRect().height
            })));
          })()
        `
      });

      const sectionData = JSON.parse(evalRes.result.value);
      console.log('Found sections:', sectionData.length);
      sectionData.forEach((s, idx) => {
        console.log(`Section ${idx+1} (${s.class || s.id}): top=${Math.round(s.top)}, h=${Math.round(s.height)}`);
      });

      // Capture screenshots at key section tops
      for (let idx = 0; idx < sectionData.length; idx++) {
        const s = sectionData[idx];
        const scrollTarget = Math.max(0, Math.round(s.top));
        await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${scrollTarget});` });
        await new Promise(r => setTimeout(r, 150));
        const ss = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(`scripts/ss_sec_${idx+1}_${(s.class || 'footer').split(' ')[0]}.png`, Buffer.from(ss.data, 'base64'));
      }

      console.log('Section screenshots saved!');
      ws.close();
      chrome.kill();
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

