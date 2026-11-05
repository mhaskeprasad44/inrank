const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');
console.log('--- Footer Search ---');
lines.forEach((l, idx) => {
  if (l.includes('.site-footer') || l.includes('.footer-grid') || l.includes('.footer-brand')) {
    console.log((idx+1) + ': ' + l);
  }
});

