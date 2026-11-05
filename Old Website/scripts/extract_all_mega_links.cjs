const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const startIdx = html.indexOf('mega-pillar-links');
console.log(html.slice(startIdx - 500, startIdx + 3500));

