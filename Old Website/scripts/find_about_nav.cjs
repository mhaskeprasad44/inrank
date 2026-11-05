const fs = require('fs');
const h = fs.readFileSync('inrank2.0/index.html', 'utf8');
const header = h.match(/<header id="nav"[\s\S]*?<\/header>/i)[0];

const lines = header.split('\n');
lines.forEach((l, i) => {
  if (l.includes('About') || l.includes('about.html') || l.includes('about')) {
    console.log(lines.slice(Math.max(0, i-3), i + 15).join('\n'));
    console.log('---');
  }
});

