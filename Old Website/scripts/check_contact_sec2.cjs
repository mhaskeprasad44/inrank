const fs = require('fs');
const sections = JSON.parse(fs.readFileSync('scripts/extracted_contact_sections.json', 'utf8'));

console.log('Section 2 start:');
console.log(sections[1].slice(0, 1000));

