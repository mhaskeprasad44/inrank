const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9676;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/services/seo-company-pune.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('seo-company-pune.html')) || tabs[0];
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

    // Open Services dropdown
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const item = document.querySelector('.nav-item[data-dropdown="services"]');
          item.setAttribute('data-open', '');
          const nav = document.getElementById('nav');
          nav.classList.add('nav-open');
        })()
      `
    });
    await new Promise(r => setTimeout(r, 400));

    let shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'service_dropdown_services_open.png'), Buffer.from(shot.data, 'base64'));

    // Now test Work dropdown
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          document.querySelector('.nav-item[data-dropdown="services"]').removeAttribute('data-open');
          const workItem = document.querySelector('.nav-item[data-dropdown="work"]');
          if (workItem) workItem.setAttribute('data-open', '');
        })()
      `
    });
    await new Promise(r => setTimeout(r, 400));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'service_dropdown_work_open.png'), Buffer.from(shot.data, 'base64'));

    // Now test About dropdown
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const workItem = document.querySelector('.nav-item[data-dropdown="work"]');
          if (workItem) workItem.removeAttribute('data-open');
          const aboutItem = document.querySelector('.nav-item[data-dropdown="about"]');
          if (aboutItem) aboutItem.setAttribute('data-open', '');
        })()
      `
    });
    await new Promise(r => setTimeout(r, 400));
    shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'service_dropdown_about_open.png'), Buffer.from(shot.data, 'base64'));

    console.log('Saved all dropdown screenshots');
    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

