const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');

lines.forEach((l, i) => {
  if (l.includes('.niches-section')) {
    console.log(`Line ${i + 1}: ${l}`);
  }
});

