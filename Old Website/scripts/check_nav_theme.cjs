const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('.logo-black') || l.includes('.logo-white') || l.includes('nav-logo-name') || l.includes('nav-link')) {
    if (l.includes('color:') || l.includes('display:')) {
      console.log(`L${i+1}: ${l.trim()}`);
    }
  }
});

