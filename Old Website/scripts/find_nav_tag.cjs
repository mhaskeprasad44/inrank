const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const matches = html.match(/<header[^>]*>/g);
console.log('Headers:', matches);
const navMatches = html.match(/<nav[^>]*>/g);
console.log('Navs:', navMatches);

