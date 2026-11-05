const { spawn } = require('child_process');
const fs = require('fs');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9370;
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

      // Helper to capture a screenshot after navigating and optional scroll
      async function capturePage(url, scrollSelector, filename) {
        console.log(`Navigating to ${url}...`);
        await send('Page.navigate', { url });
        await new Promise(r => setTimeout(r, 1500));

        if (scrollSelector) {
          await send('Runtime.evaluate', {
            expression: `(() => {
              const el = document.querySelector('${scrollSelector}');
              if (el) {
                el.scrollIntoView({ behavior: 'instant', block: 'start' });
              }
            })()`
          });
          await new Promise(r => setTimeout(r, 500));
        }

        const shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(filename, Buffer.from(shot.data, 'base64'));
        console.log(`Saved screenshot: ${filename}`);
      }

      // 1. Homepage Section 5: Services & End-to-End Execution
      await capturePage('http://localhost:8080/', '#services-grid', 'scripts/verification_1_services_homepage.png');

      // 2. Homepage Section 6: Niches with Icons
      await capturePage('http://localhost:8080/', '#industries', 'scripts/verification_2_niches_homepage.png');

      // 3. Homepage Section 7: Numbers that move P&Ls
      await capturePage('http://localhost:8080/', '#numbers-proof', 'scripts/verification_3_proof_aligned.png');

      // 4. Our Work Page with Hero Screenshots
      await capturePage('http://localhost:8080/our-work.html', '.work-grid', 'scripts/verification_4_our_work_grid.png');

      // 5. Individual Work Page (Greytothegreen)
      await capturePage('http://localhost:8080/our-work/greytothegreen.html', null, 'scripts/verification_5_individual_work.png');

      // 6. Contact Page
      await capturePage('http://localhost:8080/contact.html', '.contact-grid', 'scripts/verification_6_contact_page.png');

      console.log('All verification screenshots captured successfully!');
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

