const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

async function diagnose() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9750;
  const tempDir = path.join(os.tmpdir(), `chrome_diag_${port}_${Date.now()}`);

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
      if (data.method === 'Runtime.exceptionThrown') {
        console.error('JS EXCEPTION:', data.params.exceptionDetails);
      }
    });

    await send('Page.enable');
    await send('Runtime.enable');
    await new Promise(r => setTimeout(r, 1000));

    // Fill the form fields using DOM
    const fillRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const nameInput = document.getElementById('form-name');
        const phoneInput = document.getElementById('form-phone');
        const emailInput = document.getElementById('form-email');
        const submitBtn = document.getElementById('contact-submit-btn') || document.querySelector('button[type="submit"]');

        if (!nameInput || !phoneInput || !emailInput || !submitBtn) {
          return { error: 'Elements not found', hasName: !!nameInput, hasPhone: !!phoneInput, hasEmail: !!emailInput, hasBtn: !!submitBtn };
        }

        nameInput.value = 'Prasad Test';
        phoneInput.value = '+91 87888 23182';
        emailInput.value = 'inranktech@gmail.com';

        // Trigger click on submit button
        submitBtn.click();
        return { success: true };
      })()`,
      returnByValue: true
    });

    console.log('Fill & Click result:', fillRes.result.value);

    // Wait 2 seconds for submission
    await new Promise(r => setTimeout(r, 2000));

    console.log('Console logs during submit:');
    consoleLogs.forEach(l => console.log('  [' + l.type + ']', ...l.args));

    // Check UI state
    const uiState = await send('Runtime.evaluate', {
      expression: `(() => {
        const banner = document.getElementById('form-status-banner');
        const btn = document.getElementById('contact-submit-btn') || document.querySelector('button[type="submit"]');
        return {
          bannerFound: !!banner,
          bannerDisplay: banner ? banner.style.display : null,
          bannerContent: banner ? banner.innerText : null,
          btnText: btn ? btn.innerText.trim() : null,
          btnDisabled: btn ? btn.disabled : null
        };
      })()`,
      returnByValue: true
    });
    console.log('UI state after submit:', uiState.result.value);

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

diagnose().catch(err => {
  console.error(err);
  process.exit(1);
});

