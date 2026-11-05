const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

function showRule(selector) {
  const idx = css.indexOf(selector);
  if (idx !== -1) {
    console.log(`\n=== Rule for ${selector} ===`);
    console.log(css.slice(idx, idx + 400));
  } else {
    console.log(`\n=== Selector NOT found: ${selector} ===`);
  }
}

showRule('.proof-grid');
showRule('.niches-grid');
showRule('.niches-section');
showRule('.pricing-grid');
showRule('.pricing-card');
showRule('.people-card');
showRule('.testi-grid');
showRule('.comparison-table');

