const fs = require('fs');

const files = [
  'inrank2.0/case-studies/cytos.html',
  'inrank2.0/case-studies/fludio.html',
  'inrank2.0/case-studies/greytothegreen.html'
];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  console.log(f, 'canonical:', m ? m[1] : 'NONE');
});

