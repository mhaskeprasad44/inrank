const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const regex = /class=["']([^"']+)["']/g;
let m;
const htmlClasses = new Set();
while ((m = regex.exec(html)) !== null) {
  m[1].split(/\s+/).forEach(c => {
    if (c.trim()) htmlClasses.add(c.trim());
  });
}

const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8') + '\n' + fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

console.log('Total classes in index.html:', htmlClasses.size);
const missingInCss = [];
htmlClasses.forEach(cls => {
  if (!css.includes('.' + cls) && !cls.startsWith('is-') && !cls.startsWith('js-')) {
    missingInCss.push(cls);
  }
});
console.log('Classes in index.html missing from CSS:');
missingInCss.forEach(c => console.log('  .' + c));

