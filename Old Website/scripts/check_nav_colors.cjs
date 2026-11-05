const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const idx1 = css.indexOf('.nav-logo-name');
console.log(css.substring(idx1, idx1 + 300));

const idx2 = css.indexOf('.nav-link {');
console.log(css.substring(idx2, idx2 + 400));
