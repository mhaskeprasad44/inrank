const fs = require('fs');
const js = fs.readFileSync('inrank2.0/js/core.js', 'utf8');

const idx = js.indexOf('initFaqAccordion');
console.log(js.slice(idx, idx + 600));

