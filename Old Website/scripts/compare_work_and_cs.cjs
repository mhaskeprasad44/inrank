const fs = require('fs');

const f1 = fs.readFileSync('inrank2.0/case-studies/cytos.html', 'utf8');
const f2 = fs.readFileSync('inrank2.0/our-work/cytos.html', 'utf8');

console.log('case-studies/cytos.html length:', f1.length);
console.log('our-work/cytos.html length:', f2.length);

const m1 = f1.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
const m2 = f2.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
console.log('H1 case-studies:', m1 ? m1[1].replace(/<[^>]+>/g, '').trim() : 'NONE');
console.log('H1 our-work:', m2 ? m2[1].replace(/<[^>]+>/g, '').trim() : 'NONE');

