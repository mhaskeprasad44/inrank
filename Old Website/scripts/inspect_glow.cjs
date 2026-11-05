const { spawn } = require('child_process');

async function inspect() {
  const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9440',
    '--window-size=1440,900',
    'http://localhost:8080/'
  ]);
  await new Promise(r => setTimeout(r, 1500));
  const tabs = await (await fetch('http://127.0.0.1:9440/json')).json();
  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
  ws.onopen = async () => {
    ws.send(JSON.stringify({ 
      id: 1, 
      method: 'Runtime.evaluate', 
      params: { 
        expression: `(() => {
          const el = document.querySelector('.ambient-glow-hero');
          const style = window.getComputedStyle(el);
          return JSON.stringify({
            bg: style.background,
            filter: style.filter,
            width: style.width,
            height: style.height,
            display: style.display,
            borderRadius: style.borderRadius
          });
        })()` 
      } 
    }));
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id === 1) {
        console.log('ambient-glow-hero:', JSON.parse(data.result.result.value));
        chrome.kill();
        process.exit(0);
      }
    };
  };
}
inspect();

