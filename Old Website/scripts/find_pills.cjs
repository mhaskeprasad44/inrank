const fs = require('fs');
const path = require('path');

function search(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') search(full);
    } else if (f.endsWith('.html') || f.endsWith('.css')) {
      const c = fs.readFileSync(full, 'utf8');
      const matches = [];
      if (c.includes('OUR OPERATING PHILOSOPHY') || c.includes('Operating Philosophy')) matches.push('OPERATING PHILOSOPHY');
      if (c.includes('eyebrow-pill')) matches.push('eyebrow-pill');
      if (c.includes('hero-pill')) matches.push('hero-pill');
      if (c.includes('pill')) matches.push('pill');
      if (c.includes('COMMERCIAL LANDSCAPING')) matches.push('COMMERCIAL LANDSCAPING');
      if (matches.length > 0) {
        console.log(full, matches.join(', '));
      }
    }
  }
}
search('inrank2.0');

