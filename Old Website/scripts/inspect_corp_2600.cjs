const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');

console.log('Lines 2600 to 2800:');
console.log(lines.slice(2600, 2800).join('\n'));

