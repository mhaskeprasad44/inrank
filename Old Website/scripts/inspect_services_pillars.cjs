const fs = require('fs');
const html = fs.readFileSync('inrank2.0/services.html', 'utf8');

const p1Idx = html.indexOf('id="pillar-1"');
console.log('From pillar-1:');
console.log(html.slice(p1Idx, p1Idx + 3000));
