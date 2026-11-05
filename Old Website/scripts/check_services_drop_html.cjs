const fs = require('fs');
const h = fs.readFileSync('inrank2.0/index.html', 'utf8');
const sMatch = h.match(/<div class="nav-item nav-item--static" data-dropdown="services">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i);
console.log(sMatch ? sMatch[0].slice(0, 1500) : 'Not found');

