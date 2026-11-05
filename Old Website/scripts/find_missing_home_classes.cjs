const fs = require('fs');

const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

// Extract all class names from index.html
const classRegex = /class="([^"]+)"/g;
let m;
const classes = new Set();
while ((m = classRegex.exec(html)) !== null) {
  m[1].split(/\s+/).forEach(c => {
    if (c.trim()) classes.add(c.trim());
  });
}

console.log('Total unique classes in index.html:', classes.size);
const missing = [];
for (const cls of classes) {
  const r = new RegExp('\\.' + cls + '[\\s\\{\\:\\.\\[\\,>]');
  if (!r.test(css)) {
    missing.push(cls);
  }
}

console.log('Classes missing in corporate.css:', missing);

