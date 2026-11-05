const { spawn } = require('child_process');
const fs = require('fs');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9678;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1050',
    '--no-sandbox',
    'http://localhost:8080/pricing.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('pricing.html')) || tabs[0];
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

    // Scroll to pricing section
    await send('Runtime.evaluate', {
      expression: `
        document.getElementById('pricing').scrollIntoView();
      `
    });
    await new Promise(r => setTimeout(r, 600));

    // Capture tab 1: Web Development
    const shot1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${artifactDir}\\pricing_fixed_tab_web.png`, Buffer.from(shot1.data, 'base64'));

    // Switch to tab 2: SEO
    await send('Runtime.evaluate', {
      expression: `
        const btns = document.querySelectorAll('.pricing-tab-btn');
        if (btns.length > 1) btns[1].click();
      `
    });
    await new Promise(r => setTimeout(r, 500));
    const shot2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${artifactDir}\\pricing_fixed_tab_seo.png`, Buffer.from(shot2.data, 'base64'));

    // Switch to tab 3: Social
    await send('Runtime.evaluate', {
      expression: `
        const btns = document.querySelectorAll('.pricing-tab-btn');
        if (btns.length > 2) btns[2].click();
      `
    });
    await new Promise(r => setTimeout(r, 500));
    const shot3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${artifactDir}\\pricing_fixed_tab_social.png`, Buffer.from(shot3.data, 'base64'));

    console.log('Pricing verification screenshots captured successfully!');
    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

