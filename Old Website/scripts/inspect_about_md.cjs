const fs = require('fs');
const md = fs.readFileSync('inrank_web_details.md', 'utf8');

console.log(md.slice(0, 3000));

