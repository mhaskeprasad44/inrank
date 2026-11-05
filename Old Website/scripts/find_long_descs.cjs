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
const longDescs = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(baseDir, file).replace(/\\/g, '/');

  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                    content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  if (descMatch) {
    const desc = descMatch[1].trim();
    if (desc.length > 160) {
      longDescs.push({ file: rel, fullPath: file, desc, len: desc.length });
    }
  }
});

console.log('Total files with meta description > 160 chars:', longDescs.length);
fs.writeFileSync('scripts/long_descs.json', JSON.stringify(longDescs, null, 2), 'utf8');
longDescs.slice(0, 10).forEach(d => {
  console.log(`[${d.len}] ${d.file}: ${d.desc.slice(0, 80)}...`);
});

