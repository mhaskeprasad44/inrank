const fs = require('fs');
const content = fs.readFileSync('inrank2.0/pricing.html', 'utf8');

const heroEnd = content.indexOf('</section>');
const footerStart = content.indexOf('<footer');
console.log('Between hero and footer:');
console.log(content.substring(heroEnd + 10, footerStart).slice(0, 2000));

