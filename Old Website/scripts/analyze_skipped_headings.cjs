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
const filesWithSkips = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(baseDir, file).replace(/\\/g, '/');

  const headingRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  const list = [];
  let hm;
  while ((hm = headingRegex.exec(content)) !== null) {
    list.push({
      level: parseInt(hm[1].charAt(1)),
      tag: hm[1].toLowerCase(),
      text: hm[2].replace(/<[^>]+>/g, '').trim().slice(0, 50)
    });
  }

  let prev = 0;
  const skips = [];
  for (const item of list) {
    if (prev > 0 && item.level > prev + 1) {
      skips.push({ from: prev, to: item.level, text: item.text });
    }
    prev = item.level;
  }

  if (skips.length > 0) {
    filesWithSkips.push({ file: rel, fullPath: file, skips, headingsCount: list.length });
  }
}

console.log('Total files with skipped headings:', filesWithSkips.length);
fs.writeFileSync('scripts/skipped_headings_list.json', JSON.stringify(filesWithSkips, null, 2), 'utf8');

// Group files by pattern
const groups = {};
filesWithSkips.forEach(f => {
  const skipDesc = f.skips.map(s => `H${s.from}->H${s.to}`).join(', ');
  if (!groups[skipDesc]) groups[skipDesc] = [];
  groups[skipDesc].push(f.file);
});

for (const [pattern, files] of Object.entries(groups)) {
  console.log(`\nPattern: ${pattern} (${files.length} files)`);
  console.log('Sample files:', files.slice(0, 5));
}

