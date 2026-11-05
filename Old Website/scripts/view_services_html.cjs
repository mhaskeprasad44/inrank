const fs = require('fs');
const content = fs.readFileSync('inrank2.0/services.html', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(470, 520).join('\n'));

