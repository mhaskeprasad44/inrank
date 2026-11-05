const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

async function visualCheck() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9740;
  const tempDir = path.join(os.tmpdir(), `chrome_debug_${port}_${Date.now()}`);

  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tempDir}`,
    '--window-size=1440,1200',
    '--no-sandbox',
    'http://localhost:8080/blog.html'
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
    await new Promise(r => setTimeout(r, 1000));

    // 1. Screenshot Blog Hub with new cards
    await send('Runtime.evaluate', {
      expression: `(() => {
        const grid = document.getElementById('blog-grid');
        if (grid) grid.scrollIntoView({ block: 'start' });
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    const shot1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/verified_new_blog_cards.png', Buffer.from(shot1.data, 'base64'));
    console.log('Blog hub screenshot saved!');

    // 2. Navigate to Autonomous AI Agents blog
    await send('Page.navigate', { url: 'http://localhost:8080/blog/autonomous-ai-search-agents-deep-research-optimization.html' });
    await new Promise(r => setTimeout(r, 1200));

    const shot2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/verified_blog_autonomous_agents.png', Buffer.from(shot2.data, 'base64'));
    console.log('Autonomous agents blog screenshot saved!');

    // 3. Navigate to Contact page to verify "Baner Office"
    await send('Page.navigate', { url: 'http://localhost:8080/contact.html' });
    await new Promise(r => setTimeout(r, 1200));
    await send('Runtime.evaluate', {
      expression: `(() => {
        const map = document.querySelector('.contact-map-card');
        if (map) map.scrollIntoView({ block: 'center' });
      })()`
    });
    await new Promise(r => setTimeout(r, 800));

    const shot3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/verified_baner_office_contact.png', Buffer.from(shot3.data, 'base64'));
    console.log('Baner office contact screenshot saved!');

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

visualCheck().catch(err => {
  console.error(err);
  process.exit(1);
});
