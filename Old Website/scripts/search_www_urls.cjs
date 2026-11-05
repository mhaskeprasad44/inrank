const fs = require('fs');
const path = require('path');

function searchWww(dir) {
  let matches = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        matches = matches.concat(searchWww(full));
      }
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.xml') || entry.name.endsWith('.txt') || entry.name.endsWith('.js') || entry.name.endsWith('.json')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('www.inranktech.com')) {
        matches.push(full);
      }
    }
  }
  return matches;
}

const found = searchWww('.');
console.log('Files containing www.inranktech.com:', found.length);
found.forEach(f => console.log('-', f));

