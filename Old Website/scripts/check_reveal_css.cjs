const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const rIdx = css.indexOf('[data-reveal]');
if (rIdx !== -1) {
  console.log(css.substring(rIdx - 50, rIdx + 500));
}

