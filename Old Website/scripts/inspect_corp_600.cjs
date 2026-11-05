const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');

console.log('Lines 600 to 675:');
console.log(lines.slice(600, 675).join('\n'));

