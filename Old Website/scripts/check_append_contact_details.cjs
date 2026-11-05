const fs = require('fs');
const content = fs.readFileSync('scripts/append_contact_and_work_css.cjs', 'utf8');
const contactIdx = content.indexOf('Contact');
console.log(content.slice(contactIdx, contactIdx + 2000));

