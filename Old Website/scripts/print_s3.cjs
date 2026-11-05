const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const s3 = html.slice(html.indexOf('id="philosophy"'), html.indexOf('id="process"'));
console.log(s3);

