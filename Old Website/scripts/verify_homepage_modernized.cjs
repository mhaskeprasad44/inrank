const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9550;
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

    // 1. Hero top screenshot (initial full width white glass header, stickers, ping)
    const heroShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_hero_preserved.png'), Buffer.from(heroShot.data, 'base64'));
    console.log('Saved verified_homepage_hero_preserved.png');

    // 2. Services section
    await send('Runtime.evaluate', {
      expression: `document.getElementById('services').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 600));
    const servicesShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_services.png'), Buffer.from(servicesShot.data, 'base64'));
    console.log('Saved verified_homepage_services.png');

    // 3. Philosophy & Process sections
    await send('Runtime.evaluate', {
      expression: `document.getElementById('philosophy').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 600));
    const philShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_philosophy.png'), Buffer.from(philShot.data, 'base64'));
    console.log('Saved verified_homepage_philosophy.png');

    // 4. Process & Tech stack
    await send('Runtime.evaluate', {
      expression: `document.getElementById('process').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 600));
    const processShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_process_stack.png'), Buffer.from(processShot.data, 'base64'));
    console.log('Saved verified_homepage_process_stack.png');

    // 5. Niches
    await send('Runtime.evaluate', {
      expression: `document.getElementById('niches').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 600));
    const nichesShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_niches.png'), Buffer.from(nichesShot.data, 'base64'));
    console.log('Saved verified_homepage_niches.png');

    // 6. Proof
    await send('Runtime.evaluate', {
      expression: `document.getElementById('proof').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 600));
    const proofShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_proof.png'), Buffer.from(proofShot.data, 'base64'));
    console.log('Saved verified_homepage_proof.png');

    // 7. Our Work
    await send('Runtime.evaluate', {
      expression: `document.getElementById('our-work').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 600));
    const workShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_work.png'), Buffer.from(workShot.data, 'base64'));
    console.log('Saved verified_homepage_work.png');

    // 8. Comparison
    await send('Runtime.evaluate', {
      expression: `document.getElementById('comparison').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 600));
    const compShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_comparison.png'), Buffer.from(compShot.data, 'base64'));
    console.log('Saved verified_homepage_comparison.png');

    // 9. About / Founder
    await send('Runtime.evaluate', {
      expression: `document.getElementById('about').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 600));
    const aboutShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_about.png'), Buffer.from(aboutShot.data, 'base64'));
    console.log('Saved verified_homepage_about.png');

    // 10. Testimonials
    await send('Runtime.evaluate', {
      expression: `document.getElementById('testimonials').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 600));
    const testiShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_testimonials.png'), Buffer.from(testiShot.data, 'base64'));
    console.log('Saved verified_homepage_testimonials.png');

    // 11. Pricing
    await send('Runtime.evaluate', {
      expression: `document.getElementById('pricing').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 600));
    const pricingShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_pricing.png'), Buffer.from(pricingShot.data, 'base64'));
    console.log('Saved verified_homepage_pricing.png');

    // 12. FAQ & Closing
    await send('Runtime.evaluate', {
      expression: `document.getElementById('faq').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 600));
    const faqShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_faq_closing.png'), Buffer.from(faqShot.data, 'base64'));
    console.log('Saved verified_homepage_faq_closing.png');

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

