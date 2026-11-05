const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const start = html.indexOf('id="nav"');
console.log(html.substring(start - 40, start + 1200));

