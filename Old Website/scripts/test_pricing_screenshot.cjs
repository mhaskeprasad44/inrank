const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  await page.goto('http://localhost:8080/pricing.html', { waitUntil: 'networkidle2' });

  // Scroll to pricing
  await page.evaluate(() => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({
    path: 'C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/pricing_fixed_3cols.png'
  });

  // Also test tab switching
  await page.evaluate(() => {
    const btns = document.querySelectorAll('.pricing-tab-btn');
    if (btns.length > 1) btns[1].click(); // click SEO Retainers
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({
    path: 'C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/pricing_tab_seo_3cols.png'
  });

  // Check homepage pricing section to ensure no regression
  await page.goto('http://localhost:8080/#pricing', { waitUntil: 'networkidle2' });
  await page.evaluate(() => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: 'C:/Users/PrasadMhaske/.gemini/antigravity/brain/0ddbe105-ce59-4fdf-afa3-c065212d3374/homepage_pricing_intact.png'
  });

  await browser.close();
  console.log('Screenshots saved successfully!');
})();

