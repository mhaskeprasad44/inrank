const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const jsonLdMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map(m => m[0]);
console.log('Found', jsonLdMatches.length, 'JSON-LD blocks in index.html');
fs.writeFileSync('scripts/index_json_ld.json', JSON.stringify(jsonLdMatches, null, 2));

