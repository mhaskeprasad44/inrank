const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const start = html.indexOf('<section class="proof-section"');
const end = html.indexOf('</section>', start) + 10;
console.log(html.substring(start, end));

