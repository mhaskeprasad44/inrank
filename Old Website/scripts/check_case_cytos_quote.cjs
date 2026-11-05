const fs = require('fs');

const cytos = fs.readFileSync('inrank2.0/case-studies/cytos.html', 'utf8');
const qIdx = cytos.indexOf('blockquote');
console.log(cytos.slice(qIdx - 50, qIdx + 300));

