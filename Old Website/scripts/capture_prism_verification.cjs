const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9520;
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

    // 1. Top of SEO service page (Prism Hero + Decision Architecture)
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await new Promise(r => setTimeout(r, 600));
    const heroShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_prism_seo_hero.png'), Buffer.from(heroShot.data, 'base64'));
    console.log('Saved verified_prism_seo_hero.png');

    // 2. Interactive Practice Tour & Stakeholder outcomes
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 950);' });
    await new Promise(r => setTimeout(r, 600));
    const tourShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_prism_seo_tour.png'), Buffer.from(tourShot.data, 'base64'));
    console.log('Saved verified_prism_seo_tour.png');

    // 3. Performance Equation & Execution Thread
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 2200);' });
    await new Promise(r => setTimeout(r, 600));
    const threadShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_prism_seo_thread.png'), Buffer.from(threadShot.data, 'base64'));
    console.log('Saved verified_prism_seo_thread.png');

    // 4. Navigate to Google Ads Agency
    await send('Page.navigate', { url: 'http://localhost:8080/services/google-ads-agency.html' });
    await new Promise(r => setTimeout(r, 1500));
    const gadsShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_prism_google_ads_hero.png'), Buffer.from(gadsShot.data, 'base64'));
    console.log('Saved verified_prism_google_ads_hero.png');

    // 5. Navigate to Custom Website Development
    await send('Page.navigate', { url: 'http://localhost:8080/services/custom-website-development.html' });
    await new Promise(r => setTimeout(r, 1500));
    const webShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_prism_custom_web_hero.png'), Buffer.from(webShot.data, 'base64'));
    console.log('Saved verified_prism_custom_web_hero.png');

    chrome.kill();
    process.exit(0);
  };
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
