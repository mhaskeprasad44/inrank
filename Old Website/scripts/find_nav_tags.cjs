const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const regex = /<nav\b[^>]*>/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[0]);
}

