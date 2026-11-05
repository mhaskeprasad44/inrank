const fs = require('fs');
const path = require('path');

function checkHeaders(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') checkHeaders(full);
    } else if (f.endsWith('.html')) {
      const c = fs.readFileSync(full, 'utf8');
      const hasNavCss = c.includes('nav.css');
      const hasNavId = c.includes('id="nav"');
      const hasCoreJs = c.includes('core.js');
      const hasNavHeader = c.includes('<header');
      if (!hasNavCss || !hasNavId || !hasCoreJs || !hasNavHeader) {
        console.log('Anomaly in file:', full, { hasNavCss, hasNavId, hasCoreJs, hasNavHeader });
      }
    }
  }
}
checkHeaders('inrank2.0');
console.log('Header audit completed.');

