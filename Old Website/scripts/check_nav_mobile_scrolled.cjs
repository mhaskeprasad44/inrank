const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('is-scrolled') || (l.includes('.nav-bar') && (l.includes('@media') || l.includes('background')))) {
    console.log(`L${i+1}: ${l.trim()}`);
  }
});

