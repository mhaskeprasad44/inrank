const { spawn } = require('child_process');
const fs = require('fs');

async function scrapePage(url, outputPathHtml, outputPathImg) {
  return new Promise((resolve, reject) => {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
      '--headless=new',
      '--remote-debugging-port=9585',
      '--disable-gpu',
      '--window-size=1440,1200',
      url
    ]);

    setTimeout(async () => {
      try {
        const list = await fetch('http://127.0.0.1:9585/json').then(r => r.json());
        const page = list.find(t => t.type === 'page');
        const ws = new WebSocket(page.webSocketDebuggerUrl);

        ws.onopen = () => {
          let id = 1;
          const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

          ws.onmessage = async (e) => {
            const msg = JSON.parse(e.data);
            if (msg.id === 1) {
              setTimeout(() => {
                send('Runtime.evaluate', {
                  expression: `document.documentElement.outerHTML`
                });
              }, 2500);
            } else if (msg.id === 2) {
              const html = msg.result.result.value;
              fs.writeFileSync(outputPathHtml, html, 'utf8');
              console.log(`Saved HTML to ${outputPathHtml}`);

              send('Page.captureScreenshot', { format: 'png' });
            } else if (msg.id === 3) {
              fs.writeFileSync(outputPathImg, Buffer.from(msg.result.data, 'base64'));
              console.log(`Saved Screenshot to ${outputPathImg}`);
              chrome.kill();
              resolve();
            }
          };

          send('Page.enable');
        };
      } catch (err) {
        console.error('Error in scrapePage:', err);
        chrome.kill();
        reject(err);
      }
    }, 2000);
  });
}

(async () => {
  console.log('Scraping greytothegreen.com blog post...');
  try {
    await scrapePage(
      'https://greytothegreen.com/blogs/chemical-free-living/natural-ways-to-freshen-bathrooms-and-reduce-unpleasant-odours',
      'scripts/greytothegreen_blog_post.html',
      'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\ref_gttg_blog_post.png'
    );
  } catch (e) {
    console.error('Failed to scrape:', e.message);
  }
})();

