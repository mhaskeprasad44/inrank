const fs = require('fs');

const g = fs.readFileSync('inrank2.0/our-work/greytothegreen.html', 'utf8');
const v = fs.readFileSync('inrank2.0/our-work/vasroventures.html', 'utf8');

console.log('--- greytothegreen.html snippet around H1 ---');
const gh1 = g.indexOf('<h1');
console.log(g.slice(gh1 - 100, gh1 + 500));

console.log('--- vasroventures.html snippet around H1 ---');
const vh1 = v.indexOf('<h1');
console.log(v.slice(vh1 - 100, vh1 + 500));

