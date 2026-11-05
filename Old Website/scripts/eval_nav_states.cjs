const { spawn } = require('child_process');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9625',
  '--disable-gpu',
  '--window-size=1400,900',
  'http://localhost:8080/contact.html'
]);

setTimeout(async () => {
  try {
    const list = await fetch('http://127.0.0.1:9625/json').then(r => r.json());
    const page = list.find(t => t.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);

    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));

      ws.onmessage = async (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === 1) {
          // Check top nav
          send('Runtime.evaluate', {
            expression: `(() => {
              const nav = document.getElementById('nav');
              const bar = document.querySelector('.nav-bar');
              return {
                atTop: {
                  navClass: nav.className,
                  navHeight: window.getComputedStyle(nav).height,
                  navBg: window.getComputedStyle(nav).backgroundColor,
                  barWidth: window.getComputedStyle(bar).width,
                  barHeight: window.getComputedStyle(bar).height,
                  barBg: window.getComputedStyle(bar).backgroundColor,
                  barBorderRadius: window.getComputedStyle(bar).borderRadius
                }
              };
            })()`,
            returnByValue: true
          });
        } else if (msg.id === 2) {
          console.log('Top Nav State:', msg.result.result.value);

          send('Runtime.evaluate', { expression: 'window.scrollTo(0, 300);' });
        } else if (msg.id === 3) {
          setTimeout(() => {
            send('Runtime.evaluate', {
              expression: `(() => {
                const nav = document.getElementById('nav');
                const bar = document.querySelector('.nav-bar');
                return {
                  atScrolled: {
                    navClass: nav.className,
                    navHeight: window.getComputedStyle(nav).height,
                    navBg: window.getComputedStyle(nav).backgroundColor,
                    barWidth: window.getComputedStyle(bar).width,
                    barHeight: window.getComputedStyle(bar).height,
                    barBg: window.getComputedStyle(bar).backgroundColor,
                    barBorderRadius: window.getComputedStyle(bar).borderRadius,
                    barPadding: window.getComputedStyle(bar).padding
                  }
                };
              })()`,
              returnByValue: true
            });
          }, 400);
        } else if (msg.id === 4) {
          console.log('Scrolled Nav State:', msg.result.result.value);
          chrome.kill();
          process.exit(0);
        }
      };

      send('Page.enable');
    };
  } catch(err) {
    console.error(err);
    chrome.kill();
    process.exit(1);
  }
}, 2000);

