const fs = require('fs');
const html = fs.readFileSync('inrank2.0/our-work.html', 'utf8');

const idx = html.indexOf('filter-btn');
console.log('Index of filter-btn:', idx);
if (idx !== -1) {
  console.log(html.slice(idx - 200, idx + 400));
}

