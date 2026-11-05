const fs = require('fs');
const content = fs.readFileSync('inrank2.0/index.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(1329, 1420).join('\n'));

