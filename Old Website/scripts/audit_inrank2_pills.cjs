const fs = require('fs');
const path = require('path');

function checkPills(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') checkPills(fullPath);
    } else if (entry.name.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Look for bullet dots in headers/kickers
      const bulletKickers = content.match(/<[^>]+>\s*•[^<]+<\/[^>]+>/g) || [];
      // Look for pill classes
      const pillClasses = content.match(/class="[^"]*(?:eyebrow-pill|tier-pill|rounded-full|pill-badge)[^"]*"/g) || [];
      
      if (bulletKickers.length > 0 || pillClasses.length > 0) {
        console.log(`File: ${fullPath}`);
        if (bulletKickers.length > 0) console.log('  Bullet kickers:', bulletKickers);
        if (pillClasses.length > 0) console.log('  Pill classes:', pillClasses);
      }
    }
  }
}

console.log('Auditing inrank2.0 for lingering pills or green dots...');
checkPills('inrank2.0');
console.log('Audit completed.');

