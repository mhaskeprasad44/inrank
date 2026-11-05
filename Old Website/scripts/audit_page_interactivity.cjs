const { spawn } = require('child_process');
const fs = require('fs');

async function auditInteractivity() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9720;
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
  const targetTab = tabs.find(t => t.url.includes('8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  const findings = [];

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((res) => {
        const id = msgId++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            res(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    // 1. Check Pricing Page tab switching
    await send('Page.navigate', { url: 'http://localhost:8080/pricing.html' });
    await new Promise(r => setTimeout(r, 800));
    const pricingTabCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const tabs = document.querySelectorAll('.pricing-tab-btn, [data-tab]');
        const panels = document.querySelectorAll('.pricing-content-panel, [id^="tab-"]');
        return JSON.stringify({ tabCount: tabs.length, panelCount: panels.length });
      })()`,
      returnByValue: true
    });
    console.log('Pricing tab check:', pricingTabCheck.result.value);

    // 2. Check Our Work page filter buttons
    await send('Page.navigate', { url: 'http://localhost:8080/our-work.html' });
    await new Promise(r => setTimeout(r, 800));
    const workFilterCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const filterBtns = document.querySelectorAll('[data-filter]');
        const workCards = document.querySelectorAll('[data-category]');
        return JSON.stringify({ filterBtns: filterBtns.length, workCards: workCards.length });
      })()`,
      returnByValue: true
    });
    console.log('Our Work filter check:', workFilterCheck.result.value);

    // 3. Check Case Studies page filter buttons
    await send('Page.navigate', { url: 'http://localhost:8080/case-studies.html' });
    await new Promise(r => setTimeout(r, 800));
    const csFilterCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const filterBtns = document.querySelectorAll('[data-filter]');
        const cards = document.querySelectorAll('.cs-card-redesigned, [data-category]');
        return JSON.stringify({ filterBtns: filterBtns.length, cards: cards.length });
      })()`,
      returnByValue: true
    });
    console.log('Case studies filter check:', csFilterCheck.result.value);

    // 4. Check Contact page form
    await send('Page.navigate', { url: 'http://localhost:8080/contact.html' });
    await new Promise(r => setTimeout(r, 800));
    const contactCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const forms = document.querySelectorAll('form');
        const submitBtn = document.querySelector('button[type="submit"], input[type="submit"]');
        const inputs = document.querySelectorAll('input, select, textarea');
        return JSON.stringify({ formCount: forms.length, hasSubmit: !!submitBtn, inputCount: inputs.length });
      })()`,
      returnByValue: true
    });
    console.log('Contact form check:', contactCheck.result.value);

    // 5. Check Mobile Drawer across pages
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await send('Page.navigate', { url: 'http://localhost:8080/' });
    await new Promise(r => setTimeout(r, 800));
    const mobileCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const burger = document.querySelector('.nav-burger, .mob-toggle, [aria-label*="menu"]');
        const drawer = document.querySelector('.mob-drawer, .nav-mobile, #mob-nav');
        return JSON.stringify({ hasBurger: !!burger, hasDrawer: !!drawer });
      })()`,
      returnByValue: true
    });
    console.log('Mobile drawer check on home:', mobileCheck.result.value);

    ws.close();
    chrome.kill();
  };
}

auditInteractivity().catch(console.error);

