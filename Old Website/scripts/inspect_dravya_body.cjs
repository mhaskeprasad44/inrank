const fs = require('fs');

const d1 = fs.readFileSync('inrank2.0/our-work/dravyafinancial.html', 'utf8');
console.log('--- dravyafinancial.html overview ---');
const metaBox = d1.match(/<div class="case-meta-grid"[\s\S]*?<\/div>\s*<\/div>/);
if (metaBox) {
  console.log(metaBox[0]);
}

const execSummary = d1.match(/<section class="case-section"[\s\S]*?<\/section>/);
if (execSummary) {
  console.log('First case-section:\n', execSummary[0].slice(0, 1000));
}

