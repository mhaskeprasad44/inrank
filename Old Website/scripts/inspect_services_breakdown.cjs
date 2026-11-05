const fs = require('fs');
const html = fs.readFileSync('inrank2.0/services.html', 'utf8');

const start = html.indexOf('<!-- Pillars Breakdown -->');
const end = html.indexOf('<!-- Closing Dual Action Cards -->');
console.log('Pillars Breakdown section length:', end - start);
console.log(html.slice(start, start + 1200));

