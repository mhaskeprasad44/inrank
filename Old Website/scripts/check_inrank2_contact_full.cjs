const fs = require('fs');
const content = fs.readFileSync('inrank2.0/contact.html', 'utf8');
console.log('inrank2.0/contact.html length:', content.length);
console.log(content.slice(0, 1000));

