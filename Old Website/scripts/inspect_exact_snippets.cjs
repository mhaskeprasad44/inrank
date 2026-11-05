const fs = require('fs');

const cytos = fs.readFileSync('inrank2.0/our-work/cytos.html', 'utf8');
const qIdx = cytos.indexOf('blockquote');
console.log('--- cytos blockquote snippet ---');
console.log(cytos.slice(qIdx - 50, qIdx + 400));

const dravya = fs.readFileSync('inrank2.0/our-work/dravyafinancial.html', 'utf8');
const oIdx = dravya.indexOf('Commercial Challenge');
console.log('--- dravya Commercial Challenge snippet ---');
console.log(dravya.slice(oIdx - 50, oIdx + 400));

