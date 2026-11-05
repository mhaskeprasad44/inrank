const fs = require('fs');
const path = require('path');

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scanDir(full);
    } else if (f.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((l, idx) => {
        if (l.includes('•') || l.includes('&bull;') || l.includes('&#8226;') || l.includes('pulse-dot') || l.includes('stat-badge-dot') || l.includes('badge-dot') || l.includes('hero-stat-badge')) {
          console.log(path.relative('inrank2.0', full) + ':' + (idx+1) + ': ' + l.trim().slice(0, 100));
        }
      });
    }
  }
}

scanDir('inrank2.0');

