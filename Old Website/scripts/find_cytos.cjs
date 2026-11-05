const fs = require('fs');
const path = require('path');

function walk(dir, files = []) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') walk(full, files);
    } else if (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.css')) {
      files.push(full);
    }
  }
  return files;
}

const files = walk('inrank2.0');
for (const f of files) {
  if (f.includes('\\blog\\')) continue;
  const content = fs.readFileSync(f, 'utf8');
  if (/cytos/i.test(content)) {
    const lines = content.split('\n');
    lines.forEach((l, idx) => {
      if (/cytos/i.test(l)) {
        console.log(`${f}:${idx + 1}: ${l.trim().slice(0, 140)}`);
      }
    });
  }
}
