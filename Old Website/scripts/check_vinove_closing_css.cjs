const fs = require('fs');
const css = fs.readFileSync('scripts/vinove_assets/css/pages/corporate.css', 'utf8');
const idx = css.indexOf('.closing');
if (idx !== -1) {
  console.log(css.substring(idx, idx + 1200));
}

