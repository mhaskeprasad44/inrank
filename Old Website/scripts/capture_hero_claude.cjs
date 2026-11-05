const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

async function captureHeroClaude() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9794;
  const tempDir = path.join(os.tmpdir(), `chrome_hero_${port}_${Date.now()}`);

  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tempDir}`,
    '--window-size=1440,1100',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  await new Promise(r => setTimeout(r, 2500));
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
    await new Promise(r => setTimeout(r, 1200));

    // Scroll to the platform stickers in hero
    await send('Runtime.evaluate', {
      expression: `(() => {
        const stickers = document.querySelector('.platform-stickers') || document.querySelector('.platform-sticker');
        if (stickers) stickers.scrollIntoView({ block: 'center' });
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    // Clip screenshot to the stickers container or hero area
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const outPath = 'C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/verified_hero_claude_logo.png';
    fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
    console.log('Saved hero screenshot to:', outPath);

    // Also get bounding box of Claude sticker
    const claudeBox = await send('Runtime.evaluate', {
      expression: `(() => {
        const img = document.querySelector('img[alt="Claude AI"]') || document.querySelector('img[src*="claude"]');
        if (!img) return null;
        const rect = img.closest('.platform-sticker')?.getBoundingClientRect() || img.getBoundingClientRect();
        return {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      })()`,
      returnByValue: true
    });
    console.log('Claude sticker rect:', claudeBox.result.value);

    if (claudeBox.result.value) {
      const box = claudeBox.result.value;
      const zoomShot = await send('Page.captureScreenshot', {
        format: 'png',
        clip: {
          x: Math.max(0, box.x - 120),
          y: Math.max(0, box.y - 40),
          width: box.width + 240,
          height: box.height + 80,
          scale: 2
        }
      });
      const zoomPath = 'C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/verified_claude_logo_zoom.png';
      fs.writeFileSync(zoomPath, Buffer.from(zoomShot.data, 'base64'));
      console.log('Saved zoom screenshot to:', zoomPath);
    }

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

captureHeroClaude().catch(console.error);

