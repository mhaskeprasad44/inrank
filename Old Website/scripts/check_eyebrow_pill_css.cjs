const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const matches = css.match(/\.eyebrow-pill[\s\S]*?\}/g) || [];
console.log('eyebrow-pill in corporate.css:');
matches.forEach(m => console.log(m));

