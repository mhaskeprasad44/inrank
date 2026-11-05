const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const dropWorkMatch = html.match(/<div class="nav-drop drop-work">[\s\S]*?<\/div>\s*<\/li>/);
if (dropWorkMatch) {
  console.log(dropWorkMatch[0]);
} else {
  console.log('drop-work not found!');
}

