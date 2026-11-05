const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/components.css', 'utf8');

const lines = css.split('\n');
console.log(lines.slice(2070, 2130).join('\n'));

