const fs = require('fs');
const html = fs.readFileSync('inrank2.0/services.html', 'utf8');

console.log('File size of services.html:', html.length);
// Find services pillars or grid
const pillarIdx = html.indexOf('pillar');
console.log('First pillar mention:');
console.log(html.slice(pillarIdx - 100, pillarIdx + 1200));

