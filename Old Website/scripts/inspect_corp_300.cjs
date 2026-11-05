const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');

console.log('Lines 300 to 500:');
console.log(lines.slice(300, 500).join('\n'));

