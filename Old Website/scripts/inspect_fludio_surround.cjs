const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log(html.slice(34500, 37500));

