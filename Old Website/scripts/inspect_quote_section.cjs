const fs = require('fs');

const cytos = fs.readFileSync('inrank2.0/our-work/cytos.html', 'utf8');
const qIdx = cytos.indexOf('blockquote');
console.log(cytos.slice(qIdx - 150, qIdx + 600));

