const fs = require('fs');

const dravya = fs.readFileSync('inrank2.0/our-work/dravyafinancial.html', 'utf8');
const qIdx = dravya.indexOf('blockquote');
console.log('--- dravya blockquote snippet ---');
console.log(dravya.slice(qIdx - 50, qIdx + 450));

