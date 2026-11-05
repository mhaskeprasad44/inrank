const fs = require('fs');
const path = require('path');

function inspectInlinePills(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') inspectInlinePills(full);
    } else if (f.endsWith('.html')) {
      const c = fs.readFileSync(full, 'utf8');
      const lines = c.split('\n');
      lines.forEach((l, i) => {
        if (/style=.*border-radius:\s*(999|50|20|100)px/i.test(l) && !l.includes('button') && !l.includes('btn') && !l.includes('input') && !l.includes('img')) {
          console.log(`${full}:${i+1} -> ${l.trim()}`);
        }
      });
    }
  }
}
inspectInlinePills('inrank2.0');

