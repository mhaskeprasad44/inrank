const fs = require('fs');
const catalog = JSON.parse(fs.readFileSync('scripts/index_sections_catalog.json', 'utf8'));

console.log(catalog.section_1.raw.slice(3000, 7000));

