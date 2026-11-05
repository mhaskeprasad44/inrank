const fs = require('fs');
const content = fs.readFileSync('pricing.html', 'utf8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);
fs.writeFileSync('scripts/extracted_pricing_snippet.html', lines.slice(770, 1260).join('\n'), 'utf8');
console.log('Saved lines 770-1260 to scripts/extracted_pricing_snippet.html');

