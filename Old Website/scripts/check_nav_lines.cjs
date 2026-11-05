const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const lines = css.split('\n');
console.log(lines.slice(30, 130).join('\n'));

