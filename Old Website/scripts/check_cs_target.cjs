const fs = require('fs');
const cs = fs.readFileSync('inrank2.0/case-studies.html', 'utf8');

const targetStart = cs.indexOf('<!-- Case Studies List -->');
const targetEnd = cs.indexOf('<!-- Closing Dual Action Cards -->');

console.log('Target section in case-studies.html:');
console.log(cs.slice(targetStart, targetEnd));

