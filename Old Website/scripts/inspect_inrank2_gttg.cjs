const fs = require('fs');

const txt = fs.readFileSync('inrank2.0/our-work/greytothegreen.html', 'utf8');

function getSection(heading) {
  const idx = txt.indexOf(heading);
  if (idx === -1) return 'NOT FOUND: ' + heading;
  return txt.slice(idx, idx + 1000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
}

console.log('--- inrank2.0/our-work/greytothegreen.html ---');
console.log(getSection('Executive Summary') || getSection('About'));
console.log(txt.slice(txt.indexOf('<main'), txt.indexOf('<main') + 2000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

