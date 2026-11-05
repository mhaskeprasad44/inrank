const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9595;
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

  const consoleLogs = [];

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.method === 'Runtime.consoleAPICalled') {
            consoleLogs.push(data.params);
          }
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

    // Audit 1: Homepage
    const hpAudit = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const brokenImgs = Array.from(document.images)
            .filter(img => !img.complete || img.naturalWidth === 0)
            .map(img => ({ src: img.src, alt: img.alt, class: img.className }));

          const sections = Array.from(document.querySelectorAll('section')).map(s => {
            const rect = s.getBoundingClientRect();
            return {
              id: s.id,
              class: s.className,
              width: rect.width,
              height: rect.height,
              overflowX: s.scrollWidth > s.clientWidth
            };
          });

          // Check nav bar width at 1440px and 1920px
          const nav = document.getElementById('nav');
          const navBar = nav ? nav.querySelector('.nav-bar') : null;
          const navBarWidth = navBar ? window.getComputedStyle(navBar).width : null;
          const navBarMaxWidth = navBar ? window.getComputedStyle(navBar).maxWidth : null;

          return {
            brokenImgs,
            sections,
            navBarWidth,
            navBarMaxWidth,
            pageTitle: document.title
          };
        })()
      `,
      returnByValue: true
    });

    console.log('--- HOMEPAGE AUDIT ---');
    console.log(JSON.stringify(hpAudit.result.value, null, 2));

    // Capture homepage full page screenshots in chunks to inspect what looks broken
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await new Promise(r => setTimeout(r, 500));
    let shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'audit_hp_chunk_0.png'), Buffer.from(shot.data, 'base64'));

    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 900);' });
    await new Promise(r => setTimeout(r, 500));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'audit_hp_chunk_1.png'), Buffer.from(shot.data, 'base64'));

    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 1800);' });
    await new Promise(r => setTimeout(r, 500));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'audit_hp_chunk_2.png'), Buffer.from(shot.data, 'base64'));

    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 2700);' });
    await new Promise(r => setTimeout(r, 500));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'audit_hp_chunk_3.png'), Buffer.from(shot.data, 'base64'));

    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 3600);' });
    await new Promise(r => setTimeout(r, 500));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'audit_hp_chunk_4.png'), Buffer.from(shot.data, 'base64'));

    // Audit 2: Service page (seo-company-pune.html)
    await send('Page.navigate', { url: 'http://localhost:8080/services/seo-company-pune.html' });
    await new Promise(r => setTimeout(r, 1500));

    const spAudit = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const brokenImgs = Array.from(document.images)
            .filter(img => !img.complete || img.naturalWidth === 0)
            .map(img => ({ src: img.src, alt: img.alt }));

          const sections = Array.from(document.querySelectorAll('section')).map(s => {
            const rect = s.getBoundingClientRect();
            return {
              id: s.id,
              class: s.className,
              width: rect.width,
              height: rect.height,
              overflowX: s.scrollWidth > s.clientWidth
            };
          });

          return { brokenImgs, sections };
        })()
      `,
      returnByValue: true
    });

    console.log('--- SERVICE PAGE AUDIT ---');
    console.log(JSON.stringify(spAudit.result.value, null, 2));

    // Capture service page screenshots
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await new Promise(r => setTimeout(r, 500));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'audit_sp_chunk_0.png'), Buffer.from(shot.data, 'base64'));

    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 900);' });
    await new Promise(r => setTimeout(r, 500));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'audit_sp_chunk_1.png'), Buffer.from(shot.data, 'base64'));

    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 1800);' });
    await new Promise(r => setTimeout(r, 500));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'audit_sp_chunk_2.png'), Buffer.from(shot.data, 'base64'));

    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 2700);' });
    await new Promise(r => setTimeout(r, 500));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'audit_sp_chunk_3.png'), Buffer.from(shot.data, 'base64'));

    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 3600);' });
    await new Promise(r => setTimeout(r, 500));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'audit_sp_chunk_4.png'), Buffer.from(shot.data, 'base64'));

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(e => { console.error(e); process.exit(1); });

