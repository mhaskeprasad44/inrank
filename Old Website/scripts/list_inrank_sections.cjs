const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const regex = /<section[^>]*class=["']([^"']+)["'][^>]*>/g;
let m;
const sections = [];
while ((m = regex.exec(html)) !== null) {
  sections.push(m[1]);
}
console.log('Inrank 2.0 sections:');
sections.forEach((s, idx) => console.log((idx+1) + ': ' + s));

