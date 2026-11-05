const fs = require('fs');
const s = fs.readFileSync('inrank2.0/services/seo-company-pune.html', 'utf8');
const lines = s.split('\n');
console.log(lines.slice(390, 440).join('\n'));

