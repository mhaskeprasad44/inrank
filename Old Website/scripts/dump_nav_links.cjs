const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const start = html.indexOf('<nav class="nav-links"');
const end = html.indexOf('</nav>', start);
console.log(html.substring(start, end + 6));

