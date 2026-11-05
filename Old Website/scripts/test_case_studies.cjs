const { spawn } = require('child_process');
const fs = require('fs');

async function testCaseStudies() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9705;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1800',
    '--no-sandbox',
    'http://localhost:8080/case-studies.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('case-studies')) || tabs[0];
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

    const evalRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const cards = Array.from(document.querySelectorAll('.work-card'));
          const buttons = Array.from(document.querySelectorAll('.filter-btn'));
          return {
            cardCount: cards.length,
            btnCount: buttons.length,
            cardTitles: cards.map(c => c.querySelector('.work-card-title').innerText)
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Case studies DOM analysis:', JSON.stringify(evalRes.result.value, null, 2));

    // Test clicking Manufacturing filter
    const clickRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btn = document.querySelector('.filter-btn[data-target="manufacturing"]');
          btn.click();
          const cards = Array.from(document.querySelectorAll('.work-card'));
          return cards.map(c => ({
            filter: c.getAttribute('data-filter'),
            display: window.getComputedStyle(c).display
          }));
        })()
      `,
      returnByValue: true
    });
    console.log('Cards after clicking Manufacturing filter:', JSON.stringify(clickRes.result.value, null, 2));

    // Reset back to All filter
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.filter-btn[data-target="all"]').click()`
    });

    // Capture screenshot
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\case_studies_verified.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved screenshot case_studies_verified.png');

    ws.close();
    chrome.kill();
  };
}

testCaseStudies();

