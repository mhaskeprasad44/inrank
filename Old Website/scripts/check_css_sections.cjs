const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('/*') || l.includes('====') || l.includes('────')) {
    console.log((idx + 1) + ': ' + l.trim());
  }
});

