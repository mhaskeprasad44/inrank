const fs = require('fs');

let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

const targetUrlClose = '</url>';
const firstUrlEndIndex = sitemap.indexOf(targetUrlClose);

if (firstUrlEndIndex === -1) {
  console.error("Could not find first </url>");
  process.exit(1);
}

const newEntries = `
  <url>
    <loc>https://inranktech.com/pricing.html</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://inranktech.com/contact.html</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://inranktech.com/website-design-company-in-pune.html</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://inranktech.com/digital-marketing-agency-in-pune.html</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://inranktech.com/#/blog/top-digital-marketing-web-development-agencies-pune</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;

// Check if already present
if (!sitemap.includes('pricing.html')) {
  sitemap = sitemap.slice(0, firstUrlEndIndex + targetUrlClose.length) + newEntries + sitemap.slice(firstUrlEndIndex + targetUrlClose.length);
  fs.writeFileSync('public/sitemap.xml', sitemap, 'utf8');
  console.log('Successfully synced public/sitemap.xml!');
} else {
  console.log('Sitemap already contains new URLs.');
}
