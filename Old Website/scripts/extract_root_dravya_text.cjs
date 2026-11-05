const fs = require('fs');

const txt = fs.readFileSync('our-work/dravyafinancial.html', 'utf8');

function getSection(heading) {
  const idx = txt.indexOf(heading);
  if (idx === -1) return 'NOT FOUND';
  return txt.slice(idx, idx + 1500).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
}

console.log('--- About The Project ---');
console.log(getSection('About The Project &amp; Background'));

console.log('\n--- Challenges Solved ---');
console.log(getSection('Challenges Solved'));

console.log('\n--- Strategic Solutions ---');
console.log(getSection('Strategic Solutions &amp; Key Features'));

