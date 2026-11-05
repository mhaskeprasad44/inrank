const { spawn } = require('child_process');
const fs = require('fs');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9330;
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

      async function capture(url, selector, filename) {
        console.log('Capturing:', url, filename);
        await send('Page.navigate', { url });
        await new Promise(r => setTimeout(r, 1200));

        if (selector) {
          await send('Runtime.evaluate', {
            expression: `(() => {
              const el = document.querySelector('${selector}');
              if (el) {
                const rect = el.getBoundingClientRect();
                window.scrollTo({ top: window.scrollY + rect.top - 80, behavior: 'instant' });
              }
            })()`
          });
          await new Promise(r => setTimeout(r, 500));
        }

        const shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(filename, Buffer.from(shot.data, 'base64'));
      }

      await capture('http://localhost:8080/', '#services', 'scripts/shot_1_home_services.png');
      await capture('http://localhost:8080/', '#proof', 'scripts/shot_2_home_proof.png');
      await capture('http://localhost:8080/our-work.html', '.work-grid', 'scripts/shot_3_our_work.png');
      await capture('http://localhost:8080/pricing.html', '#packages', 'scripts/shot_4_pricing.png');
      await capture('http://localhost:8080/services.html', '#pillar-1', 'scripts/shot_5_services.png');
      await capture('http://localhost:8080/contact.html', '.contact-grid', 'scripts/shot_6_contact.png');

      console.log('All fresh screenshots captured!');
    } catch (e) {
      console.error(e);
    } finally {
      ws.close();
      killChrome();
      process.exit(0);
    }
  };
}

main();

