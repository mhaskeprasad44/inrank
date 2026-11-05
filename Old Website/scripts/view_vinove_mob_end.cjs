const fs = require('fs');
const content = fs.readFileSync('scripts/vinove_raw.html', 'utf8');

const start = content.indexOf('id="mob"');
const end = content.indexOf('</div>', content.indexOf('mob-ft', start) + 10);
console.log(content.slice(start, end + 30));

