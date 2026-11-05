const fs = require('fs');
const s = fs.readFileSync('inrank2.0/index.html', 'utf8');
console.log(s.slice(26450, 26700));

