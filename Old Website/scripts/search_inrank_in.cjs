const fs = require('fs');
const path = require('path');

function searchInrankIn(dir) {
  let list = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      list = list.concat(searchInrankIn(full));
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.json') || entry.name.endsWith('.txt')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('inrank.in')) {
        list.push({ file: full, occurrences: (c.match(/inrank\.in/g) || []).length });
      }
    }
  }
  return list;
}

const found = searchInrankIn('inrank2.0');
console.log('Files in inrank2.0 containing inrank.in:', found.length);
found.forEach(f => console.log(`- ${f.file} (${f.occurrences} matches)`));

