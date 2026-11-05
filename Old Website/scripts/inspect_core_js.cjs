const fs = require('fs');
const js = fs.readFileSync('inrank2.0/js/core.js', 'utf8');

const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('tab') || l.includes('pricing') || l.includes('addEventListener')) {
    console.log(`L${i+1}: ${l.slice(0, 100)}`);
  }
});

