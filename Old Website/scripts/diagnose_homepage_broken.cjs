const { spawn } = require('child_process');
const fs = require('fs');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9615;
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

    const issues = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const docW = document.documentElement.clientWidth;
          
          // 1. Elements overflowing horizontal width
          const allEls = Array.from(document.querySelectorAll('*'));
          const overflowing = allEls.filter(el => {
            const r = el.getBoundingClientRect();
            return r.right > docW + 1 || r.left < -1;
          }).map(el => ({
            tag: el.tagName,
            class: el.className,
            id: el.id,
            rect: { left: el.getBoundingClientRect().left, right: el.getBoundingClientRect().right, width: el.getBoundingClientRect().width }
          }));

          // 2. Broken layouts in sections
          const sections = Array.from(document.querySelectorAll('section')).map(s => {
            const heading = s.querySelector('.eco-heading, h1, h2');
            const grids = Array.from(s.querySelectorAll('[class*="grid"], [class*="cards"], [class*="track"]'));
            return {
              id: s.id,
              class: s.className,
              heading: heading ? heading.textContent.trim().substring(0, 40) : null,
              grids: grids.map(g => ({
                class: g.className,
                display: window.getComputedStyle(g).display,
                width: g.clientWidth,
                children: g.children.length
              }))
            };
          });

          // 3. Check Growth Tech stack in #process
          const processSec = document.getElementById('process');
          const marqueeBox = processSec ? processSec.querySelector('.hero-stack-marquee-box') : null;
          const marqueeWrap = processSec ? processSec.querySelector('.hero-stack-marquee-wrap') : null;
          const stagesGrid = processSec ? processSec.querySelector('.eco-stages-grid') : null;

          return {
            docW,
            scrollWidth: document.documentElement.scrollWidth,
            overflowing: overflowing.slice(0, 15),
            sectionsCount: sections.length,
            sections,
            stackMatch: {
              stagesGridWidth: stagesGrid ? stagesGrid.clientWidth : null,
              marqueeWrapWidth: marqueeWrap ? marqueeWrap.clientWidth : null,
              marqueeBoxWidth: marqueeBox ? marqueeBox.clientWidth : null
            }
          };
        })()
      `,
      returnByValue: true
    });

    console.log(JSON.stringify(issues.result.value, null, 2));

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

