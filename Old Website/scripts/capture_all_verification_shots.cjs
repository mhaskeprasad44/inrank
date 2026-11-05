const { spawn } = require('child_process');
const fs = require('fs');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9338;
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

      // 1. Homepage Top with Hero Visual Image & Floating Badges
      await shot('http://localhost:8080/', null, 'scripts/shot_v2_1_home_top.png');

      // 2. Homepage with Services Mega Dropdown Open
      await shot('http://localhost:8080/', `(() => {
        const item = document.querySelector('.nav-item[data-dropdown="services"]');
        if (item) item.setAttribute('data-open', '');
      })()`, 'scripts/shot_v2_2_dropdown_open.png');

      // 3. Homepage Section 5: Redesigned Service Cards
      await shot('http://localhost:8080/', `(() => {
        const s = document.getElementById('services');
        if (s) {
          const rect = s.getBoundingClientRect();
          window.scrollTo({ top: window.scrollY + rect.top - 70, behavior: 'instant' });
        }
      })()`, 'scripts/shot_v2_3_redesigned_services.png');

      // 4. Homepage Section 7: Proof Numbers Aligned
      await shot('http://localhost:8080/', `(() => {
        const p = document.getElementById('proof');
        if (p) {
          const rect = p.getBoundingClientRect();
          window.scrollTo({ top: window.scrollY + rect.top - 70, behavior: 'instant' });
        }
      })()`, 'scripts/shot_v2_4_proof_aligned.png');

      // 5. Services Page with Hero Right Column Image
      await shot('http://localhost:8080/services.html', null, 'scripts/shot_v2_5_services_hero_img.png');

      // 6. Pricing Page with Hero Right Column Image
      await shot('http://localhost:8080/pricing.html', null, 'scripts/shot_v2_6_pricing_hero_img.png');

      // 7. Our Work Page with Hero Right Column Image
      await shot('http://localhost:8080/our-work.html', null, 'scripts/shot_v2_7_work_hero_img.png');

      // 8. About Page with Hero Right Column Image
      await shot('http://localhost:8080/about.html', null, 'scripts/shot_v2_8_about_hero_img.png');

      // 9. Case Studies Page with Hero Right Column Image
      await shot('http://localhost:8080/case-studies.html', null, 'scripts/shot_v2_9_case_studies_hero_img.png');

      // 10. Dravya Work Page showing Image First, then Title & Details
      await shot('http://localhost:8080/our-work/dravyafinancial.html', null, 'scripts/shot_v2_10_individual_work_image_first.png');

      console.log('ALL VERIFICATION SCREENSHOTS CAPTURED SUCCESSFULLY!');

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

