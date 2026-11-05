const fs = require('fs');
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
const urls = sitemap.match(/<loc>([^<]+)<\/loc>/g) || [];
console.log('Total URLs in sitemap.xml:', urls.length);
const blogUrls = urls.filter(u => u.includes('blog'));
console.log('Blog URLs in sitemap.xml:', blogUrls.length);
blogUrls.slice(0, 15).forEach(u => console.log('  ' + u));

