const fs = require('fs');

const c = fs.readFileSync('scripts/append_enhancements_css.cjs', 'utf8');
console.log('append_enhancements_css.cjs total length:', c.length);
console.log(c.slice(0, 3000));

