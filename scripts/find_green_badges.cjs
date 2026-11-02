const fs = require('fs');
const path = require('path');

const results = [];

function search(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (['node_modules', '.git', 'dist'].includes(f)) continue;
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      search(p);
    } else if (/\.(html|js|ts|tsx)$/.test(f)) {
      const c = fs.readFileSync(p, 'utf8');
      const lines = c.split('\n');
      lines.forEach((l, idx) => {
        // Exclude empty span dots like <span class="... rounded-full bg-emerald-500 ..."></span>
        if (/rounded-full|rounded-pill|rounded-md|rounded-lg/.test(l) && !/<span[^>]*><\/span>/.test(l)) {
          if (/(bg-emerald-500\/10|bg-green-500\/10|bg-emerald-500\/90|bg-emerald-50|bg-green-50|#eafaf1|#bbf2d2|border-emerald-500\/20|border-emerald-500\/30)/.test(l)) {
            // Check if it looks like a pill badge or tag
            if (/px-[1-4]|py-[0-9]/.test(l)) {
              results.push({ file: p, line: idx + 1, text: l.trim() });
            }
          }
        }
      });
    }
  }
}

search('.');
console.log('Total text pill badges:', results.length);
results.forEach(r => console.log(`${r.file}:${r.line} -> ${r.text.substring(0, 160)}`));
