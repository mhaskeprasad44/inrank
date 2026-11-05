const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');

console.log('Showing lines 3950 to 4050:');
console.log(lines.slice(3950, 4050).join('\n'));

console.log('\nShowing lines 4250 to 4325:');
console.log(lines.slice(4250, 4325).join('\n'));

