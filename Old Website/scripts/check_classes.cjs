const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const navCss = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const regex = /class=["']([^"']+)["']/g;
const usedClasses = new Set();
let match;
while ((match = regex.exec(html)) !== null) {
  match[1].split(/\s+/).forEach(c => c && usedClasses.add(c));
}

const missing = [];
for (const c of usedClasses) {
  if (!css.includes('.' + c) && !navCss.includes('.' + c)) {
    missing.push(c);
  }
}
console.log('Total used classes:', usedClasses.size);
console.log('Classes not found in corporate.css or nav.css:');
console.log(missing);

