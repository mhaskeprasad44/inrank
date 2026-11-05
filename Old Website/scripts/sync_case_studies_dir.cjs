const fs = require('fs');
const path = require('path');

if (!fs.existsSync('inrank2.0/case-studies')) {
  fs.mkdirSync('inrank2.0/case-studies', { recursive: true });
}

const workDir = 'inrank2.0/our-work';
const files = fs.readdirSync(workDir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const src = path.join(workDir, f);
  const dest = path.join('inrank2.0/case-studies', f);
  fs.copyFileSync(src, dest);
});

console.log(`Synced ${files.length} case study pages to inrank2.0/case-studies/`);

