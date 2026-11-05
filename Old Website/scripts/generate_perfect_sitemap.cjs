const fs = require('fs');

const urls = JSON.parse(fs.readFileSync('scripts/unique_canonical_urls.json', 'utf8'));

const today = '2026-11-05';

function getPriorityAndFreq(url) {
  if (url === 'https://inranktech.com/') {
    return { priority: '1.0', changefreq: 'daily' };
  }
  if (url.includes('/services/') || url === 'https://inranktech.com/services.html') {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  if (url === 'https://inranktech.com/pricing.html' || url === 'https://inranktech.com/about.html' || url === 'https://inranktech.com/contact.html') {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  if (url.includes('/case-studies') || url.includes('/our-work')) {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  if (url.includes('/blog') || url.includes('-in-pune.html')) {
    return { priority: '0.7', changefreq: 'monthly' };
  }
  return { priority: '0.3', changefreq: 'yearly' };
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

urls.forEach(u => {
  const meta = getPriorityAndFreq(u);
  xml += `  <url>
    <loc>${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>\n`;
});

xml += `</urlset>\n`;

const destinations = ['inrank2.0/sitemap.xml', 'sitemap.xml'];
if (fs.existsSync('public')) destinations.push('public/sitemap.xml');
if (fs.existsSync('dist')) destinations.push('dist/sitemap.xml');

destinations.forEach(dest => {
  fs.writeFileSync(dest, xml, 'utf8');
  console.log(`Saved ${dest} (${urls.length} URLs, ${xml.length} bytes)`);
});

