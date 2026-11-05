const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const navStart = html.indexOf('<nav class="nav-links"');
const navEnd = html.indexOf('</nav>', navStart);
const navSection = html.substring(navStart, navEnd);

// Find direct children
const matches = navSection.match(/<div class="nav-item"[^>]*>|<a class="nav-link"[^>]*>/g);
console.log('Nav direct links/items:', matches);

