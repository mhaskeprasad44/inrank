const fs = require('fs');
const hero = fs.readFileSync('scripts/hp2_hero_raw.html', 'utf8');

// Print outline of the hero section
const lines = hero.split('\n');
console.log('Total lines:', lines.length);

// Print first 50 lines
console.log('=== FIRST 40 LINES ===');
console.log(lines.slice(0, 40).join('\n'));

// Print lines around headline (lines 40 to 120)
console.log('=== LINES 40 TO 100 ===');
console.log(lines.slice(40, 100).join('\n'));

