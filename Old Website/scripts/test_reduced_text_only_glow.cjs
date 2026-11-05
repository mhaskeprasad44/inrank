const { spawn } = require('child_process');
const fs = require('fs');

async function testReducedTextOnlyGlow() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9718;
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
    await new Promise(r => setTimeout(r, 400));

    // Test text-only refined spotlight at 50%
    await send('Runtime.evaluate', {
      expression: `(() => {
        const mark = document.querySelector('.ft-mark');
        mark.style.filter = 'none';
        mark.style.transform = 'none';
        mark.style.background = 'radial-gradient(circle 360px at 50% 50%, #00d66c 0%, #00bf5d 30%, #009d49 60%, rgba(0, 157, 73, 0.18) 95%)';
        mark.style.webkitBackgroundClip = 'text';
        mark.style.backgroundClip = 'text';
      })()`
    });
    await new Promise(r => setTimeout(r, 300));
    const shotCenter = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\test_refined_text_center.png', Buffer.from(shotCenter.data, 'base64'));

    // Test text-only refined spotlight at 25% (over 'N')
    await send('Runtime.evaluate', {
      expression: `(() => {
        const mark = document.querySelector('.ft-mark');
        mark.style.background = 'radial-gradient(circle 360px at 25% 50%, #00d66c 0%, #00bf5d 30%, #009d49 60%, rgba(0, 157, 73, 0.18) 95%)';
        mark.style.webkitBackgroundClip = 'text';
        mark.style.backgroundClip = 'text';
      })()`
    });
    await new Promise(r => setTimeout(r, 300));
    const shotLeft = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\test_refined_text_left.png', Buffer.from(shotLeft.data, 'base64'));

    // Test text-only refined spotlight at 78% (over 'K')
    await send('Runtime.evaluate', {
      expression: `(() => {
        const mark = document.querySelector('.ft-mark');
        mark.style.background = 'radial-gradient(circle 360px at 78% 50%, #00d66c 0%, #00bf5d 30%, #009d49 60%, rgba(0, 157, 73, 0.18) 95%)';
        mark.style.webkitBackgroundClip = 'text';
        mark.style.backgroundClip = 'text';
      })()`
    });
    await new Promise(r => setTimeout(r, 300));
    const shotRight = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\test_refined_text_right.png', Buffer.from(shotRight.data, 'base64'));

    console.log('Saved all 3 refined shots');

    ws.close();
    chrome.kill();
  };
}

testReducedTextOnlyGlow().catch(console.error);

