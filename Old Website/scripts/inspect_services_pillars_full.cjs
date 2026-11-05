const fs = require('fs');
const html = fs.readFileSync('inrank2.0/services.html', 'utf8');

const start = html.indexOf('id="pillar-1"');
const end = html.indexOf('<!-- Closing Dual Action Cards -->');
console.log(html.slice(start - 100, end));

