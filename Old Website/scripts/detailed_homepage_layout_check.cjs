const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9650;
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
  const targetTab = tabs.find(t => t.url.includes('localhost:8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    // Run a comprehensive layout inspection on every section
    const report = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const sections = Array.from(document.querySelectorAll('section'));
          return sections.map(s => {
            const id = s.id || s.className;
            const shell = s.querySelector('.eco-shell, .hero-hp2-container');
            const headings = Array.from(s.querySelectorAll('h1, h2, h3')).map(h => ({
              tag: h.tagName,
              text: h.textContent.trim().substring(0, 30),
              fontSize: window.getComputedStyle(h).fontSize,
              color: window.getComputedStyle(h).color
            }));

            // Check if any child elements have width > shell width or overflow
            const shellW = shell ? shell.clientWidth : s.clientWidth;
            const overflowChildren = Array.from(s.querySelectorAll('*')).filter(el => {
              return el.clientWidth > shellW + 5 && !el.className.includes('track') && !el.className.includes('dot-grid');
            }).map(el => ({ tag: el.tagName, class: el.className, w: el.clientWidth }));

            // Check alignment of grid children
            const grids = Array.from(s.querySelectorAll('[class*="grid"], .eco-stages-grid, .eco-work-grid, .eco-niches-grid, .eco-testi-grid, .eco-pricing-grid, .closing-grid')).map(g => {
              const cs = window.getComputedStyle(g);
              const children = Array.from(g.children);
              return {
                gridClass: g.className,
                display: cs.display,
                cols: cs.gridTemplateColumns,
                gap: cs.gap,
                childCount: children.length,
                childWidths: children.map(c => c.clientWidth)
              };
            });

            return {
              id,
              shellWidth: shellW,
              headings,
              overflowChildren,
              grids
            };
          });
        })()
      `,
      returnByValue: true
    });

    console.log(JSON.stringify(report.result.value, null, 2));

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

