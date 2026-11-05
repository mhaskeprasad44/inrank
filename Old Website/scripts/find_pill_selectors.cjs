const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const matches = css.match(/[^{}]*\bpill\b[^{]*\{/gi) || [];
console.log('Selectors containing pill:');
matches.forEach(m => console.log(m.trim()));

