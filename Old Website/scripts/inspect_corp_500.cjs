const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');

console.log('Lines 500 to 600:');
console.log(lines.slice(500, 600).join('\n'));

