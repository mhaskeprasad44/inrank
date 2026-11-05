const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9540;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('localhost:8080')) || tabs[0];
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

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });

    await new Promise(r => setTimeout(r, 1200));

    // 1. Homepage Top: Full-width white glass header + 12 platform stickers
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await new Promise(r => setTimeout(r, 600));
    const topShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_fullwidth_white_glass_top.png'), Buffer.from(topShot.data, 'base64'));
    console.log('Saved verified_fullwidth_white_glass_top.png');

    // 2. Homepage Hover: Dropdown open -> header shrinks to capsule dock
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const nav = document.getElementById('nav');
          const item = nav.querySelector('.nav-item[data-dropdown="services"]');
          item.setAttribute('data-open', '');
          nav.classList.add('nav-open');
        })()
      `
    });
    await new Promise(r => setTimeout(r, 600));
    const hoverShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_shrunk_on_hover.png'), Buffer.from(hoverShot.data, 'base64'));
    console.log('Saved verified_shrunk_on_hover.png');

    // 3. Homepage Scrolled: Scroll down y = 350 -> header shrinks to capsule dock
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const nav = document.getElementById('nav');
          nav.classList.remove('nav-open');
          const item = nav.querySelector('.nav-item[data-dropdown="services"]');
          item.removeAttribute('data-open');
          window.scrollTo(0, 350);
        })()
      `
    });
    await new Promise(r => setTimeout(r, 600));
    const scrolledShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_shrunk_on_scroll.png'), Buffer.from(scrolledShot.data, 'base64'));
    console.log('Saved verified_shrunk_on_scroll.png');

    // 4. Service Page: Navigate to SEO Company Pune & scroll to tour
    await send('Page.navigate', { url: 'http://localhost:8080/services/seo-company-pune.html' });
    await new Promise(r => setTimeout(r, 1500));
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const tour = document.getElementById('service-tour') || document.querySelector('.product-tour');
          if (tour) tour.scrollIntoView();
          else window.scrollTo(0, 1400);
        })()
      `
    });
    await new Promise(r => setTimeout(r, 800));
    const serviceTourShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_service_header_content_width.png'), Buffer.from(serviceTourShot.data, 'base64'));
    console.log('Saved verified_service_header_content_width.png');

    chrome.kill();
    process.exit(0);
  };
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

