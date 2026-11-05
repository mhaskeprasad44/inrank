const fs = require('fs');

const content = fs.readFileSync('../cytos/src/pages/AboutPage.jsx', 'utf8');
const idx = content.indexOf('id=\\"rfqModal\\"');
console.log(content.substring(idx - 100, idx + 3000));
