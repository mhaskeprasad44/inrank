const fs = require('fs');
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
const urls = (sitemap.match(/<loc>([^<]+)<\/loc>/g) || []).map(u => u.replace(/<\/?loc>/g, ''));
console.log(urls);

