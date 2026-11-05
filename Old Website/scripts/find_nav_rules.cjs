const fs = require('fs');
const path = require('path');

const cssDir = 'inrank2.0/css';
fs.readdirSync(cssDir).filter(f => f.endsWith('.css')).forEach(f => {
  const css = fs.readFileSync(path.join(cssDir, f), 'utf8');
  if (css.includes('#nav') || css.includes('.nav-bar') || css.includes('.site-header')) {
    console.log(`--- Found in ${f} ---`);
    css.split('\n').forEach((line, idx) => {
      if (line.includes('#nav') || line.includes('.nav-bar') || line.includes('.site-header')) {
        console.log(`  L${idx+1}: ${line.trim()}`);
      }
    });
  }
});
