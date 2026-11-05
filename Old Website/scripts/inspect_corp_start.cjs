const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');

console.log('Lines 1 to 250:');
console.log(lines.slice(0, 250).join('\n'));

