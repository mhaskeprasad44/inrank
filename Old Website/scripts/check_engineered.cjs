const fs = require('fs');
const h = fs.readFileSync('inrank2.0/index.html', 'utf8');
const lines = h.split('\n');
lines.forEach((l, i) => {
  if (l.toLowerCase().includes('engineered')) {
    console.log(i + ': ' + l.trim());
  }
});

