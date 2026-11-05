const fs = require('fs');
const c = fs.readFileSync('inrank2.0/about.html', 'utf8');
const lines = c.split('\n');
lines.forEach((l, i) => {
  if (l.toLowerCase().includes('engineered & executed') || l.toLowerCase().includes('baner lab') || l.toLowerCase().includes('directly by')) {
    console.log(i + ': ' + l.trim());
  }
});

