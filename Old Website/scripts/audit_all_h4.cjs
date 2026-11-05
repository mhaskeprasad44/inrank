const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('inrank2.0');

function getHtmlFiles(dir) {
  let res = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      res = res.concat(getHtmlFiles(full));
    } else if (entry.name.endsWith('.html')) {
      res.push(full);
    }
  }
  return res;
}

const htmlFiles = getHtmlFiles(baseDir);

const allH4s = [];

htmlFiles.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const rel = path.relative(baseDir, f).replace(/\\/g, '/');
  const regex = /<h4([^>]*)>([\s\S]*?)<\/h4>/gi;
  let m;
  while ((m = regex.exec(c)) !== null) {
    allH4s.push({
      file: rel,
      attr: m[1].trim(),
      text: m[2].replace(/<[^>]+>/g, '').trim()
    });
  }
});

console.log('Total <h4> tags found across all 120 files:', allH4s.length);

const byClass = {};
allH4s.forEach(item => {
  const key = item.attr || 'NO_ATTR';
  byClass[key] = (byClass[key] || 0) + 1;
});

console.log('Distribution of <h4> tags by attributes/class:');
console.log(byClass);

