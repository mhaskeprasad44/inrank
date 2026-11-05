const fs = require('fs');
const path = require('path');

function searchInFiles(dir, text) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      searchInFiles(full, text);
    } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes(text)) {
        console.log('Found in:', full);
      }
    }
  });
}

searchInFiles('inrank2.0', 'COMMERCIAL LANDSCAPING');

