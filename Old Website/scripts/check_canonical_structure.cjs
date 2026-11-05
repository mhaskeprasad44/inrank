const fs = require('fs');

const f1 = fs.readFileSync('inrank2.0/services/seo-company-pune.html', 'utf8');
const f2 = fs.readFileSync('inrank2.0/services/seo-company-pune/index.html', 'utf8');

const m1 = f1.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
const m2 = f2.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);

console.log('Canonical in services/seo-company-pune.html:', m1 ? m1[1] : 'none');
console.log('Canonical in services/seo-company-pune/index.html:', m2 ? m2[1] : 'none');

// Also check navigation links across the site: do they link to /services/seo-company-pune.html or /services/seo-company-pune/ ?
const home = fs.readFileSync('inrank2.0/index.html', 'utf8');
const navLinks = home.match(/\/services\/seo-company-pune[^\s"']*/g) || [];
console.log('Navigation links in home:', [...new Set(navLinks)]);

