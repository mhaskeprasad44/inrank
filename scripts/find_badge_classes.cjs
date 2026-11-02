const fs = require('fs');
const path = require('path');

const targets = new Set();
function findBadges(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist', 'Adant'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) findBadges(full);
    else if (/\.(html|ts|tsx|js)$/.test(entry.name)) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((l) => {
        const matches = l.match(/class="([^"]*(?:bg-emerald-50|bg-emerald-100|bg-emerald-500\/10|bg-emerald-500\/15|inrank-cm-badge-req)[^"]*)"/g);
        if (matches) {
          matches.forEach(cls => targets.add(cls));
        }
      });
    }
  }
}
findBadges('.');
console.log('Unique class strings found (' + targets.size + '):');
Array.from(targets).forEach(t => console.log('  ' + t));
