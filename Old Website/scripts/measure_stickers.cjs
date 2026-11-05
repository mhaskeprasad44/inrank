const { spawn } = require('child_process');

async function test() {
  const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9425',
    '--window-size=1440,900',
    'http://localhost:8080/'
  ]);
  await new Promise(r => setTimeout(r, 1500));
  const tabs = await (await fetch('http://127.0.0.1:9425/json')).json();
  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
  ws.onopen = async () => {
    ws.send(JSON.stringify({ 
      id: 1, 
      method: 'Runtime.evaluate', 
      params: { 
        expression: `JSON.stringify({
          parentWidth: document.querySelector('.hero-stickers-row').getBoundingClientRect().width,
          stickers: Array.from(document.querySelectorAll('.platform-sticker')).map(el => ({
            text: el.innerText.trim(),
            width: el.getBoundingClientRect().width
          }))
        })` 
      } 
    }));
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id === 1) {
        console.log(JSON.parse(data.result.result.value));
        chrome.kill();
        process.exit(0);
      }
    };
  };
}
test();

