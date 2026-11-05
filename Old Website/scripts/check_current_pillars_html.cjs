const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const start = html.indexOf('<div class="pillars-strip">');
const end = html.indexOf('<div class="services-grid">', start);
console.log(html.substring(start, end));

