const fs = require('fs');
const js = fs.readFileSync('scripts/vinove_assets/js/core.js', 'utf8');
const rIdx = js.indexOf('reveal');
if (rIdx !== -1) {
  console.log(js.substring(rIdx - 50, rIdx + 800));
}

