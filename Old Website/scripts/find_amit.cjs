const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const idx = html.indexOf('Amit Deshmukh');
console.log('Index of Amit Deshmukh in index.html:', idx);
if (idx !== -1) {
  console.log(html.slice(idx - 200, idx + 400));
} else {
  console.log('Amit Deshmukh not in index.html, searching all files...');
}

