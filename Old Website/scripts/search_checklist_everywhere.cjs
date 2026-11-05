const fs = require('fs');
const path = require('path');

function searchAll(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, f.name);
    if (f.isDirectory() && f.name !== 'node_modules' && f.name !== '.git') {
      searchAll(full);
    } else if (f.name.endsWith('.html') || f.name.endsWith('.js') || f.name.endsWith('.css') || f.name.endsWith('.json')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('FREE PUNE AGENCY RESOURCE') || c.includes('Growth Checklist') || c.includes('Download the 2026 Pune SEO')) {
        console.log('Match found in:', full);
      }
    }
  }
}

searchAll('.');
console.log('Done searching for checklist.');

