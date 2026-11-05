const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9410;
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

    // 1. Top of homepage (y = 0): dark logo, updated 8 stickers, no marquee in hero
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await new Promise(r => setTimeout(r, 600));
    const topShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_hp2_hero_top.png'), Buffer.from(topShot.data, 'base64'));
    console.log('Saved verified_hp2_hero_top.png');

    // 2. Scrolled state of homepage (y = 250): white logo in floating capsule dock
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 250);' });
    await new Promise(r => setTimeout(r, 600));
    const scrolledShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_hp2_hero_scrolled.png'), Buffer.from(scrolledShot.data, 'base64'));
    console.log('Saved verified_hp2_hero_scrolled.png');

    // 3. Scroll to PROVEN METHODOLOGY section (find its offset)
    const methodPos = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const el = document.getElementById('process');
          return el ? el.offsetTop : null;
        })()
      `
    });
    const methodTop = methodPos.result.value || 3000;
    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${methodTop + 450});` });
    await new Promise(r => setTimeout(r, 700));
    const methodShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_methodology_marquee.png'), Buffer.from(methodShot.data, 'base64'));
    console.log('Saved verified_methodology_marquee.png');

    // 4. Navigate to /services/seo-company-pune.html
    await send('Page.navigate', { url: 'http://localhost:8080/services/seo-company-pune.html' });
    await new Promise(r => setTimeout(r, 2000));
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await new Promise(r => setTimeout(r, 600));
    const serviceShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_service_page_active.png'), Buffer.from(serviceShot.data, 'base64'));
    console.log('Saved verified_service_page_active.png');

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main();

