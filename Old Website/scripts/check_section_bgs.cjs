const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

function findRule(selector) {
  const idx = css.indexOf(selector);
  if (idx !== -1) {
    console.log(`=== ${selector} ===`);
    console.log(css.substring(idx, idx + 400));
  } else {
    console.log(`Selector ${selector} not found`);
  }
}

findRule('.hero.image-hero');
findRule('.marquee-band');
findRule('.capabilities-section');

