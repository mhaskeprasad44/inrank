const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9570;
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
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });

    await new Promise(r => setTimeout(r, 1200));

    // 1. Homepage Top: Header unscrolled
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0);' });
    await new Promise(r => setTimeout(r, 800));

    const topHeaderInfo = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const nav = document.getElementById('nav');
          const navBar = nav.querySelector('.nav-bar');
          const darkLogo = nav.querySelector('.logo-icon--dark');
          const whiteLogo = nav.querySelector('.logo-icon--white');
          const link = nav.querySelector('.nav-link');
          const cta = nav.querySelector('.nav-cta');
          const navBarCs = window.getComputedStyle(navBar);
          const darkLogoCs = window.getComputedStyle(darkLogo);
          const whiteLogoCs = window.getComputedStyle(whiteLogo);
          const linkCs = window.getComputedStyle(link);
          const ctaCs = window.getComputedStyle(cta);

          return {
            navBarBg: navBarCs.backgroundColor,
            navBarWidth: navBarCs.width,
            darkLogoDisplay: darkLogoCs.display,
            whiteLogoDisplay: whiteLogoCs.display,
            linkColor: linkCs.color,
            ctaBg: ctaCs.backgroundColor,
            ctaColor: ctaCs.color
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Top Header Info:', JSON.stringify(topHeaderInfo.result.value, null, 2));

    const topShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_top_fixed_header.png'), Buffer.from(topShot.data, 'base64'));
    console.log('Saved verified_homepage_top_fixed_header.png');

    // 2. Scrolled Header
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 400);' });
    await new Promise(r => setTimeout(r, 800));

    const scrolledHeaderInfo = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const nav = document.getElementById('nav');
          const navBar = nav.querySelector('.nav-bar');
          const darkLogo = nav.querySelector('.logo-icon--dark');
          const whiteLogo = nav.querySelector('.logo-icon--white');
          const link = nav.querySelector('.nav-link');
          const cta = nav.querySelector('.nav-cta');
          const navBarCs = window.getComputedStyle(navBar);
          const darkLogoCs = window.getComputedStyle(darkLogo);
          const whiteLogoCs = window.getComputedStyle(whiteLogo);
          const linkCs = window.getComputedStyle(link);
          const ctaCs = window.getComputedStyle(cta);

          return {
            isScrolledClass: nav.classList.contains('is-scrolled'),
            navBarWidth: navBarCs.width,
            navBarBorderRadius: navBarCs.borderRadius,
            darkLogoDisplay: darkLogoCs.display,
            whiteLogoDisplay: whiteLogoCs.display,
            linkColor: linkCs.color,
            ctaBg: ctaCs.backgroundColor,
            ctaColor: ctaCs.color
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Scrolled Header Info:', JSON.stringify(scrolledHeaderInfo.result.value, null, 2));

    const scrolledShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_homepage_scrolled_capsule_header.png'), Buffer.from(scrolledShot.data, 'base64'));
    console.log('Saved verified_homepage_scrolled_capsule_header.png');

    // 3. Growth Tech Stack inside Proven Methodology
    await send('Runtime.evaluate', {
      expression: `
        (() => {
          const proc = document.getElementById('process');
          if (proc) {
            const stack = proc.querySelector('.hero-stack-marquee-wrap');
            if (stack) stack.scrollIntoView({ block: 'center' });
            else proc.scrollIntoView({ block: 'center' });
          }
        })()
      `
    });
    await new Promise(r => setTimeout(r, 1000));

    const stackInfo = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const proc = document.getElementById('process');
          const shell = proc.querySelector('.eco-shell');
          const stagesGrid = proc.querySelector('.eco-stages-grid');
          const wrap = proc.querySelector('.hero-stack-marquee-wrap');
          const box = proc.querySelector('.hero-stack-marquee-box');
          const label = proc.querySelector('.hero-stack-label');
          const pill = proc.querySelector('.hero-tool-pill');
          const pillSpan = pill ? pill.querySelector('span') : null;

          return {
            shellWidth: shell ? window.getComputedStyle(shell).width : null,
            stagesGridWidth: stagesGrid ? window.getComputedStyle(stagesGrid).width : null,
            wrapWidth: wrap ? window.getComputedStyle(wrap).width : null,
            boxWidth: box ? window.getComputedStyle(box).width : null,
            labelFont: label ? window.getComputedStyle(label).fontFamily : null,
            labelColor: label ? window.getComputedStyle(label).color : null,
            pillFont: pill ? window.getComputedStyle(pill).fontFamily : null,
            pillSpanFont: pillSpan ? window.getComputedStyle(pillSpan).fontFamily : null
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Growth Tech Stack Info:', JSON.stringify(stackInfo.result.value, null, 2));

    const stackShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, 'verified_growth_tech_stack_full_content_width.png'), Buffer.from(stackShot.data, 'base64'));
    console.log('Saved verified_growth_tech_stack_full_content_width.png');

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

