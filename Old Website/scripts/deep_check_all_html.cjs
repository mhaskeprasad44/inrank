const fs = require('fs');
const path = require('path');

function searchHtml(dir) {
  let found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        found = found.concat(searchHtml(full));
      }
    } else if (entry.name.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.toLowerCase().includes('growth checklist') || content.toLowerCase().includes('free pune agency resource') || content.toLowerCase().includes('2026 pune seo')) {
        found.push(full);
      }
    }
  }
  return found;
}

const matches = searchHtml('.');
console.log('HTML files matching checklist terms:', matches);

