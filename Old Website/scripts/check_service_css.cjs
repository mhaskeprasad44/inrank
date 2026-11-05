const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const matches = css.match(/\.service[^{]+/g) || [];
console.log('Service classes in corporate.css:', matches.slice(0, 30));

