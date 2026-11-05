const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/service-ecosystem.css', 'utf8');

const idx = css.indexOf('.eco-service-list');
console.log(css.slice(idx, idx + 1000));

