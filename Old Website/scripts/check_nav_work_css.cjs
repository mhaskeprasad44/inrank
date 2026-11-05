const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const start = css.indexOf('.work-dropdown-grid');
if (start !== -1) {
  console.log(css.substring(start, start + 2500));
} else {
  console.log('.work-dropdown-grid not found in nav.css!');
}

