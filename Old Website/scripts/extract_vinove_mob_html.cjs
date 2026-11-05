const fs = require('fs');
const content = fs.readFileSync('scripts/vinove_raw.html', 'utf8');

const start = content.indexOf('class="mob-hd"');
if (start !== -1) {
  // Find opening of mobile drawer before mob-hd
  const drawerStart = content.lastIndexOf('<', start - 1);
  const containerStart = content.lastIndexOf('<', drawerStart - 5);
  console.log(content.slice(containerStart - 100, containerStart + 4500));
}

