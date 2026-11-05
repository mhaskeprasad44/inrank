const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');

console.log('Lines 2800 to 2883:');
console.log(lines.slice(2800, 2883).join('\n'));

