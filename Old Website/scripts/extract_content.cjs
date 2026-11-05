const fs = require('fs');

const csHtml = fs.readFileSync('case-studies.html', 'utf8');
const prHtml = fs.readFileSync('pricing.html', 'utf8');

console.log('=== CASE STUDIES HEADINGS ===');
const csH2s = [...csHtml.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Sample Headings in case-studies:', csH2s.slice(0, 15));

console.log('\n=== PRICING TIERS ===');
const prH2s = [...prHtml.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Sample Headings in pricing:', prH2s.slice(0, 15));

