const fs = require('fs');
const css = fs.readFileSync('scripts/vinove_assets/css/pages/corporate.css', 'utf8');
const rIdx = css.indexOf('[data-reveal]');
if (rIdx !== -1) {
  console.log(css.substring(rIdx - 50, rIdx + 500));
} else {
  console.log('No [data-reveal] in Vinove corporate.css!');
}

