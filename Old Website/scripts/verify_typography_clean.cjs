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
let remainingEm = 0;
let remainingEn = 0;
let remainingEntities = 0;
let remainingAndComma = 0;

for (const f of allFiles) {
  if (f.startsWith('scripts\\') || f.startsWith('scripts/')) continue;
  const content = fs.readFileSync(f, 'utf8');
  const em = (content.match(/[—]/g) || []).length;
  const en = (content.match(/[–]/g) || []).length;
  const entities = (content.match(/&mdash;|&ndash;|&#8212;|&#8211;/g) || []).length;
  const andComma = (content.match(/\band,\s*|\bAnd,\s*|&amp;,\s*/g) || []).length;

  if (em > 0 || en > 0 || entities > 0 || andComma > 0) {
    console.log('File still has issues:', f, { em, en, entities, andComma });
  }
  remainingEm += em;
  remainingEn += en;
  remainingEntities += entities;
  remainingAndComma += andComma;
}

console.log('=== Final Verification Results ===');
console.log('Remaining em dashes:', remainingEm);
console.log('Remaining en dashes:', remainingEn);
console.log('Remaining entities:', remainingEntities);
console.log('Remaining "and," occurrences:', remainingAndComma);

