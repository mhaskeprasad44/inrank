const fs = require('fs');
const jsonLd = JSON.parse(fs.readFileSync('scripts/index_json_ld.json', 'utf8'));

console.log('JSON-LD length:', jsonLd[0].length);
console.log(jsonLd[0].slice(0, 1000));

