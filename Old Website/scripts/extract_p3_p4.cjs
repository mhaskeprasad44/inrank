const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const startIdx = html.indexOf('Pillar 3: Performance Marketing');
console.log(html.slice(startIdx, startIdx + 2500));

