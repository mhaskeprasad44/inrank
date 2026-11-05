const fs = require('fs');
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

const target = `  <url>
    <loc>https://inranktech.com/#/blog</loc>`;

const blogEntry = `  <url>
    <loc>https://inranktech.com/#/blog/top-digital-marketing-web-development-agencies-pune</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://inranktech.com/#/blog</loc>`;

if (!sitemap.includes('top-digital-marketing-web-development-agencies-pune')) {
  sitemap = sitemap.replace(target, blogEntry);
  fs.writeFileSync('public/sitemap.xml', sitemap, 'utf8');
  console.log('Added comparison blog to public/sitemap.xml');
}
