const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const matches = html.match(/<(section|header|footer)[^>]*>/g);
console.log('Sections order in index.html:');
matches.forEach((m, idx) => console.log(`[${idx}]`, m));

// Verify that pillars-strip is gone from index.html
console.log('Has pillars-strip?', html.includes('pillars-strip'));
console.log('Has pillar-tab?', html.includes('pillar-tab'));

