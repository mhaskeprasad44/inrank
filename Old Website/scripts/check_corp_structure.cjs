const fs = require('fs');
const c = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = c.split('\n');

console.log('Total lines:', lines.length);
lines.forEach((l, i) => {
  if (l.startsWith('/* ══') || l.startsWith('/* ==') || l.startsWith('/* Section') || l.startsWith('/* SECTION')) {
    console.log(`${i+1}: ${l}`);
  }
});

