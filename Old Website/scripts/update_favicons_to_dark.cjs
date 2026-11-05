const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts = ['.html']) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === '.git' || file === '.gemini' || file.startsWith('.')) continue;
    const fullPath = path.join(dir, file);
    try {
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        results = results.concat(getAllFiles(fullPath, exts));
      } else if (exts.includes(path.extname(fullPath))) {
        results.push(fullPath);
      }
    } catch(e) {}
  }
  return results;
}

const allFiles = getAllFiles('.');
let modifiedCount = 0;

for (const f of allFiles) {
  if (f.startsWith('scripts\\') || f.startsWith('scripts/')) continue;
  let content = fs.readFileSync(f, 'utf8');
  const original = content;

  // Replace any favicon link referencing logo.png
  content = content.replace(
    /<link[^>]*rel=["'](?:shortcut )?icon["'][^>]*href=["'][^"']*logo\.png["'][^>]*>/gi,
    '<link rel="icon" type="image/svg+xml" href="/img/inrank-dark-logo.svg" />\n  <link rel="alternate icon" href="/favicon.ico" />'
  );

  content = content.replace(
    /<link[^>]*rel=["']apple-touch-icon["'][^>]*href=["'][^"']*logo\.png["'][^>]*>/gi,
    '<link rel="apple-touch-icon" href="/img/inrank-dark-logo.svg" />'
  );

  // Normalize all icon links
  content = content.replace(
    /<link rel="icon" type="image\/png" href="\/img\/inrank-dark-logo\.svg" \/>/gi,
    '<link rel="icon" type="image/svg+xml" href="/img/inrank-dark-logo.svg" />\n  <link rel="alternate icon" href="/favicon.ico" />'
  );

  content = content.replace(
    /<link rel="shortcut icon" type="image\/png" href="\/img\/inrank-dark-logo\.svg" \/>/gi,
    ''
  );

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    modifiedCount++;
  }
}

console.log('--- Favicons Fully Standardized to Dark Logo ---');
console.log('Total HTML files updated:', modifiedCount);
