const fs = require('fs');
const h = fs.readFileSync('inrank2.0/index.html', 'utf8');
const header = h.match(/<header id="nav"[\s\S]*?<\/header>/i)[0];
const lines = header.split('\n');
console.log(lines.slice(12, 45).join('\n'));

