const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('pricing') || l.includes('tab-btn') || l.includes('tier-')) {
    console.log(`L${i+1}: ${l.slice(0, 100)}`);
  }
});

