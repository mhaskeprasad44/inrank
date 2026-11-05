const { spawn } = require('child_process');

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9668;
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
    await send('CSS.enable');
    await send('DOM.enable');

    const doc = await send('DOM.getDocument');
    const nodeRes = await send('DOM.querySelector', {
      nodeId: doc.root.nodeId,
      selector: '.nav-item[data-dropdown="services"] .nav-drop'
    });

    // Add data-open to parent
    await send('Runtime.evaluate', {
      expression: `document.querySelector('.nav-item[data-dropdown="services"]').setAttribute('data-open', '');`
    });

    const matchedStyles = await send('CSS.getMatchedStylesForNode', { nodeId: nodeRes.nodeId });
    console.log('Matched rules on .nav-drop:');
    matchedStyles.matchedCSSRules.forEach(r => {
      const selectors = r.rule.selectorList.text;
      const cssProps = r.rule.style.cssProperties.filter(p => ['opacity', 'visibility', 'display', 'transform'].includes(p.name));
      if (cssProps.length > 0) {
        console.log(`Selector: ${selectors}`);
        cssProps.forEach(p => console.log(`  ${p.name}: ${p.value} (important: ${p.important})`));
      }
    });

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(console.error);

