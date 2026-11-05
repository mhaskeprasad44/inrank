const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const matches = html.match(/<(section|header|footer)[^>]*>/g);
console.log('Main containers in index.html:');
matches.forEach((m, idx) => console.log(`[${idx}]`, m));

