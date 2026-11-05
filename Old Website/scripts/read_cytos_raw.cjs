const fs = require('fs');
const content = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
const lines = content.split('\n');
console.log(JSON.stringify(lines.slice(603, 629).join('\n')));

