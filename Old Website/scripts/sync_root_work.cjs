const fs = require('fs');
const path = require('path');

['our-work', 'case-studies'].forEach(d => {
  if (fs.existsSync(d)) {
    fs.readdirSync(d).filter(f => f.endsWith('.html')).forEach(f => {
      const src = path.join('inrank2.0', d, f);
      const dst = path.join(d, f);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dst);
      }
    });
  }
});
console.log('Synchronized cleaned work files to root our-work and case-studies!');

