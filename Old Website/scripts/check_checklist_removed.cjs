const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, f.name);
    if (f.isDirectory() && f.name !== 'node_modules' && f.name !== '.git') {
      checkDir(full);
    } else if (f.name.endsWith('.html')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('FREE PUNE AGENCY RESOURCE') || c.includes('Download the 2026 Pune SEO')) {
        console.log('Still found in:', full);
      }
    }
  }
}

checkDir('.');
console.log('Done checking for checklist section.');

