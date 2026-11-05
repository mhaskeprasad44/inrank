const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const matches = html.match(/<[^>]*eyebrow-pill[^>]*>[\s\S]*?<\/[^>]+>/g) || [];
console.log('Matches in index.html:');
matches.forEach((m, i) => console.log(`[${i}]`, m));

