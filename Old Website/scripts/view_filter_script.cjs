const fs = require('fs');

const workHtml = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
const start = workHtml.indexOf('// Robust Instant Filtering for Work & Case Studies');
console.log(workHtml.slice(start, start + 1600));

