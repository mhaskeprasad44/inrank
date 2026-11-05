const fs = require('fs');
const content = fs.readFileSync('inrank2.0/portfolio.html', 'utf8');

const lines = content.split('\n');
console.log(lines.slice(535, 565).join('\n'));

