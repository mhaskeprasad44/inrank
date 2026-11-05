const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9645;
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

    async function evalCode(code) {
      const res = await send('Runtime.evaluate', { expression: code, returnByValue: true });
      return res.result ? res.result.value : null;
    }

    async function navigateTo(url) {
      await send('Page.navigate', { url });
      await new Promise(r => setTimeout(r, 1200));
    }

    async function screenshot(name) {
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(artifactDir, name), Buffer.from(shot.data, 'base64'));
      console.log(`Saved screenshot: ${name}`);
    }

    const report = {};

    // ── 1. CONTACT PAGE ──
    console.log('Testing Contact Page...');
    await navigateTo('http://localhost:8080/contact.html');
    
    report.contact_unscrolled = await evalCode(`
      (() => {
        const bar = document.querySelector('.nav-bar');
        const s = window.getComputedStyle(bar);
        const name = document.querySelector('.nav-logo-name');
        const sName = window.getComputedStyle(name);
        const rect = bar.getBoundingClientRect();
        return {
          width: s.width,
          maxWidth: s.maxWidth,
          boundingWidth: rect.width,
          windowWidth: window.innerWidth,
          background: s.backgroundColor,
          borderBottom: s.borderBottom,
          nameColor: sName.color,
          isFullWidth: Math.abs(rect.width - window.innerWidth) < 2
        };
      })()
    `);
    await screenshot('verify_contact_unscrolled.png');

    await evalCode('window.scrollTo(0, 300); updateNav();');
    await new Promise(r => setTimeout(r, 300));
    report.contact_scrolled = await evalCode(`
      (() => {
        const bar = document.querySelector('.nav-bar');
        const s = window.getComputedStyle(bar);
        const rect = bar.getBoundingClientRect();
        return {
          width: s.width,
          maxWidth: s.maxWidth,
          boundingWidth: rect.width,
          height: s.height,
          borderRadius: s.borderRadius,
          background: s.backgroundImage
        };
      })()
    `);
    await screenshot('verify_contact_scrolled.png');

    // ── 2. HOMEPAGE ──
    console.log('Testing Homepage...');
    await navigateTo('http://localhost:8080/');
    
    report.hp_unscrolled = await evalCode(`
      (() => {
        const bar = document.querySelector('.nav-bar');
        const s = window.getComputedStyle(bar);
        const name = document.querySelector('.nav-logo-name');
        const sName = window.getComputedStyle(name);
        const darkLogo = document.querySelector('.nav-logo img.logo-icon--dark');
        const whiteLogo = document.querySelector('.nav-logo img.logo-icon--white');
        const sDark = darkLogo ? window.getComputedStyle(darkLogo).display : null;
        const sWhite = whiteLogo ? window.getComputedStyle(whiteLogo).display : null;
        const rect = bar.getBoundingClientRect();
        return {
          width: s.width,
          maxWidth: s.maxWidth,
          boundingWidth: rect.width,
          windowWidth: window.innerWidth,
          background: s.backgroundColor,
          nameColor: sName.color,
          darkLogoDisplay: sDark,
          whiteLogoDisplay: sWhite,
          isFullWidth: Math.abs(rect.width - window.innerWidth) < 2
        };
      })()
    `);
    await screenshot('verify_hp_unscrolled.png');

    await evalCode('window.scrollTo(0, 300); updateNav();');
    await new Promise(r => setTimeout(r, 300));
    report.hp_scrolled = await evalCode(`
      (() => {
        const bar = document.querySelector('.nav-bar');
        const s = window.getComputedStyle(bar);
        const darkLogo = document.querySelector('.nav-logo img.logo-icon--dark');
        const whiteLogo = document.querySelector('.nav-logo img.logo-icon--white');
        const sDark = darkLogo ? window.getComputedStyle(darkLogo).display : null;
        const sWhite = whiteLogo ? window.getComputedStyle(whiteLogo).display : null;
        const rect = bar.getBoundingClientRect();
        return {
          width: s.width,
          maxWidth: s.maxWidth,
          boundingWidth: rect.width,
          height: s.height,
          borderRadius: s.borderRadius,
          darkLogoDisplay: sDark,
          whiteLogoDisplay: sWhite
        };
      })()
    `);
    await screenshot('verify_hp_scrolled.png');

    // Pricing grid check
    report.hp_pricing = await evalCode(`
      (() => {
        const panel = document.getElementById('tab-web');
        const grid = panel ? panel.querySelector('.eco-pricing-grid') : null;
        const cards = grid ? Array.from(grid.querySelectorAll('.eco-pricing-card')) : [];
        const sPanel = panel ? window.getComputedStyle(panel) : null;
        const sGrid = grid ? window.getComputedStyle(grid) : null;
        return {
          panelDisplay: sPanel ? sPanel.display : null,
          panelWidth: panel ? panel.getBoundingClientRect().width : null,
          gridColumns: sGrid ? sGrid.gridTemplateColumns : null,
          gridWidth: grid ? grid.getBoundingClientRect().width : null,
          cardCount: cards.length,
          cardWidths: cards.map(c => Math.round(c.getBoundingClientRect().width))
        };
      })()
    `);
    await evalCode('document.getElementById("pricing").scrollIntoView();');
    await new Promise(r => setTimeout(r, 400));
    await screenshot('verify_hp_pricing.png');

    // ── 3. SERVICE PAGE ──
    console.log('Testing Service Page (SEO Company Pune)...');
    await navigateTo('http://localhost:8080/services/seo-company-pune.html');

    report.service_page = await evalCode(`
      (() => {
        // 1. friction-split
        const friction = document.querySelector('.friction-split');
        const sFriction = friction ? window.getComputedStyle(friction) : null;

        // 2. thread-map
        const threadNodes = Array.from(document.querySelectorAll('.thread-node'));
        const sNode0 = threadNodes[0] ? window.getComputedStyle(threadNodes[0]) : null;

        // 3. principles-grid
        const principlesGrid = document.querySelector('.principles-grid');
        const sPrinciples = principlesGrid ? window.getComputedStyle(principlesGrid) : null;
        const principleCards = Array.from(document.querySelectorAll('.principle-card'));
        const sCard0 = principleCards[0] ? window.getComputedStyle(principleCards[0]) : null;

        // 4. closing-grid
        const closingGrid = document.querySelector('.closing-grid');
        const sClosing = closingGrid ? window.getComputedStyle(closingGrid) : null;

        return {
          friction: {
            display: sFriction ? sFriction.display : null,
            gridTemplateColumns: sFriction ? sFriction.gridTemplateColumns : null,
            gap: sFriction ? sFriction.gap : null
          },
          threadMap: {
            nodeCount: threadNodes.length,
            nodeBorder: sNode0 ? sNode0.border : null,
            nodeBg: sNode0 ? sNode0.backgroundColor : null,
            nodeMinHeight: sNode0 ? sNode0.minHeight : null
          },
          principles: {
            gridColumns: sPrinciples ? sPrinciples.gridTemplateColumns : null,
            cardCount: principleCards.length,
            cardWidths: principleCards.map(c => Math.round(c.getBoundingClientRect().width)),
            cardBorder: sCard0 ? sCard0.border : null,
            cardBg: sCard0 ? sCard0.backgroundColor : null
          },
          closing: {
            display: sClosing ? sClosing.display : null,
            gridColumns: sClosing ? sClosing.gridTemplateColumns : null,
            gap: sClosing ? sClosing.gap : null
          }
        };
      })()
    `);

    // Section screenshots on service page
    await evalCode('document.querySelector(".friction-split").scrollIntoView();');
    await new Promise(r => setTimeout(r, 400));
    await screenshot('verify_service_friction_split.png');

    await evalCode('document.querySelector(".thread-map").scrollIntoView();');
    await new Promise(r => setTimeout(r, 400));
    await screenshot('verify_service_thread_map.png');

    await evalCode('document.querySelector(".principles-grid").scrollIntoView();');
    await new Promise(r => setTimeout(r, 400));
    await screenshot('verify_service_principles_grid.png');

    await evalCode('document.querySelector(".closing-grid").scrollIntoView();');
    await new Promise(r => setTimeout(r, 400));
    await screenshot('verify_service_closing_grid.png');

    console.log('=== VERIFICATION REPORT ===');
    console.log(JSON.stringify(report, null, 2));

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

