const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const classMatches = html.match(/class="([^"]+)"/g) || [];
const uniqueClasses = new Set();
classMatches.forEach(m => {
  const cls = m.replace('class="', '').replace('"', '').split(/\s+/);
  cls.forEach(c => { if (c) uniqueClasses.add(c); });
});

console.log('Total unique classes in index.html:', uniqueClasses.size);
const missing = [];
for (const c of uniqueClasses) {
  if (!css.includes('.' + c)) {
    missing.push(c);
  }
}
console.log('Missing classes count:', missing.length);
console.log('Missing classes:', missing);

