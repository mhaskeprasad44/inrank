const fs = require('fs');
const path = require('path');

function searchInsensitive(dir, pattern) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      searchInsensitive(full, pattern);
    } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      if (pattern.test(content)) {
        console.log('Found in:', full);
      }
    }
  });
}

searchInsensitive('inrank2.0', /landscap/i);
searchInsensitive('inrank2.0', /bio-arch/i);
searchInsensitive('inrank2.0', /turnaround/i);

