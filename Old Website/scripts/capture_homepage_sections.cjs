const { spawn } = require('child_process');
const fs = require('fs');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9360;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  const killChrome = () => {
    try { chrome.kill(); } catch (e) {}
  };

  // Wait for Chrome to be ready
  let connected = false;
  let tabs = null;
  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      tabs = await res.json();
      if (tabs && tabs.length > 0) {
        connected = true;
        break;
      }
    } catch (e) {}
  }

  if (!connected) {
    console.error('Could not connect to Chrome on port ' + port);
    killChrome();
    process.exit(1);
  }

  const targetTab = tabs.find(t => t.url.includes('localhost:8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const timer = setTimeout(() => reject(new Error('Timeout ' + method)), 8000);
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            clearTimeout(timer);
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

      async function captureSection(url, scrollSelector, filename) {
        console.log(`Navigating to ${url}...`);
        await send('Page.navigate', { url });
        await new Promise(r => setTimeout(r, 1200));

        if (scrollSelector) {
          await send('Runtime.evaluate', {
            expression: `(() => {
              const el = document.querySelector('${scrollSelector}');
              if (el) {
                el.scrollIntoView({ behavior: 'instant', block: 'start' });
              }
            })()`
          });
          await new Promise(r => setTimeout(r, 600));
        }

        const shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(filename, Buffer.from(shot.data, 'base64'));
        console.log(`Saved screenshot: ${filename}`);
      }

      // 1. Homepage Section 5: Services & End-to-End Execution
      await captureSection('http://localhost:8080/', '#services', 'scripts/verification_1_services_homepage.png');

      // 2. Homepage Section 6: Niches with Icons
      await captureSection('http://localhost:8080/', '#niches', 'scripts/verification_2_niches_homepage.png');

      // 3. Homepage Section 7: Numbers that move P&Ls
      await captureSection('http://localhost:8080/', '#proof', 'scripts/verification_3_proof_aligned.png');

      console.log('Homepage sections captured successfully!');
    } catch (err) {
      console.error('Error during capture:', err);
    } finally {
      ws.close();
      killChrome();
      process.exit(0);
    }
  };
}

main();

