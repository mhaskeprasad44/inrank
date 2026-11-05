const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9600;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,900',
    '--no-sandbox',
    'http://localhost:8080/services/seo-company-pune.html'
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

    const details = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const sections = Array.from(document.querySelectorAll('section'));
          return sections.map((s, idx) => {
            const cs = window.getComputedStyle(s);
            const shell = s.querySelector('.eco-shell');
            const shellCs = shell ? window.getComputedStyle(shell) : null;
            const heading = s.querySelector('.eco-heading, .eco-title, h1, h2');
            const headingCs = heading ? window.getComputedStyle(heading) : null;
            return {
              idx,
              class: s.className,
              id: s.id,
              paddingTop: cs.paddingTop,
              paddingBottom: cs.paddingBottom,
              shellWidth: shell ? shell.clientWidth : null,
              shellMargin: shellCs ? shellCs.margin : null,
              headingFont: headingCs ? headingCs.fontFamily : null,
              headingColor: headingCs ? headingCs.color : null,
              children: Array.from(s.children).map(c => ({
                tag: c.tagName,
                class: c.className,
                w: c.clientWidth,
                h: c.clientHeight
              }))
            };
          });
        })()
      `,
      returnByValue: true
    });

    console.log(JSON.stringify(details.result.value, null, 2));

    // Also inspect the equation, thread-map, eco-outcomes, principles-grid
    const components = await send('Runtime.evaluate', {
      expression: `
        (() => {
          function inspect(sel) {
            const el = document.querySelector(sel);
            if (!el) return { found: false };
            const cs = window.getComputedStyle(el);
            return {
              found: true,
              display: cs.display,
              gridTemplateColumns: cs.gridTemplateColumns,
              flexDirection: cs.flexDirection,
              gap: cs.gap,
              width: el.clientWidth,
              childrenCount: el.children.length,
              childrenWidths: Array.from(el.children).map(c => c.clientWidth)
            };
          }
          return {
            ecoHeroGrid: inspect('.eco-hero-grid'),
            ecoOutcomes: inspect('.eco-outcomes'),
            ecoWorkflows: inspect('.eco-workflows'),
            equation: inspect('.equation'),
            threadMap: inspect('.thread-map'),
            principlesGrid: inspect('.principles-grid'),
            answerGrid: inspect('.answer-grid'),
            closingGrid: inspect('.closing-grid')
          };
        })()
      `,
      returnByValue: true
    });

    console.log('--- COMPONENTS INSPECTION ---');
    console.log(JSON.stringify(components.result.value, null, 2));

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

