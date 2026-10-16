const fs = require('fs');

const contact = fs.readFileSync('../cytos/src/pages/ContactPage.jsx', 'utf8');
const idx = contact.indexOf('id=\\"contactPageForm\\"');
console.log(contact.substring(idx, idx + 2500));
