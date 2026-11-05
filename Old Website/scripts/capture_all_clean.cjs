const { spawn } = require('child_process');
const fs = require('fs');

async function captureAllClean() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9396;
  const chrome = spawn(chromePath, [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=1440,1000',
    '--no-sandbox',
    'http://localhost:8080/'
  ]);

  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      const tabs = await res.json();
      if (tabs.length) break;
    } catch (e) {}
  }

  const res = await fetch(`http://127.0.0.1:${port}/json`);
  const tabs = await res.json();
  const targetTab = tabs.find(t => t.url.includes('localhost:8080')) || tabs[0];
  const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

  ws.onopen = async () => {
    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const timer = setTimeout(() => reject(new Error('Timeout ' + method)), 6000);
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            clearTimeout(timer);
            ws.removeEventListener('message', handler);
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    async function evaluate(expression) {
      const res = await send('Runtime.evaluate', { expression, returnByValue: true });
      if (res.exceptionDetails) {
        console.error('Eval error:', res.exceptionDetails);
      }
      return res.result?.value;
    }

    async function screenshot(filename) {
      const res = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`scripts/${filename}`, Buffer.from(res.data, 'base64'));
      console.log('Saved:', filename);
    }

    try {
      await send('Page.enable');
      await send('DOM.enable');
      await new Promise(r => setTimeout(r, 1000));

      const sections = [
        { name: 'clean_1_hero', selector: '#top' },
        { name: 'clean_2_manifesto', selector: '#philosophy' },
        { name: 'clean_3_process', selector: '#process' },
        { name: 'clean_4_capabilities', selector: '#services' },
        { name: 'clean_5_proof', selector: '#proof' },
        { name: 'clean_6_work', selector: '#our-work' },
        { name: 'clean_7_comparison', selector: '#comparison' },
        { name: 'clean_8_about_people', selector: '#about' },
        { name: 'clean_9_testimonials', selector: '#testimonials' },
        { name: 'clean_10_pricing', selector: '#pricing' },
        { name: 'clean_11_closing', selector: '#contact' },
        { name: 'clean_12_footer', selector: '.site-footer' }
      ];

      for (const sec of sections) {
        const found = await evaluate(`!!document.querySelector('${sec.selector}')`);
        if (!found) {
          console.log('Selector not found:', sec.selector);
          continue;
        }
        await evaluate(`(() => {
          const el = document.querySelector('${sec.selector}');
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
          window.scrollBy(0, -70);
        })()`);
        await new Promise(r => setTimeout(r, 400));
        await screenshot(`${sec.name}.png`);
      }

    } catch (err) {
      console.error(err);
    } finally {
      ws.close();
      chrome.kill();
      process.exit(0);
    }
  };
}

captureAllClean();
