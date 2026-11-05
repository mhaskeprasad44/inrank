const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const brandIdx = css.indexOf('.nav-logo-name');
console.log(css.substring(brandIdx - 100, brandIdx + 1200));

