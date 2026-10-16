const fs = require('fs');

const file = 'public/sitemap.xml';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `  <url>
    <loc>https://inranktech.com/</loc>
    <lastmod>2026-10-14</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

const replacementStr = `  <url>
    <loc>https://inranktech.com/</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
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
  </url>`;

if (!content.includes('https://inranktech.com/</loc>')) {
  console.error("Target not found in sitemap");
  process.exit(1);
}

content = content.replace(targetStr, replacementStr);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated public/sitemap.xml with pricing.html and contact.html!');
