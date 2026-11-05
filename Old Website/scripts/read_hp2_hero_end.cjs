const fs = require('fs');
const hero = fs.readFileSync('scripts/hp2_hero_raw.html', 'utf8');

const lines = hero.split('\n');
console.log('=== LINES 100 TO 200 ===');
console.log(lines.slice(100, 160).join('\n'));

console.log('=== LINES 200 TO 294 ===');
console.log(lines.slice(200).join('\n'));

