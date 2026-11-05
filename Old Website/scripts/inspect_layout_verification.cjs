const { spawn } = require('child_process');
const fs = require('fs');

async function inspectLayout() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9695;
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

      // Inject proposed CSS
      await send('Runtime.evaluate', {
        expression: `
          (() => {
            const style = document.createElement('style');
            style.id = 'hero-equal-spacing-test';
            style.innerHTML = \`
              .hero-hp2-section {
                padding-top: clamp(6.5rem, 10vw, 8.25rem) !important;
                padding-bottom: clamp(3.5rem, 5vw, 4.5rem) !important;
              }
              .hero-hp2-container {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                text-align: center !important;
                gap: 1.85rem !important;
                max-width: 1200px !important;
                margin: 0 auto !important;
              }
              .hero-stickers-wrap {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                text-align: center !important;
                gap: 1rem !important;
                margin: 0 !important;
                width: 100% !important;
              }
              .hero-stickers-row {
                display: flex !important;
                flex-wrap: wrap !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 0.45rem 0.55rem !important;
                max-width: 880px !important;
                margin: 0 auto !important;
                padding: 0 !important;
              }
              .hero-hp2-kicker {
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 0.5rem !important;
                margin: 0 !important;
                font-size: clamp(0.7rem, 1.4vw, 0.76rem) !important;
                font-weight: 800 !important;
                text-transform: uppercase !important;
                letter-spacing: 0.12em !important;
                color: #009d49 !important;
                text-align: center !important;
                line-height: 1.4 !important;
                max-width: 92vw !important;
                flex-wrap: wrap !important;
              }
              .hero-hp2-header {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                text-align: center !important;
                max-width: 980px !important;
                margin: 0 auto !important;
                gap: 1.15rem !important;
              }
              .hero-hp2-title {
                margin: 0 !important;
                line-height: 1.08 !important;
              }
              .hero-hp2-sub {
                margin: 0 auto !important;
                max-width: 820px !important;
                line-height: 1.6 !important;
              }
              .hero-hp2-actions {
                display: flex !important;
                flex-wrap: wrap !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 1rem !important;
                margin: 0 auto !important;
              }
              .hero-hp2-btn-primary,
              .hero-hp2-btn-secondary {
                height: 52px !important;
                padding: 0 1.85rem !important;
                border-radius: 14px !important;
                font-size: 0.95rem !important;
                font-weight: 700 !important;
                box-sizing: border-box !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
              }
              .hero-hp2-btn-primary {
                border: 1.5px solid #081424 !important;
              }
              .hero-hp2-btn-secondary {
                border: 1.5px solid #cbd5e1 !important;
              }
              .hero-hp2-metrics {
                display: grid !important;
                grid-template-columns: repeat(3, 1fr) !important;
                gap: 1.25rem !important;
                width: 100% !important;
                max-width: 860px !important;
                margin: 0 auto !important;
              }
              .hero-metric-card {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                justify-content: center !important;
                padding: 1.15rem 1.25rem !important;
                min-height: 100% !important;
                box-sizing: border-box !important;
              }
              .hero-metric-label {
                min-height: 2.4em !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                margin-top: 0.35rem !important;
              }
            \`;
            document.head.appendChild(style);
          })()
        `
      });

      await new Promise(r => setTimeout(r, 600));

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

      console.log('Layout Metrics:', JSON.stringify(res.result.value, null, 2));

      ws.close();
      chrome.kill();
      resolve();
    };
  });
}

inspectLayout();
