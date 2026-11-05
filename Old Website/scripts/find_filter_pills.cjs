const fs = require('fs');
const html = fs.readFileSync('inrank2.0/our-work.html', 'utf8');

const idx = html.indexOf('work-filter-pills');
console.log(html.slice(idx - 600, idx + 400));

