const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Testing pricing.html...');
  await page.goto('http://localhost:8080/pricing.html', { waitUntil: 'networkidle0' });

  // 1. Screenshot Tab 1 on pricing.html
  const pricingSection = await page.$('#pricing');
  if (pricingSection) {
    await pricingSection.scrollIntoView();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: 'scripts/verify_pricing_tab1_web.png' });
    console.log('Saved scripts/verify_pricing_tab1_web.png');

    // Click Tab 2 (SEO Retainers)
    const tabSeoBtn = await page.$('button[data-tab="tab-seo"]');
    if (tabSeoBtn) {
      await tabSeoBtn.click();
      await new Promise(r => setTimeout(r, 400));
      await page.screenshot({ path: 'scripts/verify_pricing_tab2_seo.png' });
      console.log('Saved scripts/verify_pricing_tab2_seo.png');
    }

    // Click Tab 3 (Social Media & Reels)
    const tabSocialBtn = await page.$('button[data-tab="tab-social"]');
    if (tabSocialBtn) {
      await tabSocialBtn.click();
      await new Promise(r => setTimeout(r, 400));
      await page.screenshot({ path: 'scripts/verify_pricing_tab3_social.png' });
      console.log('Saved scripts/verify_pricing_tab3_social.png');
    }
  }

  // 2. Screenshot FAQs on pricing.html
  const faqSection = await page.$('#faq');
  if (faqSection) {
    await faqSection.scrollIntoView();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: 'scripts/verify_pricing_faqs.png' });
    console.log('Saved scripts/verify_pricing_faqs.png');
  }

  // 3. Homepage #pricing
  console.log('Testing index.html #pricing...');
  await page.goto('http://localhost:8080/index.html', { waitUntil: 'networkidle0' });
  const homePricing = await page.$('#pricing');
  if (homePricing) {
    await homePricing.scrollIntoView();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: 'scripts/verify_home_pricing_tab1.png' });
    console.log('Saved scripts/verify_home_pricing_tab1.png');

    const homeSeoBtn = await page.$('#pricing button[data-tab="tab-seo"]');
    if (homeSeoBtn) {
      await homeSeoBtn.click();
      await new Promise(r => setTimeout(r, 400));
      await page.screenshot({ path: 'scripts/verify_home_pricing_tab2.png' });
      console.log('Saved scripts/verify_home_pricing_tab2.png');
    }
  }

  // 4. services.html 4-pillars grid
  console.log('Testing services.html 4-pillars grid...');
  await page.goto('http://localhost:8080/services.html', { waitUntil: 'networkidle0' });
  const pillarsGrid = await page.$('.pillars-grid-4');
  if (pillarsGrid) {
    await pillarsGrid.scrollIntoView();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: 'scripts/verify_services_pillars_grid.png' });
    console.log('Saved scripts/verify_services_pillars_grid.png');
  }

  await browser.close();
  console.log('All verification captures completed successfully!');
})();

