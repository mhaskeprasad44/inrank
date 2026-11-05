const fs = require('fs');
const path = require('path');

const dir = 'inrank2.0';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Remove stat-badge-dot divs
  if (content.includes('stat-badge-dot')) {
    content = content.replace(/<div\s+class="stat-badge-dot[^"]*"><\/div>\s*/g, '');
    changed = true;
  }

  // 2. Remove &bull; or • in badge kickers / dividers
  if (content.includes('&bull;')) {
    content = content.replace(/&bull;/g, '|');
    changed = true;
  }

  if (content.includes('• Lead Architect')) {
    content = content.replace('• Lead Architect', '| Lead Architect');
    changed = true;
  }

  if (content.includes('<span>•</span>')) {
    content = content.replace('<span>•</span>', '<span style="color:#cbd5e1">|</span>');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Cleaned dots from:', filePath);
  }
}

function scan(currentDir) {
  for (const f of fs.readdirSync(currentDir)) {
    const full = path.join(currentDir, f);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (f.endsWith('.html')) {
      processFile(full);
    }
  }
}

scan(dir);
console.log('Done scanning and removing dots.');

