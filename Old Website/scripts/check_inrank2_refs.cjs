const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      files = files.concat(walk(p));
    } else if (f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.js')) {
      files.push(p);
    }
  });
  return files;
}

const allFiles = walk('inrank2.0');
let externalRefs = [];
allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/(?:src|href)=["']([^"']+)["']/g) || [];
  matches.forEach(m => {
    const val = m.replace(/^(?:src|href)=["']/, '').replace(/["']$/, '');
    if (val.startsWith('../..') || val.startsWith('../') && !val.startsWith('../../')) {
      // Check if it resolves inside inrank2.0
      const resolved = path.resolve(path.dirname(file), val);
      const inrank2Root = path.resolve('inrank2.0');
      if (!resolved.startsWith(inrank2Root)) {
        externalRefs.push({ file, val, resolved });
      }
    }
  });
});

console.log('Total files scanned:', allFiles.length);
console.log('External refs outside inrank2.0:', externalRefs.length);
if (externalRefs.length > 0) {
  console.log(externalRefs.slice(0, 10));
}
