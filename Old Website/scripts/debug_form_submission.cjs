const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

async function testUserClick() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9745;
  const tempDir = path.join(os.tmpdir(), `chrome_debug_${port}_${Date.now()}`);

  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tempDir}`,
    '--window-size=1440,1200',
    '--no-sandbox',
    'http://localhost:8080/contact.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs[0];
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
      if (data.method === 'Runtime.exceptionThrown') {
        console.error('JS EXCEPTION:', data.params.exceptionDetails);
      }
    });

    await send('Page.enable');
    await send('Runtime.enable');
    await new Promise(r => setTimeout(r, 1000));

    // Check what happens when user clicks submit button with empty fields
    const emptyClickResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.getElementById('contact-submit-btn');
        btn.click();
        return 'Clicked empty';
      })()`
    });
    console.log(emptyClickResult);

    // Now fill the form like a real user
    await send('Runtime.evaluate', {
      expression: `(() => {
        const name = document.getElementById('form-name');
        name.value = 'John Doe';
        name.dispatchEvent(new Event('input', { bubbles: true }));

        const phone = document.getElementById('form-phone');
        phone.value = '+91 9999999999';
        phone.dispatchEvent(new Event('input', { bubbles: true }));

        const email = document.getElementById('form-email');
        email.value = 'john@example.com';
        email.dispatchEvent(new Event('input', { bubbles: true }));

        const btn = document.getElementById('contact-submit-btn');
        btn.click();
        return 'Clicked with data';
      })()`
    });

    await new Promise(r => setTimeout(r, 2000));
    console.log('Console logs during click:', consoleLogs);

    // Check status banner and form state
    const state = await send('Runtime.evaluate', {
      expression: `(() => {
        const banner = document.getElementById('form-status-banner');
        const btn = document.getElementById('contact-submit-btn');
        const form = document.getElementById('inrank-contact-form');
        return {
          bannerExists: !!banner,
          bannerDisplay: banner ? banner.style.display : null,
          bannerText: banner ? banner.innerText : null,
          btnDisabled: btn ? btn.disabled : null,
          btnText: btn ? btn.innerText : null,
          nameValue: document.getElementById('form-name').value
        };
      })()`,
      returnByValue: true
    });
    console.log('Form state after submit:', state.result.value);

    // Capture screenshot
    await send('Runtime.evaluate', {
      expression: `document.getElementById('inrank-contact-form').scrollIntoView({ block: 'center' });`
    });
    await new Promise(r => setTimeout(r, 500));
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/debug_form_submission.png', Buffer.from(shot.data, 'base64'));

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

testUserClick().catch(err => {
  console.error(err);
  process.exit(1);
});

