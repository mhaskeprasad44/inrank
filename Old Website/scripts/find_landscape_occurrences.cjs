const fs = require('fs');
const path = require('path');

const baseDir = 'inrank2.0';
function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.name.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('Landscape architecture portal') || content.includes('Greytothegreen\n                  Landscape') || content.includes('Landscape architecture')) {
        console.log(`Found "Landscape architecture" in ${fullPath}`);
      }
    }
  }
}

scanDir(baseDir);

