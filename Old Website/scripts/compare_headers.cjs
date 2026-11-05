const fs = require('fs');
const path = require('path');

const h = fs.readFileSync('inrank2.0/index.html', 'utf8');
const headerMatch = h.match(/<header id="nav"[\s\S]*?<\/header>/i);
const masterHeader = headerMatch[0];

let sameCount = 0;
let diffCount = 0;
const diffPages = [];

function checkAll(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') checkAll(full);
    } else if (f.endsWith('.html') && f !== 'test_footer.html') {
      const c = fs.readFileSync(full, 'utf8');
      const m = c.match(/<header id="nav"[\s\S]*?<\/header>/i);
      if (!m) {
        diffPages.push({ file: full, reason: 'no header id=nav' });
        diffCount++;
      } else if (m[0] === masterHeader) {
        sameCount++;
      } else {
        diffPages.push({ file: full, reason: `length diff: master=${masterHeader.length}, page=${m[0].length}` });
        diffCount++;
      }
    }
  }
}
checkAll('inrank2.0');
console.log(`Same: ${sameCount}, Different: ${diffCount}`);
diffPages.forEach(p => console.log(p.file, p.reason));

