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
const matches = [];

for (const f of allFiles) {
  if (f.startsWith('scripts\\') || f.startsWith('scripts/')) continue;
  const content = fs.readFileSync(f, 'utf8');
  const regex = /(Baner\s+(?:Engineering\s+Lab(?:\s+Location)?|Tech\s+Lab(?:\s+Location)?|HQ\s+Lab|Lab))/gi;
  let m;
  while ((m = regex.exec(content)) !== null) {
    const idx = m.index;
    matches.push({
      file: f,
      matched: m[0],
      snippet: content.slice(Math.max(0, idx - 40), Math.min(content.length, idx + 60)).replace(/\n/g, ' ')
    });
  }
}

console.log('Total Baner Lab occurrences:', matches.length);
matches.forEach(m => console.log(m.file + ' [' + m.matched + ']: ' + m.snippet));

