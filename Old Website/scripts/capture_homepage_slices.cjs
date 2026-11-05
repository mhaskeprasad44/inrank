const { spawn } = require('child_process');
const fs = require('fs');

async function test() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9335;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=' + port,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  const killChrome = () => { try { chrome.kill(); } catch (e) {} };

  let connected = false;
  let tabs = null;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch('http://127.0.0.1:' + port + '/json');
      tabs = await res.json();
      const pageTab = tabs.find(t => t.type === 'page');
      if (pageTab) {
        connected = true;
        break;
      }
    } catch (e) {}
  }

  if (!connected) {
    console.error('Failed to connect');
    killChrome();
    process.exit(1);
  }

  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

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

    try {
      await send('Page.enable');
      await send('DOM.enable');
      await send('Runtime.enable');
      await send('Page.navigate', { url: 'http://localhost:8080/' });
      await new Promise(r => setTimeout(r, 1500));

      const sections = await send('Runtime.evaluate', {
        returnByValue: true,
        expression: `(() => {
          const secs = Array.from(document.querySelectorAll('section, header, footer'));
          return secs.map((s, idx) => ({
            idx,
            tag: s.tagName,
            id: s.id,
            className: s.className,
            top: s.getBoundingClientRect().top + window.scrollY,
            height: s.offsetHeight,
            textSnippet: s.innerText.substring(0, 80).replace(/\\n/g, ' ')
          }));
        })()`
      });

      console.log('SECTIONS FOUND on index.html:');
      console.log(JSON.stringify(sections.result.value, null, 2));

      // Capture full homepage top to bottom in slices
      const heights = [0, 800, 1600, 2400, 3200, 4000, 4800, 5600, 6400, 7200, 8000, 8800, 9600, 10400, 11200, 12000];
      for (let i = 0; i < heights.length; i++) {
        await send('Runtime.evaluate', {
          expression: `window.scrollTo({ top: ${heights[i]}, behavior: 'instant' })`
        });
        await new Promise(r => setTimeout(r, 300));
        const shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(`scripts/home_slice_${i}_${heights[i]}.png`, Buffer.from(shot.data, 'base64'));
      }
      console.log('Screenshots saved!');

    } catch (e) {
      console.error(e);
    } finally {
      ws.close();
      killChrome();
      process.exit(0);
    }
  };
}

test();

