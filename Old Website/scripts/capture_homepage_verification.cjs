const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' });

  // 1. Hero top screenshot (initial full width white glass header)
  await page.screenshot({
    path: path.join(__dirname, '..', 'brain', '0ddbe105-ce59-4fdf-afa3-c065212d3374', 'verified_homepage_hero_preserved.png')
  });
  console.log("Captured hero preserved screenshot");

  // 2. Services section
  await page.evaluate(() => {
    document.getElementById('services').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(__dirname, '..', 'brain', '0ddbe105-ce59-4fdf-afa3-c065212d3374', 'verified_homepage_services.png')
  });
  console.log("Captured services screenshot");

  // 3. Philosophy & Process sections
  await page.evaluate(() => {
    document.getElementById('philosophy').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(__dirname, '..', 'brain', '0ddbe105-ce59-4fdf-afa3-c065212d3374', 'verified_homepage_philosophy.png')
  });
  console.log("Captured philosophy screenshot");

  // 4. Process & Tech stack
  await page.evaluate(() => {
    document.getElementById('process').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(__dirname, '..', 'brain', '0ddbe105-ce59-4fdf-afa3-c065212d3374', 'verified_homepage_process_stack.png')
  });
  console.log("Captured process screenshot");

  // 5. Niches & Proof
  await page.evaluate(() => {
    document.getElementById('niches').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(__dirname, '..', 'brain', '0ddbe105-ce59-4fdf-afa3-c065212d3374', 'verified_homepage_niches.png')
  });
  console.log("Captured niches screenshot");

  // 6. Proof
  await page.evaluate(() => {
    document.getElementById('proof').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(__dirname, '..', 'brain', '0ddbe105-ce59-4fdf-afa3-c065212d3374', 'verified_homepage_proof.png')
  });
  console.log("Captured proof screenshot");

  // 7. Our Work & Comparison
  await page.evaluate(() => {
    document.getElementById('our-work').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(__dirname, '..', 'brain', '0ddbe105-ce59-4fdf-afa3-c065212d3374', 'verified_homepage_work.png')
  });
  console.log("Captured work screenshot");

  // 8. Comparison
  await page.evaluate(() => {
    document.getElementById('comparison').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(__dirname, '..', 'brain', '0ddbe105-ce59-4fdf-afa3-c065212d3374', 'verified_homepage_comparison.png')
  });
  console.log("Captured comparison screenshot");

  // 9. About / Founder & Testimonials
  await page.evaluate(() => {
    document.getElementById('about').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(__dirname, '..', 'brain', '0ddbe105-ce59-4fdf-afa3-c065212d3374', 'verified_homepage_about.png')
  });
  console.log("Captured about screenshot");

  // 10. Pricing & FAQ
  await page.evaluate(() => {
    document.getElementById('pricing').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(__dirname, '..', 'brain', '0ddbe105-ce59-4fdf-afa3-c065212d3374', 'verified_homepage_pricing.png')
  });
  console.log("Captured pricing screenshot");

  // 11. FAQ & Closing
  await page.evaluate(() => {
    document.getElementById('faq').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(__dirname, '..', 'brain', '0ddbe105-ce59-4fdf-afa3-c065212d3374', 'verified_homepage_faq_closing.png')
  });
  console.log("Captured FAQ & Closing screenshot");

  await browser.close();
})();
