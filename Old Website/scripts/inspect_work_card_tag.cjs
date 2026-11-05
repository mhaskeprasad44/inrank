const fs = require('fs');
const html = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
const idx = html.indexOf('greytothegreen.webp');
console.log(html.substring(idx - 150, idx + 200));

