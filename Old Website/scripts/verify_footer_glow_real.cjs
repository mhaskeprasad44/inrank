const { spawn } = require('child_process');
const fs = require('fs');

async function verifyFooterGlow() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9716;
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

    // 1. Scroll footer completely into view
    await send('Runtime.evaluate', {
      expression: `(() => {
        const mark = document.querySelector('.ft-mark');
        mark.scrollIntoView({ behavior: 'instant', block: 'end' });
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    // Get .ft-mark bounding rect relative to viewport NOW after scroll
    const evalRect = await send('Runtime.evaluate', {
      expression: `(() => {
        const mark = document.querySelector('.ft-mark');
        const r = mark.getBoundingClientRect();
        return JSON.stringify({ 
          left: r.left, 
          top: r.top, 
          width: r.width, 
          height: r.height, 
          scrollY: window.scrollY,
          innerHeight: window.innerHeight 
        });
      })()`,
      returnByValue: true
    });

    const rectStr = evalRect.result ? evalRect.result.value : evalRect.value;
    const rect = JSON.parse(rectStr);
    console.log('ft-mark viewport rect after scroll:', rect);

    // 2. Dispatch mouse movement to the center (approx 50% X)
    const midX = Math.round(rect.left + rect.width * 0.5);
    const midY = Math.round(rect.top + rect.height * 0.4);

    console.log('Moving mouse to Center:', midX, midY);
    await send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: midX,
      y: midY
    });

    await new Promise(r => setTimeout(r, 600));

    // Capture screenshot with hover active
    const shotCenter = await send('Page.captureScreenshot', { format: 'png' });
    const centerPath = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\footer_text_only_glow_center.png';
    fs.writeFileSync(centerPath, Buffer.from(shotCenter.data, 'base64'));
    console.log('Saved', centerPath);

    // 3. Dispatch mouse movement to the left (approx 20% X - over 'I'/'N')
    const leftX = Math.round(rect.left + rect.width * 0.2);
    console.log('Moving mouse to Left:', leftX, midY);
    await send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: leftX,
      y: midY
    });

    await new Promise(r => setTimeout(r, 600));

    const shotLeft = await send('Page.captureScreenshot', { format: 'png' });
    const leftPath = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\footer_text_only_glow_left.png';
    fs.writeFileSync(leftPath, Buffer.from(shotLeft.data, 'base64'));
    console.log('Saved', leftPath);

    // 4. Dispatch mouse movement to the right (approx 80% X - over 'N'/'K')
    const rightX = Math.round(rect.left + rect.width * 0.8);
    console.log('Moving mouse to Right:', rightX, midY);
    await send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: rightX,
      y: midY
    });

    await new Promise(r => setTimeout(r, 600));

    const shotRight = await send('Page.captureScreenshot', { format: 'png' });
    const rightPath = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\footer_text_only_glow_right.png';
    fs.writeFileSync(rightPath, Buffer.from(shotRight.data, 'base64'));
    console.log('Saved', rightPath);

    ws.close();
    chrome.kill();
  };
}

verifyFooterGlow().catch(console.error);
