const fs = require('fs');
const path = require('path');

let count = 0;
let total = 0;
function check(dir) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules') check(full);
    } else if (f.endsWith('.html')) {
      total++;
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('data-dropdown="work"')) count++;
    }
  });
}
check('inrank2.0');
console.log(`Our Work dropdown present in ${count} of ${total} HTML files.`);
