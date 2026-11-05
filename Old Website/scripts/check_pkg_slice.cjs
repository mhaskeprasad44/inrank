const fs = require('fs');
const content = fs.readFileSync('inrank2.0/pricing.html', 'utf8');

const pkgStart = content.indexOf('<section class="pricing-section" id="packages"');
const pkgEnd = content.indexOf('</section>', pkgStart) + 10;
console.log('pkgStart:', pkgStart, 'pkgEnd:', pkgEnd);
console.log(content.substring(pkgStart, pkgStart + 500));

