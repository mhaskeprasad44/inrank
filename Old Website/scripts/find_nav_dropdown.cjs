const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const matches = html.match(/class="[^"]*dropdown[^"]*"/g);
console.log('Dropdown classes:', matches);

const idx = html.indexOf('Search &amp; AI Discovery');
if (idx !== -1) {
  console.log('Snippet around Search & AI Discovery:');
  console.log(html.slice(idx - 100, idx + 800));
}

