const fs = require('fs');

const txt = fs.readFileSync('inrank2.0/our-work/greytothegreen.html', 'utf8');

const headings = txt.match(/<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/g) || [];
console.log('Headings in inrank2.0/our-work/greytothegreen.html:', headings.map(h => h.replace(/<[^>]+>/g, '').trim()));
const paragraphs = txt.match(/<p[^>]*>([\s\S]*?)<\/p>/g) || [];
console.log('\nFirst 6 paragraphs:');
paragraphs.slice(0, 6).forEach((p, i) => console.log(`[P${i+1}]:`, p.replace(/<[^>]+>/g, '').trim()));

