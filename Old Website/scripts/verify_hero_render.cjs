const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:8080/ ...');
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0', timeout: 30000 });

  const artifactDir = path.resolve('C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374');

  // 1. Top of page screenshot (y = 0)
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  const topPath = path.join(artifactDir, 'verified_hp2_hero_top.png');
  await page.screenshot({ path: topPath });
  console.log('Saved top screenshot to', topPath);

  // 2. Scrolled state screenshot (y = 250)
  await page.evaluate(() => window.scrollTo(0, 250));
  await new Promise(r => setTimeout(r, 600));
  const scrolledPath = path.join(artifactDir, 'verified_hp2_hero_scrolled.png');
  await page.screenshot({ path: scrolledPath });
  console.log('Saved scrolled screenshot to', scrolledPath);

  // 3. Inspect geometry of hero and nav
  const info = await page.evaluate(() => {
    const nav = document.getElementById('nav');
    const navBar = document.querySelector('.nav-bar');
    const hero = document.querySelector('.hero-hp2-section');
    const stickers = document.querySelectorAll('.platform-sticker');
    const marqueeTrack = document.querySelector('.hero-stack-track');
    const title = document.querySelector('.hero-hp2-title');

    return {
      navClasses: nav ? nav.className : null,
      navBarWidth: navBar ? navBar.offsetWidth : null,
      heroExists: !!hero,
      stickersCount: stickers.length,
      marqueeTrackWidth: marqueeTrack ? marqueeTrack.scrollWidth : null,
      titleText: title ? title.innerText.replace(/\n/g, ' ') : null
    };
  });
  console.log('DOM & Geometry Info:', JSON.stringify(info, null, 2));

  await browser.close();
})();

