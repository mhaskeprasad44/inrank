const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const matches = css.match(/@media[^{]+\{/g);
console.log(matches);

