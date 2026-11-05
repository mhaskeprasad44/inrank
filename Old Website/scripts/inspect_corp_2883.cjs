const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');

console.log('Lines 2875 to 2950:');
console.log(lines.slice(2875, 2950).join('\n'));

