const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9391;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('localhost:8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  ws.onopen = () => {
    ws.send(JSON.stringify({
      id: 1,
      method: 'Runtime.evaluate',
      params: {
        expression: `
          (() => {
            const scrim = document.getElementById('nav-scrim');
            const mob = document.getElementById('mob');
            const ambient = document.querySelector('.ambient-glow-hero');
            return {
              scrimClasses: scrim ? scrim.className : null,
              scrimComputedDisplay: scrim ? window.getComputedStyle(scrim).display : null,
              scrimComputedVisibility: scrim ? window.getComputedStyle(scrim).visibility : null,
              scrimComputedOpacity: scrim ? window.getComputedStyle(scrim).opacity : null,
              mobClasses: mob ? mob.className : null,
              mobDisplay: mob ? window.getComputedStyle(mob).display : null,
              mobVisibility: mob ? window.getComputedStyle(mob).visibility : null,
              ambientBg: ambient ? window.getComputedStyle(ambient).background : null,
              ambientWidth: ambient ? ambient.offsetWidth : null,
              ambientHeight: ambient ? ambient.offsetHeight : null
            };
          })()
        `,
        returnByValue: true
      }
    }));
  };

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.id === 1) {
      console.log('Overlay inspection:', JSON.stringify(data.result.value, null, 2));
      ws.close();
      chrome.kill();
      process.exit(0);
    }
  };
}

main();

