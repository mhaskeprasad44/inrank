const fs = require('fs');

const navCss = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const lines = navCss.split('\n');
lines.forEach((l, i) => {
  if (l.includes('nav-dock') || l.includes('nav-bar') || l.includes('scroll') || l.includes('data-dock') || l.includes('shrink')) {
    if (i < 150) console.log(`Line ${i + 1}: ${l}`);
  }
});

