const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('scripts').filter(f => f.endsWith('.cjs'));

files.forEach(f => {
  const text = fs.readFileSync(path.join('scripts', f), 'utf8');
  if (text.includes('people-meta')) {
    console.log(`Found people-meta in scripts/${f}`);
  }
});

