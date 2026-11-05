const { spawn } = require('child_process');
const fs = require('fs');

async function testTextOnlyGlow() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9717;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,960',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('8080')) || tabs[0];
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

    await send('Page.enable');
    await send('Runtime.enable');

    // Scroll to bottom
    await send('Runtime.evaluate', {
      expression: `(() => {
        const mark = document.querySelector('.ft-mark');
        mark.scrollIntoView({ behavior: 'instant', block: 'end' });
      })()`
    });
    await new Promise(r => setTimeout(r, 500));

    // Test A: Pure text-clipped spotlight, NO drop shadow (filter: none)
    // Moderate elegant intensity: #00d66c / #00bf5d / #009d49
    await send('Runtime.evaluate', {
      expression: `(() => {
        const mark = document.querySelector('.ft-mark');
        mark.style.filter = 'none';
        mark.style.transform = 'none';
        mark.style.background = 'radial-gradient(circle 350px at 50% 40%, #00e676 0%, #00bf5d 30%, #009d49 60%, rgba(0, 157, 73, 0.18) 95%)';
        mark.style.webkitBackgroundClip = 'text';
        mark.style.backgroundClip = 'text';
      })()`
    });
    await new Promise(r => setTimeout(r, 300));
    const shotA = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\test_text_only_optA.png', Buffer.from(shotA.data, 'base64'));
    console.log('Saved optA');

    // Test B: Slightly brighter center spotlight on text only (#00ff88 -> #00bf5d -> #009d49) with filter: none
    await send('Runtime.evaluate', {
      expression: `(() => {
        const mark = document.querySelector('.ft-mark');
        mark.style.filter = 'none';
        mark.style.transform = 'none';
        mark.style.background = 'radial-gradient(circle 320px at 50% 40%, #00ff88 0%, #00d66c 25%, #009d49 55%, rgba(0, 157, 73, 0.15) 85%)';
        mark.style.webkitBackgroundClip = 'text';
        mark.style.backgroundClip = 'text';
      })()`
    });
    await new Promise(r => setTimeout(r, 300));
    const shotB = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\test_text_only_optB.png', Buffer.from(shotB.data, 'base64'));
    console.log('Saved optB');

    // Test C: Refined brand green with soft contrast (smooth, not harsh)
    await send('Runtime.evaluate', {
      expression: `(() => {
        const mark = document.querySelector('.ft-mark');
        mark.style.filter = 'none';
        mark.style.transform = 'none';
        mark.style.background = 'radial-gradient(circle 380px at 50% 40%, rgba(0, 255, 136, 0.85) 0%, rgba(0, 191, 93, 0.7) 32%, rgba(0, 157, 73, 0.45) 60%, rgba(0, 157, 73, 0.12) 90%)';
        mark.style.webkitBackgroundClip = 'text';
        mark.style.backgroundClip = 'text';
      })()`
    });
    await new Promise(r => setTimeout(r, 300));
    const shotC = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\test_text_only_optC.png', Buffer.from(shotC.data, 'base64'));
    console.log('Saved optC');

    ws.close();
    chrome.kill();
  };
}

testTextOnlyGlow().catch(console.error);

