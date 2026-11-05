const fs = require('fs');

const g = fs.readFileSync('inrank2.0/our-work/greytothegreen.html', 'utf8');
const idx = g.indexOf('Pune IT parks');
console.log('Snippet around Pune IT parks:');
console.log(g.slice(idx - 100, idx + 250));

