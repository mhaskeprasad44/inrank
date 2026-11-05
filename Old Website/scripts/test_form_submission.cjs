const { spawn } = require('child_process');
const fs = require('fs');

async function testSubmission() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9726;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1100',
    '--no-sandbox',
    'http://localhost:8080/contact.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
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

    ws.addEventListener('message', (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === 'Runtime.consoleAPICalled') {
        console.log('[BROWSER CONSOLE]', data.params.type, data.params.args.map(a => a.value || a.description));
      }
    });

    await send('Page.enable');
    await send('Runtime.enable');
    await new Promise(r => setTimeout(r, 1000));

    // Fill the form fields via JavaScript
    const fillResult = await send('Runtime.evaluate', {
      expression: `(() => {
        document.getElementById('form-name').value = 'Test Client';
        document.getElementById('form-phone').value = '+91 9876543210';
        document.getElementById('form-email').value = 'testclient@example.com';
        document.getElementById('form-url').value = 'https://testclient.com';
        document.getElementById('form-service').value = 'Custom Website Development';
        document.getElementById('form-package').value = 'Growth Tier (₹16,999 - ₹18,999)';
        document.getElementById('form-message').value = 'Test automated inquiry for contact form verification.';
        
        // Trigger submit
        const form = document.getElementById('inrank-contact-form');
        const submitEvent = new Event('submit', { cancelable: true, bubbles: true });
        form.dispatchEvent(submitEvent);
        return 'Submitted';
      })()`,
      returnByValue: true
    });
    console.log('Fill & submit result:', fillResult.result.value);

    // Wait for submission response - give it 8 seconds to allow network calls
    await new Promise(r => setTimeout(r, 8000));

    // Inspect UI status
    const status = await send('Runtime.evaluate', {
      expression: `(() => {
        const banner = document.getElementById('form-status-banner');
        const btn = document.getElementById('contact-submit-btn');
        return {
          bannerDisplay: banner ? banner.style.display : null,
          bannerHTML: banner ? banner.innerHTML : null,
          btnText: btn ? btn.textContent.trim() : null
        };
      })()`,
      returnByValue: true
    });
    console.log('Post-submission status:', status.result.value);

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/verified_form_submitted.png', Buffer.from(shot.data, 'base64'));

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

testSubmission().catch(err => {
  console.error(err);
  process.exit(1);
});
