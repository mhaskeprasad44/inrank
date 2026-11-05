const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') checkDir(full);
    } else if (f.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      const hasServicesDrop = content.includes('data-dropdown="services"') && (content.includes('aria-label="Services Submenu"') || content.includes('aria-label="Services Directory"'));
      const hasAboutDrop = content.includes('data-dropdown="about"') && content.includes('About Inrank');
      console.log(full.replace(/\\/g, '/'), 'ServicesDrop:', hasServicesDrop, 'AboutDrop:', hasAboutDrop);
    }
  }
}
checkDir('inrank2.0');

