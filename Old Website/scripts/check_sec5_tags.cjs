const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const idx = html.indexOf('id="services"');
console.log('Before services:', html.substring(idx - 150, idx));
console.log('After services:', html.substring(idx, idx + 200));

const idxNiches = html.indexOf('id="niches"');
console.log('Before niches:', html.substring(idxNiches - 150, idxNiches));

