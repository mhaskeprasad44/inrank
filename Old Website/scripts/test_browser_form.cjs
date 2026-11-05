const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

async function testBrowserForm() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9755;
  const tempDir = path.join(os.tmpdir(), `chrome_test_${port}_${Date.now()}`);

  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tempDir}`,
    '--window-size=1440,1200',
    '--no-sandbox',
    'http://localhost:8080/contact.html'
  ]);

  await new Promise(r => setTimeout(r, 2500));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('contact.html')) || tabs[0];
  console.log('Target tab URL:', targetTab.url);

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

    const logs = [];
    const networkRequests = [];

    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === 'Runtime.consoleAPICalled') {
        logs.push({ type: data.params.type, args: data.params.args.map(a => a.value || a.description) });
      }
      if (data.method === 'Network.requestWillBeSent') {
        networkRequests.push({ url: data.params.request.url, method: data.params.request.method });
      }
    });

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Network.enable');

    await new Promise(r => setTimeout(r, 1500));

    // Fill form
    const fillResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const name = document.getElementById('form-name');
        const phone = document.getElementById('form-phone');
        const email = document.getElementById('form-email');
        const url = document.getElementById('form-url');
        const message = document.getElementById('form-message');
        const btn = document.getElementById('contact-submit-btn');

        if (!btn) return 'BUTTON NOT FOUND';

        name.value = 'Rohan Deshmukh';
        phone.value = '+91 9876543210';
        email.value = 'rohan@deshmukh.co';
        if (url) url.value = 'https://deshmukh.co';
        if (message) message.value = 'Need website overhaul and SEO rankings in Pune.';

        btn.click();
        return 'SUBMITTED';
      })()`,
      returnByValue: true
    });

    console.log('Fill result:', fillResult);

    // Wait 3 seconds for async fetch to finish
    await new Promise(r => setTimeout(r, 3500));

    console.log('Console logs:', JSON.stringify(logs, null, 2));
    console.log('Network requests:', JSON.stringify(networkRequests, null, 2));

    const checkState = await send('Runtime.evaluate', {
      expression: `(() => {
        const banner = document.getElementById('form-status-banner');
        const btn = document.getElementById('contact-submit-btn');
        return {
          bannerDisplayed: banner ? banner.style.display : 'none',
          bannerText: banner ? banner.innerText : '',
          btnText: btn ? btn.innerText : ''
        };
      })()`,
      returnByValue: true
    });
    console.log('Post-submit state:', checkState.result.value);

    // Scroll form into view and take screenshot
    await send('Runtime.evaluate', {
      expression: `document.getElementById('inrank-contact-form')?.scrollIntoView({ block: 'center' });`
    });
    await new Promise(r => setTimeout(r, 600));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/test_browser_form_result.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved screenshot to test_browser_form_result.png');

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

testBrowserForm().catch(err => {
  console.error(err);
  process.exit(1);
});

