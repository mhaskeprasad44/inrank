const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9397;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 2000));
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
            const els = Array.from(document.querySelectorAll('.hero-hp2-section *'));
            const overflowing = els
              .filter(el => el.offsetWidth > 390)
              .map(el => ({
                tag: el.tagName,
                class: el.className,
                width: el.offsetWidth
              }));
            return JSON.stringify(overflowing.slice(0, 8));
          })()
        `
      }
    }));
  };

  ws.onmessage = (e) => {
    console.log(e.data);
    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main();
