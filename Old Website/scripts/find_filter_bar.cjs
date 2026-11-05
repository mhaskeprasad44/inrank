const fs = require('fs');
const html = fs.readFileSync('inrank2.0/our-work.html', 'utf8');

const idx = html.indexOf('work-filter-bar');
console.log('Index of work-filter-bar:', idx);
if (idx !== -1) {
  console.log(html.slice(idx - 100, idx + 1000));
}

