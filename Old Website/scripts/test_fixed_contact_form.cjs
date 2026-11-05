const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

async function testContactForm() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9768;
  const tempDir = path.join(os.tmpdir(), `chrome_contact_${port}_${Date.now()}`);

  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tempDir}`,
    '--window-size=1440,1300',
    '--no-sandbox',
    'http://localhost:8080/contact.html'
  ]);

  await new Promise(r => setTimeout(r, 2500));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('contact.html')) || tabs[0];

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

    const consoleLogs = [];
    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === 'Runtime.consoleAPICalled') {
        consoleLogs.push({ type: data.params.type, args: data.params.args.map(a => a.value || a.description) });
      }
    });

    await send('Page.enable');
    await send('Runtime.enable');

    await new Promise(r => setTimeout(r, 1500));

    // Fill the form with realistic data
    console.log('Filling form fields...');
    const fillRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const name = document.getElementById('form-name');
        const phone = document.getElementById('form-phone');
        const email = document.getElementById('form-email');
        const url = document.getElementById('form-url');
        const service = document.getElementById('form-service');
        const pkg = document.getElementById('form-package');
        const message = document.getElementById('form-message');
        const btn = document.getElementById('contact-submit-btn');

        name.value = 'Amit Kulkarni';
        phone.value = '+91 98220 12345';
        email.value = 'amit.kulkarni@techpune.in';
        url.value = 'https://techpune.in';
        service.value = 'Custom Website Development';
        pkg.value = 'Growth Tier (₹16,999 - ₹18,999)';
        message.value = 'We are expanding our software consultancy in Baner, Pune and need high-converting website redesign + local SEO rankings.';

        btn.click();
        return 'SUBMITTED_SUCCESSFULLY';
      })()`,
      returnByValue: true
    });
    console.log('Fill result:', fillRes.result.value);

    // Wait 6 seconds for network dispatch to complete
    console.log('Waiting for network dispatch...');
    await new Promise(r => setTimeout(r, 6000));

    console.log('Console logs during submit:');
    consoleLogs.forEach(l => console.log(' ', l.type, ...l.args));

    // Check banner state and button state
    const state = await send('Runtime.evaluate', {
      expression: `(() => {
        const banner = document.getElementById('form-status-banner');
        const btn = document.getElementById('contact-submit-btn');
        return {
          bannerVisible: banner ? banner.style.display !== 'none' : false,
          bannerText: banner ? banner.innerText : null,
          btnText: btn ? btn.innerText.trim() : null
        };
      })()`,
      returnByValue: true
    });
    console.log('Verification State:', state.result.value);

    // Scroll form into view
    await send('Runtime.evaluate', {
      expression: `(() => {
        const card = document.querySelector('.form-card');
        if (card) card.scrollIntoView({ block: 'center' });
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const outPath = 'C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/verified_fixed_contact_form.png';
    fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
    console.log('Screenshot saved to:', outPath);

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

testContactForm().catch(err => {
  console.error(err);
  process.exit(1);
});
