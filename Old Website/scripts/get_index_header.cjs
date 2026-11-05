const fs = require('fs');
const h = fs.readFileSync('inrank2.0/index.html', 'utf8');
const headerMatch = h.match(/<!-- ══════════════════════════════════════════════════════════\s*1\. FLOATING PILL NAVIGATION[\s\S]*?<\/header>/i) || h.match(/<header[\s\S]*?<\/header>/i);
console.log('Found header in index.html, length:', headerMatch[0].length);
console.log(headerMatch[0].slice(0, 300));

