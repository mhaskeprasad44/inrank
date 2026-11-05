const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const idx = css.indexOf('.people-section');
if (idx !== -1) {
  console.log(css.substring(idx - 50, idx + 1800));
}

