const fs = require('fs');

const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const idx = css.indexOf('.ft-mark');
console.log(css.slice(idx - 100, idx + 800));

