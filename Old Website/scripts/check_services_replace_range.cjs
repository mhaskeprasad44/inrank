const fs = require('fs');
const html = fs.readFileSync('inrank2.0/services.html', 'utf8');

const p1 = html.indexOf('<!-- Pillar 1 -->');
const closeCta = html.indexOf('<!-- Closing Dual Action Cards -->');
console.log('Range from Pillar 1 to Closing Dual Action Cards:');
console.log('Start index:', p1, 'End index:', closeCta);
console.log('Snippet before end:');
console.log(html.slice(closeCta - 200, closeCta));

