const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        count += replaceInDir(full);
      }
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.xml') || entry.name.endsWith('.txt') || entry.name.endsWith('.js') || entry.name.endsWith('.json')) {
      let content = fs.readFileSync(full, 'utf8');
      if (content.includes('https://www.inranktech.com')) {
        content = content.replace(/https:\/\/www\.inranktech\.com/g, 'https://inranktech.com');
        fs.writeFileSync(full, content, 'utf8');
        count++;
      }
    }
  }
  return count;
}

const modified = replaceInDir('.');
console.log(`Successfully replaced www with non-www in ${modified} files across codebase.`);

