const fs = require('fs');
const h = fs.readFileSync('inrank2.0/index.html', 'utf8');
const headerMatch = h.match(/<header id="nav"[\s\S]*?<\/header>/i);
console.log('Master header length:', headerMatch[0].length);
console.log(headerMatch[0].slice(0, 250));

