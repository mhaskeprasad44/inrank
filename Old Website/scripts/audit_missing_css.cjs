const fs = require('fs');

const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const corpCss = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const navCss = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');
const allCss = corpCss + '\n' + navCss;

const classMatches = [...html.matchAll(/class="([^"]+)"/g)];
const allClasses = new Set();
classMatches.forEach(m => {
  m[1].split(/\s+/).forEach(c => {
    if (c) allClasses.add(c);
  });
});

console.log('Total unique classes in index.html:', allClasses.size);

const missing = [];
const present = [];

allClasses.forEach(cls => {
  // simple check: does allCss include '.' + cls
  const regex = new RegExp('\\.' + cls + '(?![a-zA-Z0-9_-])');
  if (!regex.test(allCss)) {
    missing.push(cls);
  } else {
    present.push(cls);
  }
});

console.log('\n--- MISSING CLASSES (' + missing.length + ') ---');
console.log(missing.join(', '));

