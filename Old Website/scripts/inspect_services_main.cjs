const fs = require('fs');
const html = fs.readFileSync('inrank2.0/services.html', 'utf8');

const mainIdx = html.indexOf('<main');
const mainEnd = html.indexOf('</main>');
console.log('Main snippet in services.html:');
console.log(html.slice(mainIdx, mainIdx + 2500));

