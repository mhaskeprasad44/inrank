const fs = require('fs');
const path = require('path');

function findDravya(dir) {
  const results = [];
  function walk(d) {
    for (const f of fs.readdirSync(d)) {
      const full = path.join(d, f);
      if (fs.statSync(full).isDirectory()) {
        walk(full);
      } else if (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.css') || f.endsWith('.json') || f.endsWith('.xml')) {
        const content = fs.readFileSync(full, 'utf8');
        if (/dravya/i.test(content)) {
          results.push(full);
        }
      }
    }
  }
  walk(dir);
  return results;
}

const files = findDravya('inrank2.0');
console.log('Total files containing dravya:', files.length);
files.forEach(f => console.log(f));

