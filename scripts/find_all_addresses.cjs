const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function scan(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    if (['node_modules', '.git', 'dist'].includes(f)) return;
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      files = files.concat(scan(fp));
    } else if (f.endsWith('.html') || f.endsWith('.apib') || f.endsWith('.txt') || f.endsWith('.md')) {
      files.push(fp);
    }
  });
  return files;
}

const allFiles = scan(ROOT_DIR);
const results = [];

allFiles.forEach(file => {
  const rel = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    if (line.includes('streetAddress') || 
        line.includes('Shree Bhagwati') || 
        line.includes('Pancard Club') || 
        (line.includes('411045') && (line.includes('Baner') || line.includes('Office')))) {
      results.push({ file: rel, lineNum: idx + 1, text: line.trim() });
    }
  });
});

console.log(`Found ${results.length} occurrences across files:`);
results.forEach(r => console.log(`${r.file}:${r.lineNum} -> ${r.text}`));
