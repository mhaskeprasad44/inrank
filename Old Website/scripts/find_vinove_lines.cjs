const fs = require('fs');

const c = fs.readFileSync('inrank2.0/our-work/dravyafinancial.html', 'utf8');
const lines = c.split('\n');
lines.forEach((l, i) => {
  if (l.toLowerCase().includes('vinove')) {
    console.log(`Line ${i + 1}: ${l.trim()}`);
  }
});

