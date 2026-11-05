const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');

console.log('Lines 250 to 350:');
console.log(lines.slice(250, 350).join('\n'));

