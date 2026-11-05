const { spawn } = require('child_process');
const fs = require('fs');

async function verifyNativeLayout() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9697;
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

  return new Promise((resolve) => {
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

      // Reload to ensure fresh cache
      await send('Page.reload', { ignoreCache: true });
      await new Promise(r => setTimeout(r, 1200));

      const res = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const b = (sel) => {
              const el = document.querySelector(sel);
              if (!el) return null;
              const r = el.getBoundingClientRect();
              return {
                top: Math.round(r.top * 10) / 10,
                bottom: Math.round(r.bottom * 10) / 10,
                height: Math.round(r.height * 10) / 10,
                left: Math.round(r.left * 10) / 10,
                right: Math.round(r.right * 10) / 10,
                width: Math.round(r.width * 10) / 10,
                centerX: Math.round((r.left + r.width / 2) * 10) / 10
              };
            };

            const stickersWrap = b('.hero-stickers-wrap');
            const stickersRow = b('.hero-stickers-row');
            const kicker = b('.hero-hp2-kicker');
            const header = b('.hero-hp2-header');
            const title = b('.hero-hp2-title');
            const sub = b('.hero-hp2-sub');
            const actions = b('.hero-hp2-actions');
            const btn1 = b('.hero-hp2-btn-primary');
            const btn2 = b('.hero-hp2-btn-secondary');
            const metricsBox = b('.hero-hp2-metrics');
            const cards = Array.from(document.querySelectorAll('.hero-metric-card')).map(el => {
              const r = el.getBoundingClientRect();
              return { width: Math.round(r.width * 10) / 10, height: Math.round(r.height * 10) / 10 };
            });

            return {
              viewportWidth: window.innerWidth,
              stickersWrap,
              stickersRow,
              kicker,
              header,
              title,
              sub,
              actions,
              btn1,
              btn2,
              metricsBox,
              cards,
              gaps: {
                stickersToKicker: Math.round((kicker.top - stickersRow.bottom) * 10) / 10,
                block1ToBlock2: Math.round((header.top - stickersWrap.bottom) * 10) / 10,
                titleToSub: Math.round((sub.top - title.bottom) * 10) / 10,
                block2ToBlock3: Math.round((actions.top - header.bottom) * 10) / 10,
                block3ToBlock4: Math.round((metricsBox.top - actions.bottom) * 10) / 10
              }
            };
          })()
        `,
        returnByValue: true
      });

      console.log('Native File Layout Metrics:', JSON.stringify(res.result.value, null, 2));

      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\hero_native_verified.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved hero_native_verified.png');

      ws.close();
      chrome.kill();
      resolve();
    };
  });
}

verifyNativeLayout();

