const fs = require('fs');
const { getPricingSectionHtml } = require('./pricing_template.cjs');

let content = fs.readFileSync('inrank2.0/index.html', 'utf8');

const pStart = content.indexOf('<section class="pricing-section" id="pricing">');
const pEnd = content.indexOf('</section>', pStart) + 10;

const newPricingSection = getPricingSectionHtml(true);

content = content.substring(0, pStart) + newPricingSection + content.substring(pEnd);

fs.writeFileSync('inrank2.0/index.html', content, 'utf8');
console.log('Successfully updated inrank2.0/index.html with authentic 3-tab pricing architecture');

