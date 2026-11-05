const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const corpCss = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const navCss = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const combinedCss = corpCss + '\n' + navCss;

const classMatches = html.match(/class="([^"]+)"/g) || [];
const uniqueClasses = new Set();
classMatches.forEach(m => {
  const cls = m.replace('class="', '').replace('"', '').split(/\s+/);
  cls.forEach(c => { if (c) uniqueClasses.add(c); });
});

const missing = [];
for (const c of uniqueClasses) {
  if (!combinedCss.includes('.' + c)) {
    missing.push(c);
  }
}
console.log('True missing classes count:', missing.length);
console.log('True missing classes:', missing);

