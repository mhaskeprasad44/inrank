const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const navEnd = html.indexOf('</header>');
const navStart = html.indexOf('<header id="nav"');
console.log(html.substring(navEnd - 800, navEnd + 10));

