const fs = require('fs');

const d1 = fs.readFileSync('inrank2.0/our-work/dravyafinancial.html', 'utf8');
const h1Idx = d1.indexOf('<h1');
console.log(d1.slice(h1Idx - 50, h1Idx + 3000));

