const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const matches = css.match(/\.badge-good[\s\S]*?\}/g) || [];
matches.forEach(m => console.log(m));

