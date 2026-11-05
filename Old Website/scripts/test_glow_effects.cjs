const { spawn } = require('child_process');
const fs = require('fs');

async function testGlowEffects() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9715;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
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

    await send('Runtime.evaluate', {
      expression: `
        const mark = document.querySelector('.ft-mark');
        if (mark) mark.scrollIntoView({ block: 'center' });
      `
    });
    await new Promise(r => setTimeout(r, 400));

    // Test Option 1: Intense Radiant Emerald Glow with dynamic radial gradient and drop-shadow
    await send('Runtime.evaluate', {
      expression: `
        const mark = document.querySelector('.ft-mark');
        mark.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        mark.style.background = 'radial-gradient(circle 450px at 50% 40%, #00ff88 0%, #00bf5d 35%, #009d49 60%, rgba(0, 157, 73, 0.2) 100%)';
        mark.style.webkitBackgroundClip = 'text';
        mark.style.backgroundClip = 'text';
        mark.style.filter = 'drop-shadow(0 0 24px rgba(0, 255, 136, 0.75)) drop-shadow(0 0 65px rgba(0, 157, 73, 0.5)) drop-shadow(0 0 120px rgba(0, 157, 73, 0.3))';
        mark.style.opacity = '1';
        mark.style.transform = 'translateY(-2px)';
      `
    });
    await new Promise(r => setTimeout(r, 300));
    const shot1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\test_glow_option1.png', Buffer.from(shot1.data, 'base64'));
    console.log('Saved test_glow_option1.png');

    // Test Option 2: Spotlight glow located at 35% (over the 'R' / 'A')
    await send('Runtime.evaluate', {
      expression: `
        const mark = document.querySelector('.ft-mark');
        mark.style.background = 'radial-gradient(circle 320px at 42% 50%, #00ffaa 0%, #00bf5d 40%, rgba(0, 157, 73, 0.3) 70%, rgba(0, 157, 73, 0.08) 100%)';
        mark.style.webkitBackgroundClip = 'text';
        mark.style.backgroundClip = 'text';
        mark.style.filter = 'drop-shadow(0 0 30px rgba(0, 255, 170, 0.65)) drop-shadow(0 0 80px rgba(0, 157, 73, 0.45))';
      `
    });
    await new Promise(r => setTimeout(r, 300));
    const shot2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\test_glow_spotlight.png', Buffer.from(shot2.data, 'base64'));
    console.log('Saved test_glow_spotlight.png');

    ws.close();
    chrome.kill();
  };
}

testGlowEffects();

