const fs = require('fs');

const about = fs.readFileSync('inrank2.0/about.html', 'utf8');
console.log('inrank2.0/about.html length:', about.length);

const h2s = [...about.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Headings in about.html:', h2s);

