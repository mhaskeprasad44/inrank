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

function cleanText(text) {
  let res = text;

  // 1. "and," and "And,"
  res = res.replace(/\bAnd,\s*/g, 'And ');
  res = res.replace(/\band,\s*/g, 'and ');
  res = res.replace(/\bAND,\s*/g, 'AND ');
  res = res.replace(/\band,\b/g, 'and');
  res = res.replace(/\bAnd,\b/g, 'And');
  res = res.replace(/&amp;,\s*/g, '&amp; ');

  // 2. HTML dash entities
  res = res.replace(/\s*&mdash;\s*/g, ' - ');
  res = res.replace(/&mdash;/g, ' - ');
  res = res.replace(/\s*&#8212;\s*/g, ' - ');
  res = res.replace(/&#8212;/g, ' - ');
  res = res.replace(/\s*&ndash;\s*/g, ' - ');
  res = res.replace(/&ndash;/g, '-');
  res = res.replace(/\s*&#8211;\s*/g, ' - ');
  res = res.replace(/&#8211;/g, '-');

  // 3. Numbers/ranges with en-dash or em-dash: e.g. 5–7, Mon–Sat
  res = res.replace(/(\d+)\s*[—–]\s*(\d+)/g, (m, a, b) => a + '-' + b);
  res = res.replace(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s*[—–]\s*(Mon|Tue|Wed|Thu|Fri|Sat|Sun)/gi, (m, a, b) => a + '-' + b);

  // 4. Em-dashes in titles and prose: e.g. "Title — Subtitle" or "word—word"
  res = res.replace(/\s*[—]\s*/g, ' - ');
  res = res.replace(/[—]/g, ' - ');

  // 5. En-dashes with spaces: "9:30 AM – 7:30 PM"
  res = res.replace(/\s*[–]\s*/g, ' - ');
  res = res.replace(/[–]/g, '-');

  // 6. Clean up any accidental double spaces around hyphens
  res = res.replace(/\s{2,}-\s{2,}/g, ' - ');
  res = res.replace(/\s{2,}-/g, ' -');
  res = res.replace(/-\s{2,}/g, '- ');

  return res;
}

const allFiles = getAllFiles('.');
console.log('Total files scanned across repo:', allFiles.length);

let totalChangedFiles = 0;
let totalEmDashesRemoved = 0;
let totalEnDashesRemoved = 0;
let totalAndCommasFixed = 0;

for (const f of allFiles) {
  if (f.startsWith('scripts\\') || f.startsWith('scripts/')) continue;
  
  const original = fs.readFileSync(f, 'utf8');
  
  const emCount = (original.match(/[—]/g) || []).length;
  const enCount = (original.match(/[–]/g) || []).length;
  const andCount = (original.match(/\band,\s*|\bAnd,\s*|&amp;,\s*/g) || []).length;

  const cleaned = cleanText(original);

  if (cleaned !== original) {
    fs.writeFileSync(f, cleaned, 'utf8');
    totalChangedFiles++;
    totalEmDashesRemoved += emCount;
    totalEnDashesRemoved += enCount;
    totalAndCommasFixed += andCount;
  }
}

console.log('--- Typography Cleanup Completed ---');
console.log('Total files modified:', totalChangedFiles);
console.log('Total em dashes removed:', totalEmDashesRemoved);
console.log('Total en dashes removed:', totalEnDashesRemoved);
console.log('Total "and," commas fixed:', totalAndCommasFixed);

