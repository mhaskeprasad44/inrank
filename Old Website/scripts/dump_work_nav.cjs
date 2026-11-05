const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const start = html.indexOf('<div class="nav-item" data-dropdown="work">');
const end = html.indexOf('<div class="nav-item" data-dropdown="about">', start);
console.log(html.substring(start, end));

