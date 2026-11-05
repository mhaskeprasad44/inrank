const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const navMatch = html.match(/<nav class="nav-dock"[\s\S]*?<\/nav>/);
if (navMatch) {
  console.log(navMatch[0]);
} else {
  console.log('nav-dock not found');
}

