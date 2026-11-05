const fs = require('fs');
const content = fs.readFileSync('scripts/extracted_pricing_snippet.html', 'utf8');

// Print from line where tab-social starts to the end
const socialIdx = content.indexOf('id="tab-social"');
console.log(content.slice(socialIdx));

