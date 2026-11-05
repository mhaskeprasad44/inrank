const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts = ['.html', '.js', '.json', '.php', '.txt', '.md']) {
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
console.log('Total files scanned:', allFiles.length);

const modifiedFiles = [];

for (const f of allFiles) {
  if (f.startsWith('scripts\\') || f.startsWith('scripts/')) continue;
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // 1. and, replacement
  content = content.replace(/\bAnd,\s+/g, 'And ');
  content = content.replace(/\band,\s+/g, 'and ');
  content = content.replace(/\bAND,\s+/g, 'AND ');
  content = content.replace(/\band,\b/g, 'and');
  content = content.replace(/\bAnd,\b/g, 'And');
  content = content.replace(/&amp;,\s+/g, '&amp; ');

  // 2. HTML dash entities
  content = content.replace(/\s*&mdash;\s*/g, ' - ');
  content = content.replace(/&mdash;/g, ' - ');
  content = content.replace(/\s*&#8212;\s*/g, ' - ');
  content = content.replace(/&#8212;/g, ' - ');

  content = content.replace(/\s*&ndash;\s*/g, ' - ');
  content = content.replace(/&ndash;/g, '-');
  content = content.replace(/\s*&#8211;\s*/g, ' - ');
  content = content.replace(/&#8211;/g, '-');

  // 3. Em dashes (— / \u2014)
  // When surrounded by spaces or at title boundaries
  content = content.replace(/\s+—\s+/g, ' - ');
  content = content.replace(/—\s+/g, ' - ');
  content = content.replace(/\s+—/g, ' - ');
  content = content.replace(/([0-9])—([0-9])/g, '$1-$2');
  content = content.replace(/—/g, ' - ');

  // 4. En dashes (– / \u2013)
  content = content.replace(/\s+–\s+/g, ' - ');
  content = content.replace(/–\s+/g, ' - ');
  content = content.replace(/\s+–/g, ' - ');
  content = content.replace(/([0-9])–([0-9])/g, '$1-$2');
  content = content.replace(/([a-zA-Z])–([a-zA-Z])/g, '$1-$2');
  content = content.replace(/–/g, '-');

  // Clean up double spaces if introduced
  content = content.replace(/  -  /g, ' - ');
  content = content.replace(/ -  /g, ' - ');
  content = content.replace(/  - /g, ' - ');

  if (content !== original) {
    modifiedFiles.push({
      file: f,
      diffCount: (original.match(/[—–]|&mdash;|&ndash;|&#8212;|&#8211;|\band,/g) || []).length
    });
  }
}

console.log('Files that will be modified:', modifiedFiles.length);
console.log('Sample of 20 modified files:');
modifiedFiles.slice(0, 20).forEach(m => console.log('  ' + m.file + ' (' + m.diffCount + ' occurrences)'));

