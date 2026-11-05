const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const idx = css.indexOf('.eco-service-list');
if (idx !== -1) {
  console.log(css.slice(idx, idx + 1200));
} else {
  console.log('.eco-service-list not found in corporate.css');
}

