const fs = require('fs');

const dravya = fs.readFileSync('inrank2.0/our-work/dravyafinancial.html', 'utf8');
const cIdx = dravya.indexOf('The Commercial Challenge & Solution');
console.log('--- dravya text around Commercial Challenge ---');
console.log(dravya.slice(cIdx, cIdx + 500));

