const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9670;
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
  const targetTab = tabs.find(t => t.url.includes('seo-company-pune.html')) || tabs[0];
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

    const result = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const item = document.querySelector('.nav-item[data-dropdown="services"]');
          item.setAttribute('data-open', '');
          const el = item.querySelector('.drop-mega');
          
          const matching = [];
          for (const sheet of document.styleSheets) {
            try {
              for (const rule of sheet.cssRules) {
                if (rule.selectorText && el.matches(rule.selectorText)) {
                  matching.push({
                    sheet: sheet.href ? sheet.href.split('/').pop() : 'inline',
                    selector: rule.selectorText,
                    opacity: rule.style.opacity,
                    visibility: rule.style.visibility,
                    display: rule.style.display,
                    cssText: rule.cssText
                  });
                }
              }
            } catch(e) {}
          }
          return { matching, computedOpacity: window.getComputedStyle(el).opacity, computedVisibility: window.getComputedStyle(el).visibility };
        })()
      `,
      returnByValue: true
    });
    console.log(JSON.stringify(result.result.value, null, 2));

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

