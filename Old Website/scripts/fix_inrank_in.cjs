const fs = require('fs');
const path = require('path');

function replaceInrankIn(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        count += replaceInrankIn(full);
      }
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.json') || entry.name.endsWith('.txt') || entry.name.endsWith('.xml')) {
      let c = fs.readFileSync(full, 'utf8');
      if (c.includes('inrank.in')) {
        c = c.replace(/https:\/\/inrank\.in/g, 'https://inranktech.com');
        c = c.replace(/inrank\.in/g, 'inranktech.com');
        fs.writeFileSync(full, c, 'utf8');
        count++;
      }
    }
  }
  return count;
}

const num = replaceInrankIn('.');
console.log(`Successfully replaced inrank.in with inranktech.com in ${num} files.`);

