const fs = require('fs');
const path = require('path');

const dir = 'inrank2.0/our-work';
fs.readdirSync(dir).filter(f => f.endsWith('.html')).forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const idx = content.indexOf('The Commercial Challenge & Solution');
  console.log(`\n========================================`);
  console.log(`PAGE: ${f}`);
  if (idx !== -1) {
    console.log(content.slice(idx, idx + 600).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  } else {
    console.log('Commercial Challenge not found');
  }
});

