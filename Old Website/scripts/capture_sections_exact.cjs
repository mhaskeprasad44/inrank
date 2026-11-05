const { spawn } = require('child_process');
const fs = require('fs');

async function captureSections() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9399;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1000',
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

      // Scroll specifically to comparison table box top
      await evaluate(`
        const table = document.querySelector('.comparison-table-wrap');
        const y = table.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo(0, y);
      `);
      await new Promise(r => setTimeout(r, 500));
      await screenshot('ss_comparison_table_exact.png');

      // Scroll to Baner Lab People card
      await evaluate(`
        const card = document.querySelector('.people-card');
        const y = card.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo(0, y);
      `);
      await new Promise(r => setTimeout(r, 500));
      await screenshot('ss_people_card_exact.png');

      // Scroll to Pricing section
      await evaluate(`
        const p = document.getElementById('pricing');
        const y = p.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo(0, y);
      `);
      await new Promise(r => setTimeout(r, 500));
      await screenshot('ss_pricing_exact.png');

      // Scroll to Dual Closing section
      await evaluate(`
        const c = document.querySelector('.closing-section');
        const y = c.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo(0, y);
      `);
      await new Promise(r => setTimeout(r, 500));
      await screenshot('ss_closing_exact.png');

      // Scroll to Footer
      await evaluate(`
        const f = document.querySelector('.site-footer');
        const y = f.getBoundingClientRect().top + window.scrollY - 40;
        window.scrollTo(0, y);
      `);
      await new Promise(r => setTimeout(r, 500));
      await screenshot('ss_footer_exact.png');

    } catch (err) {
      console.error(err);
    } finally {
      ws.close();
      chrome.kill();
      process.exit(0);
    }
  };
}

captureSections();

