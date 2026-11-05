const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scripts/index_content.json', 'utf8'));

console.log('=== SECTIONS IN JSON ===');
Object.keys(data).forEach(k => {
  console.log(`- ${k}: ${data[k].length} bytes`);
});

