const fs = require('fs');

if (fs.existsSync('our-work/greytothegreen.html')) {
  const txt = fs.readFileSync('our-work/greytothegreen.html', 'utf8');
  console.log('--- ROOT our-work/greytothegreen.html snippet ---');
  const h1Idx = txt.indexOf('<h1');
  console.log(txt.slice(h1Idx, h1Idx + 1200));
}

