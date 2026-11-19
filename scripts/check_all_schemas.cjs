const fs = require('fs');
const path = require('path');

function scan(dir) {
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      if (!['node_modules', '.git', 'dist'].includes(f)) scan(fp);
    } else if (f.endsWith('.html')) {
      const c = fs.readFileSync(fp, 'utf8');
      const matches = c.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
      matches.forEach((m, idx) => {
        try {
          const raw = m.replace(/<\/?script[^>]*>/gi, '');
          JSON.parse(raw);
          if (raw.includes('"author"') && raw.includes('"name": {')) {
            console.log('Invalid author object in:', fp);
          }
        } catch (e) {
          console.log(`JSON parse error in ${fp} script #${idx}:`, e.message);
        }
      });
    }
  });
}

scan('.');
console.log('Schema scan complete.');
