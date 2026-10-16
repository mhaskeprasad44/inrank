const fs = require('fs');

const content = fs.readFileSync('../cytos/src/pages/Cnc6060Page.jsx', 'utf8');
const idx = content.indexOf('rfqModal');
console.log(content.substring(idx, idx + 1000));
