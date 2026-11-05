const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const idx = html.indexOf('Fludio Interiors');
console.log('Index of Fludio Interiors:', idx);
if (idx !== -1) {
  console.log(html.slice(idx - 200, idx + 800));
}

