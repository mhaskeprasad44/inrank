const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts = ['.html']) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, exts));
    } else if (exts.includes(path.extname(fullPath))) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = getAllFiles('inrank2.0');
const faviconTags = new Set();
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/<link[^>]*rel=["'][^"']*icon[^"']*["'][^>]*>/gi);
  if (matches) {
    matches.forEach(m => faviconTags.add(m));
  }
}
console.log('Found favicon tag variations:');
console.log(Array.from(faviconTags));

