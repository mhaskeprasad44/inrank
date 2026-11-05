const { spawn } = require('child_process');
const fs = require('fs');

async function inspect() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9723;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1200',
    '--no-sandbox',
    'http://localhost:8080/contact.html'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes('contact.html')) || tabs[0];
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
    await new Promise(r => setTimeout(r, 1000));

    const layout = await send('Runtime.evaluate', {
      expression: `(() => {
        const grid = document.querySelector('.contact-grid');
        const leftCol = grid ? grid.children[0] : null;
        const rightCol = grid ? grid.children[1] : null;
        const formCard = document.querySelector('.form-card');
        const section = document.querySelector('.contact-section');
        return {
          leftColHeight: leftCol ? leftCol.getBoundingClientRect().height : 0,
          rightColHeight: rightCol ? rightCol.getBoundingClientRect().height : 0,
          formCardHeight: formCard ? formCard.getBoundingClientRect().height : 0,
          sectionHeight: section ? section.getBoundingClientRect().height : 0
        };
      })()`,
      returnByValue: true
    });
    console.log('Layout metrics:', layout.result.value);

    // Scroll to contact form
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.contact-section').scrollIntoView();`
    });
    await new Promise(r => setTimeout(r, 500));

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/contact_current_layout.png', Buffer.from(shot.data, 'base64'));
    console.log('Screenshot captured!');

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

inspect().catch(err => {
  console.error(err);
  process.exit(1);
});

