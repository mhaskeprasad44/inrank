const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9382;
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
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    try {
      await send('Page.enable');
      await send('Runtime.enable');
      await send('Emulation.setDeviceMetricsOverride', {
        width: 1440,
        height: 900,
        deviceScaleFactor: 1,
        mobile: false
      });

      // Wait a moment for layout & assets
      await new Promise(r => setTimeout(r, 1200));

      const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

      // 1. Top of page (y = 0)
      await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
      await new Promise(r => setTimeout(r, 600));

      const topShot = await send('Page.captureScreenshot', { format: 'png' });
      const topFile = path.join(artifactDir, 'verified_hp2_hero_top.png');
      fs.writeFileSync(topFile, Buffer.from(topShot.data, 'base64'));
      console.log('Saved top screenshot to', topFile);

      // 2. Scrolled state (y = 350)
      await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 350);' });
      await new Promise(r => setTimeout(r, 600));

      const scrolledShot = await send('Page.captureScreenshot', { format: 'png' });
      const scrolledFile = path.join(artifactDir, 'verified_hp2_hero_scrolled.png');
      fs.writeFileSync(scrolledFile, Buffer.from(scrolledShot.data, 'base64'));
      console.log('Saved scrolled screenshot to', scrolledFile);

      // 3. Inspect geometry
      const inspectRes = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const nav = document.getElementById('nav');
            const navBar = document.querySelector('.nav-bar');
            const hero = document.querySelector('.hero-hp2-section');
            const title = document.querySelector('.hero-hp2-title');
            const stickers = document.querySelectorAll('.platform-sticker');
            const marquee = document.querySelector('.hero-stack-track');

            const navBarRect = navBar ? navBar.getBoundingClientRect() : null;
            return {
              navClasses: nav ? nav.className : null,
              navBarWidth: navBarRect ? Math.round(navBarRect.width) : null,
              navBarLeft: navBarRect ? Math.round(navBarRect.left) : null,
              heroFound: !!hero,
              titleText: title ? title.innerText.replace(/\\s+/g, ' ').trim() : null,
              stickersFound: stickers.length,
              marqueeScrollWidth: marquee ? marquee.scrollWidth : null
            };
          })()
        `,
        returnByValue: true
      });
      console.log('Geometry inspection:', JSON.stringify(inspectRes.result.value, null, 2));

    } catch (e) {
      console.error('Error during capture:', e);
    } finally {
      ws.close();
      killChrome();
      process.exit(0);
    }
  };
}

main();

