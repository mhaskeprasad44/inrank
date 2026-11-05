const fs = require('fs');
const path = require('path');

const baseDir = 'inrank2.0';
let count = 0;

function walkAndReplace(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkAndReplace(fullPath);
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace Landscape architecture portal in dropdown
      if (content.includes('Landscape architecture portal')) {
        content = content.replace(/Landscape architecture portal/g, 'Plant-powered biotech &amp; D2C');
        changed = true;
      }
      
      // Also check if any other description like Landscape Architecture & Botanical D2C exists
      if (content.includes('Landscape Architecture &amp; Botanical D2C')) {
        content = content.replace(/Landscape Architecture &amp; Botanical D2C/g, 'Plant-Powered Biotech &amp; Eco Care');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        count++;
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

walkAndReplace(baseDir);
console.log(`Total files updated: ${count}`);

