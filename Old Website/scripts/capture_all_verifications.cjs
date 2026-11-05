const { spawn } = require('child_process');
const fs = require('fs');

async function captureAllVisualVerifications() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9701;
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
      await send('Page.reload', { ignoreCache: true });
      await new Promise(r => setTimeout(r, 1200));

      const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

      // 1. Capture Hero Section (Stickers + Kicker + Heading)
      const shot1 = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${artifactDir}\\verify_1_hero_spacing_and_wp.png`, Buffer.from(shot1.data, 'base64'));
      console.log('Saved verify_1_hero_spacing_and_wp.png');

      // 2. Measure Hero Spacing
      const heroMetrics = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const stickersRow = document.querySelector('.hero-stickers-row').getBoundingClientRect();
            const kicker = document.querySelector('.hero-hp2-kicker').getBoundingClientRect();
            return {
              stickersBottom: Math.round(stickersRow.bottom),
              kickerTop: Math.round(kicker.top),
              gapStickersToKicker: Math.round(kicker.top - stickersRow.bottom)
            };
          })()
        `,
        returnByValue: true
      });
      console.log('Hero Metrics:', JSON.stringify(heroMetrics.result.value, null, 2));

      // 3. Scroll to Services Section and Capture Service Cards with Checklists and AI icon
      await send('Runtime.evaluate', {
        expression: `document.getElementById('services').scrollIntoView();`
      });
      await new Promise(r => setTimeout(r, 600));

      const shot2 = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${artifactDir}\\verify_2_services_checklist.png`, Buffer.from(shot2.data, 'base64'));
      console.log('Saved verify_2_services_checklist.png');

      // Scroll slightly to view bottom 4 service cards (Cards 05-08 including AI SEO)
      await send('Runtime.evaluate', {
        expression: `
          (() => {
            const cards = document.querySelectorAll('.eco-service-card');
            cards[4].scrollIntoView({ block: 'center' });
          })()
        `
      });
      await new Promise(r => setTimeout(r, 600));

      const shot3 = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${artifactDir}\\verify_3_service_cards_bottom_ai_icon.png`, Buffer.from(shot3.data, 'base64'));
      console.log('Saved verify_3_service_cards_bottom_ai_icon.png');

      // 4. Scroll to Industry Niches section and capture Niches + Pillars
      await send('Runtime.evaluate', {
        expression: `document.getElementById('niches').scrollIntoView();`
      });
      await new Promise(r => setTimeout(r, 600));

      const shot4 = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${artifactDir}\\verify_4_niches_top.png`, Buffer.from(shot4.data, 'base64'));
      console.log('Saved verify_4_niches_top.png');

      // Scroll to Pillars inside Niches section
      await send('Runtime.evaluate', {
        expression: `
          (() => {
            const nichesSection = document.getElementById('niches');
            const pillars = nichesSection.querySelector('.eco-pillars-grid');
            pillars.scrollIntoView({ block: 'center' });
          })()
        `
      });
      await new Promise(r => setTimeout(r, 600));

      const shot5 = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${artifactDir}\\verify_5_pillars_inside_niches.png`, Buffer.from(shot5.data, 'base64'));
      console.log('Saved verify_5_pillars_inside_niches.png');

      ws.close();
      chrome.kill();
      resolve();
    };
  });
}

captureAllVisualVerifications();
