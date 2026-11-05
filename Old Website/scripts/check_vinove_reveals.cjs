const fs = require('fs');
const html = fs.readFileSync('scripts/vinove_raw.html', 'utf8');

const regex = /<([a-z0-9]+)[^>]*data-reveal[^>]*>/gi;
let m;
const matches = [];
while ((m = regex.exec(html)) !== null) {
  matches.push(m[0].substring(0, 100));
}
console.log('Vinove data-reveal elements count:', matches.length);
matches.forEach((m, idx) => console.log((idx+1) + ': ' + m));

