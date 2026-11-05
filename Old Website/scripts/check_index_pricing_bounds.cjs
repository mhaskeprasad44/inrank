const fs = require('fs');
const content = fs.readFileSync('inrank2.0/index.html', 'utf8');

const pStart = content.indexOf('<section class="pricing-section" id="pricing">');
const pEnd = content.indexOf('</section>', pStart) + 10;

console.log('pStart:', pStart, 'pEnd:', pEnd);
console.log('Snippet around pStart:');
console.log(content.substring(pStart, pStart + 400));
console.log('Snippet around pEnd:');
console.log(content.substring(pEnd - 100, pEnd + 200));

