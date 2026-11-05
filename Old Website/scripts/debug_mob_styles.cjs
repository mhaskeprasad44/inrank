const { spawn } = require('child_process');

async function checkMobStyles() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9393;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    'http://localhost:8080/'
  ]);

  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      const tabs = await res.json();
      if (tabs.length) break;
    } catch (e) {}
  }

  const res = await fetch(`http://127.0.0.1:${port}/json`);
  const tabs = await res.json();
  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const timer = setTimeout(() => reject(new Error('Timeout ' + method)), 5000);
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            clearTimeout(timer);
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    try {
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });
      await new Promise(r => setTimeout(r, 1000));

      const evaluation = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const m = document.getElementById('mob');
            if (!m) return 'no #mob found!';
            m.classList.add('open', 'is-open');
            return {
              visibility: window.getComputedStyle(m).visibility,
              transform: window.getComputedStyle(m).transform,
              classes: m.className,
              transition: window.getComputedStyle(m).transition
            };
          })()
        `,
        returnByValue: true
      });

      console.log('Inspection:', evaluation);
    } catch(err) {
      console.error(err);
    } finally {
      ws.close();
      chrome.kill();
      process.exit(0);
    }
  };
}

checkMobStyles();
