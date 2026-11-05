const { spawn } = require('child_process');

async function testPage(url, titleFilter) {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9711;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1200',
    '--no-sandbox',
    url
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const targetTab = tabs.find(t => t.url.includes(titleFilter)) || tabs[0];
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

      const filterTargets = ['all', 'healthcare', 'manufacturing', 'ecommerce', 'finance', 'education'];
      const results = {};

      for (const target of filterTargets) {
        const res = await send('Runtime.evaluate', {
          expression: `
            (() => {
              const btn = document.querySelector('.filter-btn[data-target="${target}"]');
              if (btn) btn.click();
              const cards = Array.from(document.querySelectorAll('.work-card'));
              const visible = cards.filter(c => window.getComputedStyle(c).display !== 'none');
              return {
                target: '${target}',
                visibleCount: visible.length,
                visibleTitles: visible.map(c => c.querySelector('.work-card-title').innerText.trim())
              };
            })()
          `,
          returnByValue: true
        });
        results[target] = res.result.value;
      }

      ws.close();
      chrome.kill();
      resolve(results);
    };
  });
}

async function run() {
  console.log('Testing our-work.html filtering:');
  const workRes = await testPage('http://localhost:8080/our-work.html', 'our-work');
  console.log(JSON.stringify(workRes, null, 2));

  console.log('\nTesting case-studies.html filtering:');
  const caseRes = await testPage('http://localhost:8080/case-studies.html', 'case-studies');
  console.log(JSON.stringify(caseRes, null, 2));
}

run();
