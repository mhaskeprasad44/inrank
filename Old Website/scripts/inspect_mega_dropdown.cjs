const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const navStart = html.indexOf('class="nav-mega-menu"');
const navEnd = html.indexOf('</nav>', navStart);
console.log('Mega dropdown content:');
console.log(html.slice(navStart, navEnd));

