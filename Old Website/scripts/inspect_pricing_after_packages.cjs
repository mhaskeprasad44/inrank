const fs = require('fs');
const content = fs.readFileSync('inrank2.0/pricing.html', 'utf8');

const packagesEnd = content.indexOf('</section>', content.indexOf('id="packages"'));
const footerStart = content.indexOf('<footer');
console.log('From end of packages to footer:');
console.log(content.substring(packagesEnd, footerStart));

