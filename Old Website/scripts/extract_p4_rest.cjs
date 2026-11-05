const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const startIdx = html.indexOf('Pillar 4: Brand & CRO Optimization');
console.log(html.slice(startIdx, startIdx + 1500));

