const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const idx = css.indexOf('.service-card-title');
console.log(css.slice(idx, idx + 1400));

