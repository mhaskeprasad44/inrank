const fs = require('fs');

const content = fs.readFileSync('pricing.html', 'utf8');
const lines = content.split('\n');

console.log(lines.slice(750, 1240).join('\n'));

