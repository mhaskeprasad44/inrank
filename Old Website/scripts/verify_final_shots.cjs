const { spawn } = require('child_process');
const fs = require('fs');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9340;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
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
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      tabs = await res.json();
      const pageTab = tabs.find(t => t.type === 'page');
      if (pageTab) {
        connected = true;
        break;
      }
    } catch (e) {}
  }

  if (!connected) {
    console.error('Failed to connect to Chrome on port ' + port);
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

      async function shot(url, action, filename) {
        console.log('Navigating to:', url);
        await send('Page.navigate', { url });
        await new Promise(r => setTimeout(r, 1200));

        if (action) {
          await send('Runtime.evaluate', { expression: action });
          await new Promise(r => setTimeout(r, 600));
        }

        const res = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(filename, Buffer.from(res.data, 'base64'));
        console.log('Saved:', filename);
      }

      // 1. Pricing Page Hero with Verified Image
      await shot('http://localhost:8080/pricing.html', null, 'scripts/final_shot_pricing.png');

      // 2. Case Studies Page Hero with Verified Image
      await shot('http://localhost:8080/case-studies.html', null, 'scripts/final_shot_case_studies.png');

      // 3. Homepage Redesigned Service Cards (scrolled to center on grid)
      await shot('http://localhost:8080/', `(() => {
        const s = document.querySelector('.services-grid');
        if (s) {
          const rect = s.getBoundingClientRect();
          window.scrollTo({ top: window.scrollY + rect.top - 120, behavior: 'instant' });
        }
      })()`, 'scripts/final_shot_service_cards.png');

      // 4. Dravya Work Page: scrolled to see the image + title + details together
      await shot('http://localhost:8080/our-work/dravyafinancial.html', `(() => {
        window.scrollTo({ top: 400, behavior: 'instant' });
      })()`, 'scripts/final_shot_work_details.png');

      console.log('ALL FINAL VERIFICATION SCREENSHOTS SAVED!');
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

