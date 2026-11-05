const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const sIdx = html.indexOf('id="comparison"');
const eIdx = html.indexOf('</section>', sIdx);
console.log(html.substring(sIdx, eIdx).slice(0, 1500));

