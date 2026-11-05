const fs = require('fs');
const js = fs.readFileSync('inrank2.0/js/core.js', 'utf8');

const idx = js.indexOf('pricing-tab-btn');
console.log(js.slice(idx - 50, idx + 600));

