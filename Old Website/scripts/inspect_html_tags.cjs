const fs = require('fs');
const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

const headerStart = indexHtml.indexOf('<header');
const headerEnd = indexHtml.indexOf('</header>');
console.log('headerStart:', headerStart, 'headerEnd:', headerEnd);

const footerStart = indexHtml.indexOf('<footer');
const footerEnd = indexHtml.indexOf('</footer>');
console.log('footerStart:', footerStart, 'footerEnd:', footerEnd);

const mobStart = indexHtml.indexOf('id="mob"');
console.log('mobStart:', mobStart);

