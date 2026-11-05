const fs = require('fs');
const content = fs.readFileSync('inrank2.0/contact.html', 'utf8');

const bodyStart = content.indexOf('<body');
const mainStart = content.indexOf('<main');
const footerStart = content.indexOf('<footer');
console.log('Main content of inrank2.0/contact.html:');
console.log(content.substring(mainStart, footerStart));

