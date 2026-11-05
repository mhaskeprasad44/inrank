const fs = require('fs');
const h = fs.readFileSync('inrank2.0/index.html', 'utf8');
const header = h.match(/<header id="nav"[\s\S]*?<\/header>/i)[0];
const lines = header.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Services') || l.includes('services')) {
    console.log(i + ': ' + l);
  }
});

