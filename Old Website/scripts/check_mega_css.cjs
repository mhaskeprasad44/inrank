const fs = require('fs');
const nav = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');
const lines = nav.split('\n');
lines.forEach((l, i) => {
  if (l.includes('drop-mega') || l.includes('mega-grid-wrap') || l.includes('mega-rail') || l.includes('mega-pillars-grid')) {
    console.log(`${i+1}: ${l.trim()}`);
  }
});

