const fs = require('fs');
const path = require('path');

function searchExact(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') searchExact(full);
    } else {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('Engineered & executed') || c.includes('Engineered &amp; executed') || c.includes('executed directly by')) {
        console.log('EXACT MATCH in:', full);
        const lines = c.split('\n');
        lines.forEach((l, i) => {
          if (l.includes('Engineered & executed') || l.includes('Engineered &amp; executed') || l.includes('executed directly by')) {
            console.log(`  ${i+1}: ${l.trim()}`);
          }
        });
      }
    }
  }
}
searchExact('inrank2.0');

