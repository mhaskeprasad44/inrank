const fs = require('fs');
const h = fs.readFileSync('inrank2.0/index.html', 'utf8');
const lines = h.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Engineered & executed directly by') || l.includes('Baner Lab')) {
    console.log(lines.slice(Math.max(0, i-4), i + 10).join('\n'));
    console.log('---');
  }
});

