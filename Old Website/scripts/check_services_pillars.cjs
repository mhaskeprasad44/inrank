const fs = require('fs');
const content = fs.readFileSync('inrank2.0/services.html', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Pillar 01') || l.includes('pillar-') || l.includes('Search Dominance')) {
    console.log(`L${i+1}: ${l.trim().slice(0, 100)}`);
  }
});

