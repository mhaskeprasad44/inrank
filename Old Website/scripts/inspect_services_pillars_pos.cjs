const fs = require('fs');
const content = fs.readFileSync('inrank2.0/services.html', 'utf8');

const sIdx = content.indexOf('<!-- Pillars Breakdown -->');
console.log(content.slice(sIdx, sIdx + 400));

