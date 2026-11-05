const fs = require('fs');
const md = fs.readFileSync('inrank_web_details.md', 'utf8');

const s4 = md.indexOf('## 4.');
console.log(md.slice(s4, s4 + 3000));

