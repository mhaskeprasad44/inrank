const fs = require('fs');

const json = JSON.parse(fs.readFileSync('scripts/index_content.json', 'utf8'));
console.log('About section full:');
console.log(json['about']);

