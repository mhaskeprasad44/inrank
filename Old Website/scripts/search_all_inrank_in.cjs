const fs = require('fs');
const path = require('path');

function searchAllInrankIn(dir) {
  let list = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        list = list.concat(searchAllInrankIn(full));
      }
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.json') || entry.name.endsWith('.txt') || entry.name.endsWith('.xml')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('inrank.in')) {
        list.push({ file: full, count: (c.match(/inrank\.in/g) || []).length });
      }
    }
  }
  return list;
}

const all = searchAllInrankIn('.');
console.log('Total files containing inrank.in:', all.length);
all.forEach(a => console.log(`- ${a.file} (${a.count})`));

