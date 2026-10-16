const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const links = [...html.matchAll(/href=["']([^"']*(?:services|service)[^"']*)["']/gi)].map(m => m[1]);
console.log('Sample service links in index.html:', [...new Set(links)].slice(0, 20));
