const fs = require('fs');
const path = require('path');

const patterns = ['70386', '76204'];
const found = [];

function scanFile(filepath) {
  try {
    const text = fs.readFileSync(filepath, 'utf8');
    patterns.forEach(p => {
      if (text.includes(p)) {
        found.push({ filepath, pattern: p });
      }
    });
  } catch (e) {}
}

function scanDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item === 'node_modules' || item === '.git' || item === 'dist' || item === 'awrange_pages' || item === 'webvantik_pages') continue;
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDir(full);
    } else if (item.endsWith('.html') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.json') || item.endsWith('.xml') || item.endsWith('.txt')) {
      scanFile(full);
    }
  }
}

scanDir(__dirname);
console.log('Files with older phone numbers:');
found.forEach(f => console.log(`  ${f.filepath} (${f.pattern})`));
