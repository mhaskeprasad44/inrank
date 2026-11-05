const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const navMatch = html.match(/<nav class="nav-links"[\s\S]*?<\/nav>/);
if (navMatch) {
  console.log(navMatch[0]);
}

