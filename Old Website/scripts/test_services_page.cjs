const { spawn } = require('child_process');
const fs = require('fs');

async function testServicesPage() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9706;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,2400',
    '--no-sandbox',
    'http://localhost:8080/services.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('services')) || tabs[0];
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
          const cards = Array.from(document.querySelectorAll('.service-card'));
          const links = cards.map(c => {
            const a = c.querySelector('.service-card-link');
            const title = c.querySelector('.service-card-title').innerText.trim();
            return { title, href: a ? a.getAttribute('href') : null };
          });
          const pillars = ['pillar-1', 'pillar-2', 'pillar-3', 'pillar-4'].map(id => {
            const el = document.getElementById(id);
            return {
              id,
              found: !!el,
              cardCount: el ? el.querySelectorAll('.service-card').length : 0
            };
          });
          return {
            totalCards: cards.length,
            pillars,
            linksSample: links.slice(0, 5)
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Services page analysis:', JSON.stringify(evalRes.result.value, null, 2));

    // Capture screenshot of the top portion including first pillar
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\services_verified_p1.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved screenshot services_verified_p1.png');

    // Scroll to pillar 3 and take screenshot
    await send('Runtime.evaluate', {
      expression: `document.getElementById('pillar-3').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 500));
    const shotP3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\services_verified_p3.png', Buffer.from(shotP3.data, 'base64'));
    console.log('Saved screenshot services_verified_p3.png');

    ws.close();
    chrome.kill();
  };
}

testServicesPage();

