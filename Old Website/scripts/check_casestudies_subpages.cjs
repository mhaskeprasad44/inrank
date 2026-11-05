const fs = require('fs');
const path = require('path');

const dir = 'inrank2.0/case-studies';
if (fs.existsSync(dir)) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
  console.log(`Checking ${files.length} pages in ${dir}:`);
  let missingNavDock = 0;
  let missingWhiteLogo = 0;
  files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    if (!content.includes('nav-dock')) missingNavDock++;
    if (!content.includes('/img/inrank-white-logo.svg')) missingWhiteLogo++;
  });
  console.log(`  Missing nav-dock: ${missingNavDock}`);
  console.log(`  Missing white logo: ${missingWhiteLogo}`);
}

