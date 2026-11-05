const { spawn } = require('child_process');
const fs = require('fs');

async function verifyAllFixes() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9722;
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

    // 1. Verify Homepage Testimonials -> Pricing Transition (Checklist is completely gone)
    await send('Page.navigate', { url: 'http://localhost:8080/' });
    await new Promise(r => setTimeout(r, 800));
    await send('Runtime.evaluate', {
      expression: `(() => {
        const pricing = document.getElementById('pricing');
        if (pricing) pricing.scrollIntoView({ block: 'start' });
      })()`
    });
    await new Promise(r => setTimeout(r, 400));
    const shotHome = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verify_no_checklist_homepage.png', Buffer.from(shotHome.data, 'base64'));
    console.log('Saved verify_no_checklist_homepage.png');

    // 2. Verify Service Page Execution Thread with H3 (services/seo-company-pune.html)
    await send('Page.navigate', { url: 'http://localhost:8080/services/seo-company-pune.html' });
    await new Promise(r => setTimeout(r, 800));
    await send('Runtime.evaluate', {
      expression: `(() => {
        const thread = document.querySelector('.thread-map');
        if (thread) thread.scrollIntoView({ block: 'center' });
      })()`
    });
    await new Promise(r => setTimeout(r, 400));
    const shotThread = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verify_service_h3_thread.png', Buffer.from(shotThread.data, 'base64'));
    console.log('Saved verify_service_h3_thread.png');

    // 3. Verify Services Dropdown Menu Visual
    await send('Runtime.evaluate', {
      expression: `(() => {
        window.scrollTo(0, 0);
        const trigger = document.querySelector('.nav-item--drop > .nav-link');
        if (trigger) {
          trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
          trigger.closest('.nav-item--drop').classList.add('is-active', 'is-open');
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 400));
    const shotDrop = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\verify_nav_dropdown_fixed.png', Buffer.from(shotDrop.data, 'base64'));
    console.log('Saved verify_nav_dropdown_fixed.png');

    ws.close();
    chrome.kill();
  };
}

verifyAllFixes().catch(console.error);

