const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('scripts').filter(f => f.endsWith('.cjs'));

function findInFiles(needle) {
  console.log(`=== Searching for "${needle}" ===`);
  files.forEach(f => {
    const text = fs.readFileSync(path.join('scripts', f), 'utf8');
    if (text.includes(needle)) {
      console.log(`Found in: scripts/${f} (${text.indexOf(needle)})`);
    }
  });
}

findInFiles('hero-visual-card');
findInFiles('services-grid');
findInFiles('manifesto-h2');

