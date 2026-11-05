const fs = require('fs');
const content = fs.readFileSync('scripts/extracted_pricing_snippet.html', 'utf8');
console.log('Live snippet length:', content.length);
console.log(content.slice(0, 1500));

