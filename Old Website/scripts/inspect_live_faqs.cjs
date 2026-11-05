const fs = require('fs');
const content = fs.readFileSync('pricing.html', 'utf8');

const faqIdx = content.indexOf('id="faq"');
console.log(content.slice(faqIdx, faqIdx + 4000));

