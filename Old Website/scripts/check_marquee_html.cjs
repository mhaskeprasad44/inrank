const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(325, 365).join('\n'));

