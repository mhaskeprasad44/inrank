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

const canonicalMap = new Map();

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(baseDir, file).replace(/\\/g, '/');

  const match = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  if (match) {
    const canonical = match[1].trim();
    if (!canonicalMap.has(canonical)) {
      canonicalMap.set(canonical, []);
    }
    canonicalMap.get(canonical).push(rel);
  } else {
    console.log(`[NO CANONICAL] in ${rel}`);
  }
}

console.log('Total unique canonical URLs:', canonicalMap.size);
const sortedCanonicals = Array.from(canonicalMap.keys()).sort();

sortedCanonicals.forEach((c, i) => {
  console.log(`${(i + 1).toString().padStart(3, ' ')}. ${c}`);
});

fs.writeFileSync('scripts/unique_canonical_urls.json', JSON.stringify(sortedCanonicals, null, 2), 'utf8');

