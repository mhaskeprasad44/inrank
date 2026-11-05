const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');
console.log('Total lines in corporate.css:', lines.length);

// Print sections / comments in corporate.css
lines.forEach((l, i) => {
  if (l.includes('/* ===') || l.includes('/* ──') || l.includes('/* SECTION') || l.includes('/* 1.') || l.includes('/* 2.') || l.includes('/* 3.') || l.includes('/* 4.') || l.includes('/* 5.')) {
    console.log(`Line ${i + 1}: ${l}`);
  }
});

