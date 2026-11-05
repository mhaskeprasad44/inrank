const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const sIdx = html.indexOf('id="services"');
const eIdx = html.indexOf('id="niches"');

console.log('Services HTML excerpt (first 1500 chars):');
console.log(html.substring(sIdx, sIdx + 1500));
console.log('\nServices HTML excerpt (last 1000 chars before niches):');
console.log(html.substring(eIdx - 1000, eIdx));

