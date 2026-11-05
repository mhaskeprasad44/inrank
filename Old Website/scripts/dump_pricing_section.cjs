const fs = require('fs');

const content = fs.readFileSync('inrank2.0/pricing.html', 'utf8');
const lines = content.split('\n');

console.log(lines.slice(508, 582).join('\n'));

