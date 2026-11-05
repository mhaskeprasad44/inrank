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
let totalModified = 0;
let totalReplacements = 0;

for (const f of allFiles) {
  if (f.startsWith('scripts\\') || f.startsWith('scripts/')) continue;
  let content = fs.readFileSync(f, 'utf8');
  const original = content;

  // 1. "Baner Engineering Lab Location" -> "Baner Office"
  content = content.replace(/BANER ENGINEERING LAB LOCATION/g, 'BANER OFFICE');
  content = content.replace(/Baner Engineering Lab Location/g, 'Baner Office');
  content = content.replace(/baner engineering lab location/g, 'baner office');

  // 2. "Baner Engineering Lab" -> "Baner Office"
  content = content.replace(/BANER ENGINEERING LAB/g, 'BANER OFFICE');
  content = content.replace(/Baner Engineering Lab/g, 'Baner Office');
  content = content.replace(/Baner engineering lab/g, 'Baner office');
  content = content.replace(/baner engineering lab/g, 'baner office');

  // 3. "Baner Tech Lab Location" -> "Baner Office"
  content = content.replace(/Baner Tech Lab Location/g, 'Baner Office');
  content = content.replace(/Baner Tech Lab/g, 'Baner Office');
  content = content.replace(/Baner tech lab/g, 'Baner office');

  // 4. "Baner Lab" / "Baner lab" (when referring to the location)
  content = content.replace(/Baner HQ Lab/g, 'Baner HQ Office');
  content = content.replace(/Baner Lab/g, 'Baner Office');
  content = content.replace(/Baner lab/g, 'Baner office');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    totalModified++;
    totalReplacements += (original.match(/Baner\s+(?:Engineering\s+Lab|Tech\s+Lab|Lab)/gi) || []).length;
  }
}

console.log('--- Baner Office Replacement Completed ---');
console.log('Total files modified:', totalModified);
console.log('Total replacements made:', totalReplacements);

