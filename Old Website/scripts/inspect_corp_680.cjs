const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');

console.log('Lines 670 to 750:');
console.log(lines.slice(670, 750).join('\n'));

