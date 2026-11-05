const fs = require('fs');
const path = require('path');

const cssDir = 'inrank2.0/css';
fs.readdirSync(cssDir).forEach(f => {
  const content = fs.readFileSync(path.join(cssDir, f), 'utf8');
  if (content.includes('ft-mark')) {
    console.log(`Found ft-mark in ${f}`);
    const idx = content.indexOf('ft-mark');
    console.log(content.slice(Math.max(0, idx - 50), Math.min(content.length, idx + 800)));
  }
});

