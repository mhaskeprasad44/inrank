const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const urls = [
  // Core (13)
  { loc: 'https://www.inranktech.com/', changefreq: 'daily', priority: '1.0', file: 'index.html' },
  { loc: 'https://www.inranktech.com/services.html', changefreq: 'weekly', priority: '0.95', file: 'services.html' },
  { loc: 'https://www.inranktech.com/pricing.html', changefreq: 'weekly', priority: '0.95', file: 'pricing.html' },
  { loc: 'https://www.inranktech.com/contact.html', changefreq: 'weekly', priority: '0.95', file: 'contact.html' },
  { loc: 'https://www.inranktech.com/website-design-company-in-pune.html', changefreq: 'weekly', priority: '0.95', file: 'website-design-company-in-pune.html' },
  { loc: 'https://www.inranktech.com/digital-marketing-agency-in-pune.html', changefreq: 'weekly', priority: '0.95', file: 'digital-marketing-agency-in-pune.html' },
  { loc: 'https://www.inranktech.com/our-work.html', changefreq: 'weekly', priority: '0.95', file: 'our-work.html' },
  { loc: 'https://www.inranktech.com/case-studies.html', changefreq: 'weekly', priority: '0.95', file: 'case-studies.html' },
  { loc: 'https://www.inranktech.com/portfolio.html', changefreq: 'weekly', priority: '0.90', file: 'portfolio.html' },
  { loc: 'https://www.inranktech.com/google-business-profile-top3.html', changefreq: 'weekly', priority: '0.85', file: 'google-business-profile-top3.html' },
  { loc: 'https://www.inranktech.com/justdial-profile.html', changefreq: 'weekly', priority: '0.85', file: 'justdial-profile.html' },
  { loc: 'https://www.inranktech.com/homepage-2.html', changefreq: 'weekly', priority: '0.80', file: 'homepage-2.html' },
  { loc: 'https://www.inranktech.com/homepage-3.html', changefreq: 'weekly', priority: '0.80', file: 'homepage-3.html' },

  // 27 Service Pages (Directory Index Style)
  { loc: 'https://www.inranktech.com/services/ai-ranking-citations/', changefreq: 'weekly', priority: '0.90', file: 'public/services/ai-ranking-citations/index.html' },
  { loc: 'https://www.inranktech.com/services/ai-seo-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/ai-seo-services/index.html' },
  { loc: 'https://www.inranktech.com/services/brand-naming-agency/', changefreq: 'weekly', priority: '0.90', file: 'public/services/brand-naming-agency/index.html' },
  { loc: 'https://www.inranktech.com/services/brochure-design-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/brochure-design-services/index.html' },
  { loc: 'https://www.inranktech.com/services/content-marketing-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/content-marketing-services/index.html' },
  { loc: 'https://www.inranktech.com/services/conversion-rate-optimization-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/conversion-rate-optimization-services/index.html' },
  { loc: 'https://www.inranktech.com/services/corporate-logo-design/', changefreq: 'weekly', priority: '0.90', file: 'public/services/corporate-logo-design/index.html' },
  { loc: 'https://www.inranktech.com/services/custom-website-development/', changefreq: 'weekly', priority: '0.90', file: 'public/services/custom-website-development/index.html' },
  { loc: 'https://www.inranktech.com/services/ecommerce-website-development-company/', changefreq: 'weekly', priority: '0.90', file: 'public/services/ecommerce-website-development-company/index.html' },
  { loc: 'https://www.inranktech.com/services/geo-seo-agency/', changefreq: 'weekly', priority: '0.90', file: 'public/services/geo-seo-agency/index.html' },
  { loc: 'https://www.inranktech.com/services/google-ads-agency/', changefreq: 'weekly', priority: '0.90', file: 'public/services/google-ads-agency/index.html' },
  { loc: 'https://www.inranktech.com/services/google-my-business-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/google-my-business-services/index.html' },
  { loc: 'https://www.inranktech.com/services/influencer-marketing-agency/', changefreq: 'weekly', priority: '0.90', file: 'public/services/influencer-marketing-agency/index.html' },
  { loc: 'https://www.inranktech.com/services/landing-page-design-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/landing-page-design-services/index.html' },
  { loc: 'https://www.inranktech.com/services/letterhead-stationery-design/', changefreq: 'weekly', priority: '0.90', file: 'public/services/letterhead-stationery-design/index.html' },
  { loc: 'https://www.inranktech.com/services/link-building-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/link-building-services/index.html' },
  { loc: 'https://www.inranktech.com/services/linkedin-marketing-agency/', changefreq: 'weekly', priority: '0.90', file: 'public/services/linkedin-marketing-agency/index.html' },
  { loc: 'https://www.inranktech.com/services/luxury-business-card-design/', changefreq: 'weekly', priority: '0.90', file: 'public/services/luxury-business-card-design/index.html' },
  { loc: 'https://www.inranktech.com/services/meta-ads-agency/', changefreq: 'weekly', priority: '0.90', file: 'public/services/meta-ads-agency/index.html' },
  { loc: 'https://www.inranktech.com/services/mobile-app-development/', changefreq: 'weekly', priority: '0.90', file: 'public/services/mobile-app-development/index.html' },
  { loc: 'https://www.inranktech.com/services/ppc-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/ppc-services/index.html' },
  { loc: 'https://www.inranktech.com/services/seo-company-pune/', changefreq: 'weekly', priority: '0.90', file: 'public/services/seo-company-pune/index.html' },
  { loc: 'https://www.inranktech.com/services/shopify-store-development/', changefreq: 'weekly', priority: '0.90', file: 'public/services/shopify-store-development/index.html' },
  { loc: 'https://www.inranktech.com/services/social-media-marketing-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/social-media-marketing-services/index.html' },
  { loc: 'https://www.inranktech.com/services/ui-ux-design-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/ui-ux-design-services/index.html' },
  { loc: 'https://www.inranktech.com/services/website-maintenance-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/website-maintenance-services/index.html' },
  { loc: 'https://www.inranktech.com/services/wordpress-development-services/', changefreq: 'weekly', priority: '0.90', file: 'public/services/wordpress-development-services/index.html' },

  // 10 Case Study Pages
  { loc: 'https://www.inranktech.com/case-studies/cytos.html', changefreq: 'weekly', priority: '0.85', file: 'case-studies/cytos.html' },
  { loc: 'https://www.inranktech.com/case-studies/dravyafinancial.html', changefreq: 'weekly', priority: '0.85', file: 'case-studies/dravyafinancial.html' },
  { loc: 'https://www.inranktech.com/case-studies/fludio.html', changefreq: 'weekly', priority: '0.85', file: 'case-studies/fludio.html' },
  { loc: 'https://www.inranktech.com/case-studies/greytothegreen.html', changefreq: 'weekly', priority: '0.85', file: 'case-studies/greytothegreen.html' },
  { loc: 'https://www.inranktech.com/case-studies/hcpnest.html', changefreq: 'weekly', priority: '0.85', file: 'case-studies/hcpnest.html' },
  { loc: 'https://www.inranktech.com/case-studies/hiragrafix.html', changefreq: 'weekly', priority: '0.85', file: 'case-studies/hiragrafix.html' },
  { loc: 'https://www.inranktech.com/case-studies/orthopedicanklefootspecialist.html', changefreq: 'weekly', priority: '0.85', file: 'case-studies/orthopedicanklefootspecialist.html' },
  { loc: 'https://www.inranktech.com/case-studies/riituinstitution.html', changefreq: 'weekly', priority: '0.85', file: 'case-studies/riituinstitution.html' },
  { loc: 'https://www.inranktech.com/case-studies/shetkarifoodstuff.html', changefreq: 'weekly', priority: '0.85', file: 'case-studies/shetkarifoodstuff.html' },
  { loc: 'https://www.inranktech.com/case-studies/vasroventures.html', changefreq: 'weekly', priority: '0.85', file: 'case-studies/vasroventures.html' },

  // 10 Our Work Pages
  { loc: 'https://www.inranktech.com/our-work/cytos.html', changefreq: 'weekly', priority: '0.85', file: 'our-work/cytos.html' },
  { loc: 'https://www.inranktech.com/our-work/dravyafinancial.html', changefreq: 'weekly', priority: '0.85', file: 'our-work/dravyafinancial.html' },
  { loc: 'https://www.inranktech.com/our-work/fludio.html', changefreq: 'weekly', priority: '0.85', file: 'our-work/fludio.html' },
  { loc: 'https://www.inranktech.com/our-work/greytothegreen.html', changefreq: 'weekly', priority: '0.85', file: 'our-work/greytothegreen.html' },
  { loc: 'https://www.inranktech.com/our-work/hcpnest.html', changefreq: 'weekly', priority: '0.85', file: 'our-work/hcpnest.html' },
  { loc: 'https://www.inranktech.com/our-work/hiragrafix.html', changefreq: 'weekly', priority: '0.85', file: 'our-work/hiragrafix.html' },
  { loc: 'https://www.inranktech.com/our-work/orthopedicanklefootspecialist.html', changefreq: 'weekly', priority: '0.85', file: 'our-work/orthopedicanklefootspecialist.html' },
  { loc: 'https://www.inranktech.com/our-work/riituinstitution.html', changefreq: 'weekly', priority: '0.85', file: 'our-work/riituinstitution.html' },
  { loc: 'https://www.inranktech.com/our-work/shetkarifoodstuff.html', changefreq: 'weekly', priority: '0.85', file: 'our-work/shetkarifoodstuff.html' },
  { loc: 'https://www.inranktech.com/our-work/vasroventures.html', changefreq: 'weekly', priority: '0.85', file: 'our-work/vasroventures.html' },

  // Legal (2)
  { loc: 'https://www.inranktech.com/privacy-policy.html', changefreq: 'monthly', priority: '0.50', file: 'privacy-policy.html' },
  { loc: 'https://www.inranktech.com/terms-and-conditions.html', changefreq: 'monthly', priority: '0.50', file: 'terms-and-conditions.html' },
];

console.log(`Total URLs to include in sitemap: ${urls.length}`);

// Generate sitemap XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;

for (const u of urls) {
  xml += `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>2026-11-02</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>\n`;
}
xml += `</urlset>\n`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), xml, 'utf8');
fs.writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), xml, 'utf8');
if (fs.existsSync(path.join(rootDir, 'dist'))) {
  fs.writeFileSync(path.join(rootDir, 'dist', 'sitemap.xml'), xml, 'utf8');
}
console.log('Saved sitemap.xml to root and public/ (and dist/)');

// Verify that every single URL has an existing file and matches its canonical tag
let errors = 0;
for (const u of urls) {
  const filePath = path.join(rootDir, u.file);
  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: File does not exist for ${u.loc}: ${filePath}`);
    errors++;
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  if (!match) {
    console.error(`ERROR: No canonical tag in ${u.file}`);
    errors++;
  } else if (match[1] !== u.loc) {
    console.error(`ERROR: Canonical mismatch in ${u.file}: expected ${u.loc}, got ${match[1]}`);
    errors++;
  }
}

if (errors === 0) {
  console.log(`SUCCESS! All ${urls.length} URLs exist on disk and 100% match their canonical tags!`);
} else {
  console.error(`Found ${errors} errors!`);
  process.exit(1);
}

