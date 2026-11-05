const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const idx = css.indexOf('.nav-links');
console.log(css.substring(idx - 50, idx + 800));

