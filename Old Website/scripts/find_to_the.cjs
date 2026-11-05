const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, idx) => {
  if (l.toLowerCase().includes('greytothegreen') || l.toLowerCase().includes('to the')) {
    console.log((idx+1) + ': ' + l.trim());
  }
});

