const { spawn } = require('child_process');
const fs = require('fs');

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9346;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/pricing.html'
  ]);

  let tabs = null;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      tabs = await res.json();
      if (tabs.find(t => t.type === 'page')) break;
    } catch(e) {}
  }

  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  let id = 1;
  const pending = new Map();
  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    if (pending.has(data.id)) {
      pending.get(data.id)(data.result);
      pending.delete(data.id);
    }
  };

  const send = (method, params = {}) => new Promise((resolve) => {
    const curId = id++;
    pending.set(curId, resolve);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await new Promise(r => ws.onopen = r);
  await send('Page.enable');
  await send('DOM.enable');

  console.log('Connected to CDP!');
  await new Promise(r => setTimeout(r, 1200));

  // 1. Scroll to #pricing on pricing.html
  await send('Runtime.evaluate', {
    expression: `
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    `
  });
  await new Promise(r => setTimeout(r, 500));

  let shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_pricing_tab1_web.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved scripts/verified_pricing_tab1_web.png');

  // 2. Click Tab 2: SEO Retainers
  await send('Runtime.evaluate', {
    expression: `
      const btn = document.querySelector('button[data-tab="tab-seo"]');
      if (btn) btn.click();
    `
  });
  await new Promise(r => setTimeout(r, 500));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_pricing_tab2_seo.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved scripts/verified_pricing_tab2_seo.png');

  // 3. Click Tab 3: Social Media & Reels
  await send('Runtime.evaluate', {
    expression: `
      const btn = document.querySelector('button[data-tab="tab-social"]');
      if (btn) btn.click();
    `
  });
  await new Promise(r => setTimeout(r, 500));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_pricing_tab3_social.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved scripts/verified_pricing_tab3_social.png');

  // 4. Scroll down to Add-ons and FAQs on pricing.html
  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('.pricing-guarantee-bar') || document.getElementById('faq');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    `
  });
  await new Promise(r => setTimeout(r, 500));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_pricing_addons_faq.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved scripts/verified_pricing_addons_faq.png');

  // 5. Navigate to services.html to verify 4-pillars grid (Image 5 design)
  await send('Page.navigate', { url: 'http://localhost:8080/services.html' });
  await new Promise(r => setTimeout(r, 1500));

  await send('Runtime.evaluate', {
    expression: `
      const el = document.querySelector('.pillars-grid-4');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    `
  });
  await new Promise(r => setTimeout(r, 500));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_services_pillars_grid.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved scripts/verified_services_pillars_grid.png');

  // 6. Navigate to index.html to verify #pricing
  await send('Page.navigate', { url: 'http://localhost:8080/index.html' });
  await new Promise(r => setTimeout(r, 1500));

  await send('Runtime.evaluate', {
    expression: `
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    `
  });
  await new Promise(r => setTimeout(r, 500));

  shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scripts/verified_home_pricing.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved scripts/verified_home_pricing.png');

  ws.close();
  chrome.kill();
  console.log('All CDP screenshots captured successfully!');
}

run().catch(err => {
  console.error('Error running CDP test:', err);
  process.exit(1);
});

