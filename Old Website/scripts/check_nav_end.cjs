const fs = require('fs');

const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const nav = html.match(/<nav class="nav-links"[\s\S]*?<\/nav>/)[0];
const endPart = nav.slice(-300);
console.log('End of nav-links:\n', endPart);

