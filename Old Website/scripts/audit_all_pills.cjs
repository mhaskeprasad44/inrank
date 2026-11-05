const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('inrank2.0');
console.log('Total HTML files:', files.length);

let totalPills = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const pills = content.match(/class="[^"]*(eyebrow-pill|pill-badge|badge-pill)[^"]*"/g) || [];
  const greenDots = content.match(/•|&#8226;|&bull;/g) || [];
  if (pills.length > 0) {
    console.log(`${f}: ${pills.length} pill classes`);
    totalPills += pills.length;
  }
});
console.log('Total pill classes found:', totalPills);

