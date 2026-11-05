const { spawn } = require('child_process');
const fs = require('fs');

async function testUserRequirements() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9398;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      const tabs = await res.json();
      if (tabs.length) break;
    } catch (e) {}
  }

  const res = await fetch(`http://127.0.0.1:${port}/json`);
  const tabs = await res.json();
  const targetTab = tabs.find(t => t.url.includes('localhost:8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const timer = setTimeout(() => reject(new Error('Timeout ' + method)), 6000);
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

    async function evaluate(expression) {
      const res = await send('Runtime.evaluate', { expression, returnByValue: true });
      return res.result?.value;
    }

    async function screenshot(filename) {
      const res = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`scripts/${filename}`, Buffer.from(res.data, 'base64'));
      console.log('Saved:', filename);
    }

    try {
      await send('Page.enable');
      await send('DOM.enable');
      await new Promise(r => setTimeout(r, 1000));

      // 1. Capture Header at scrollY = 0 (Full Width Edge-to-Edge)
      await evaluate('window.scrollTo(0, 0)');
      await new Promise(r => setTimeout(r, 400));
      const navTopInfo = await evaluate(`({
        isScrolled: document.getElementById('nav').classList.contains('is-scrolled'),
        navWidth: document.getElementById('nav').offsetWidth,
        barWidth: document.querySelector('.nav-bar').offsetWidth,
        logoSrc: document.querySelector('.nav-logo img').getAttribute('src')
      })`);
      console.log('Header Top State:', navTopInfo);
      await screenshot('verify_1_header_fullwidth.png');

      // 2. Capture Header at scrollY = 300 (Shrunk Floating Capsule Dock)
      await evaluate('window.scrollTo(0, 300)');
      await new Promise(r => setTimeout(r, 500));
      const navScrolledInfo = await evaluate(`({
        isScrolled: document.getElementById('nav').classList.contains('is-scrolled'),
        barWidth: document.querySelector('.nav-bar').offsetWidth,
        barRadius: window.getComputedStyle(document.querySelector('.nav-bar')).borderRadius
      })`);
      console.log('Header Scrolled State:', navScrolledInfo);
      await screenshot('verify_2_header_shrunk_capsule.png');

      // 3. Open Services Mega-Dropdown
      await evaluate(`
        const item = document.querySelector('[data-dropdown="services"]');
        item.setAttribute('data-open', '');
        item.querySelector('button')?.setAttribute('aria-expanded', 'true');
        document.getElementById('nav').classList.add('nav-open');
      `);
      await new Promise(r => setTimeout(r, 400));
      await screenshot('verify_3_dropdown_open.png');

      // Close dropdown
      await evaluate(`
        document.querySelectorAll('.nav-item').forEach(item => {
          item.removeAttribute('data-open');
          item.querySelector('button')?.setAttribute('aria-expanded', 'false');
        });
        document.getElementById('nav').classList.remove('nav-open');
      `);
      await new Promise(r => setTimeout(r, 400));

      // 4. Comparison Table Section
      await evaluate(`document.getElementById('comparison').scrollIntoView({ block: 'center' })`);
      await new Promise(r => setTimeout(r, 500));
      const tableInfo = await evaluate(`({
        headers: Array.from(document.querySelectorAll('.comparison-table th')).map(th => th.textContent.trim()),
        hasTraditionalAgencies: Array.from(document.querySelectorAll('.comparison-table th')).some(th => th.textContent.trim() === 'Traditional Agencies'),
        hasPuneInHeaders: Array.from(document.querySelectorAll('.comparison-table th')).some(th => th.textContent.includes('Pune')),
        cellCount: document.querySelectorAll('.comparison-table td').length,
        firstCellColor: window.getComputedStyle(document.querySelector('.comparison-table td')).color,
        highlightCellBg: window.getComputedStyle(document.querySelector('.comparison-table td.col-highlight')).backgroundColor
      })`);
      console.log('Comparison Table Info:', tableInfo);
      await screenshot('verify_4_comparison_table.png');

      // 5. Baner Engineering Lab & Founder Section
      await evaluate(`document.getElementById('about').scrollIntoView({ block: 'center' })`);
      await new Promise(r => setTimeout(r, 500));
      await screenshot('verify_5_people_baner_lab.png');

      // 6. FAQ Accordion Open
      await evaluate(`
        document.getElementById('faq').scrollIntoView({ block: 'center' });
        const firstFaqBtn = document.querySelector('.faq-btn');
        if (firstFaqBtn) firstFaqBtn.click();
      `);
      await new Promise(r => setTimeout(r, 500));
      await screenshot('verify_6_faq_open.png');

      // 7. Footer
      await evaluate(`document.querySelector('.site-footer').scrollIntoView({ block: 'start' })`);
      await new Promise(r => setTimeout(r, 500));
      const footerInfo = await evaluate(`({
        footerLogoSrc: document.querySelector('.footer-logo img').getAttribute('src'),
        footerColCount: document.querySelectorAll('.footer-col').length
      })`);
      console.log('Footer Info:', footerInfo);
      await screenshot('verify_7_footer.png');

      // 8. Mobile Viewport (390 x 844 iPhone 14)
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });
      await evaluate('window.scrollTo(0, 0)');
      await new Promise(r => setTimeout(r, 400));
      await screenshot('verify_8_mobile_top.png');

      // Mobile Drawer Open
      await evaluate(`
        const burger = document.getElementById('nav-burger');
        if (burger) burger.click();
      `);
      await new Promise(r => setTimeout(r, 500));
      const mobInfo = await evaluate(`({
        mobDrawerOpen: document.getElementById('mob')?.classList.contains('is-open'),
        mobLogoSrc: document.querySelector('.mob-logo img')?.getAttribute('src')
      })`);
      console.log('Mobile Drawer Info:', mobInfo);
      await screenshot('verify_9_mobile_drawer_open.png');

    } catch (err) {
      console.error('Error during test:', err);
    } finally {
      ws.close();
      chrome.kill();
      process.exit(0);
    }
  };
}

testUserRequirements();
