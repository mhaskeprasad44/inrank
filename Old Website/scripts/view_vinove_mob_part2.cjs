const fs = require('fs');
const content = fs.readFileSync('scripts/vinove_raw.html', 'utf8');

const start = content.indexOf('id="mob"');
console.log(content.slice(start, start + 3000));

