const fs = require('fs');
const content = fs.readFileSync('scripts/apply_authentic_inrank_vinove_system.cjs', 'utf8');
const idx = content.indexOf('people-meta');
if (idx !== -1) {
  console.log(content.substring(idx - 100, idx + 800));
}

