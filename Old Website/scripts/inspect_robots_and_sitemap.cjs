const fs = require('fs');

if (fs.existsSync('robots.txt')) {
  console.log('=== CURRENT ROOT robots.txt ===');
  console.log(fs.readFileSync('robots.txt', 'utf8'));
}

if (fs.existsSync('sitemap.xml')) {
  console.log('=== SITEMAP ANALYSIS ===');
  const content = fs.readFileSync('sitemap.xml', 'utf8');
  const urls = content.match(/<loc>(.*?)<\/loc>/g) || [];
  console.log('Total URLs in root sitemap.xml:', urls.length);
  urls.slice(0, 10).forEach(u => console.log(' ', u));
}

