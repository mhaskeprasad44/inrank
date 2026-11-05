const fs = require('fs');
const html = fs.readFileSync('scripts/vinove_blog.html', 'utf8');

const navStart = html.indexOf('<nav id="nav"');
const navEnd = html.indexOf('</nav>', navStart);
console.log(html.substring(navStart, navEnd + 6));

