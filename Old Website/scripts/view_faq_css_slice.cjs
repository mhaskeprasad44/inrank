const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(1853, 1930).join('\n'));

