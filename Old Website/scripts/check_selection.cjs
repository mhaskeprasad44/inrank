const { spawn } = require('child_process');

async function check() {
  const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
    '--headless',
    '--disable-gpu',
    '--remote-debugging-port=9445',
    '--window-size=1440,900',
    'http://localhost:8080/'
  ]);
  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch('http://127.0.0.1:9445/json')).json();
  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise(res => {
        const id = msgId++;
        const h = evt => {
          const d = JSON.parse(evt.data);
          if (d.id === id) { ws.removeEventListener('message', h); res(d.result); }
        };
        ws.addEventListener('message', h);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }
    const evalRes = await send('Runtime.evaluate', { 
      expression: `(() => {
        return {
          selection: window.getSelection().toString(),
          activeElement: document.activeElement ? document.activeElement.outerHTML.slice(0, 100) : null
        };
      })()`,
      returnByValue: true
    });
    console.log('Result:', evalRes.result.value);
    chrome.kill();
    process.exit(0);
  };
}
check();

