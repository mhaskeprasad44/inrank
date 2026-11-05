const fs = require('fs');

const content = fs.readFileSync('inrank2.0/blog/ai-seo-agency-generative-optimization.html', 'utf8');
const headEnd = content.indexOf('</head>');
console.log('--- Head snippet ---');
console.log(content.slice(0, 500));

const mainIdx = content.indexOf('<main');
const mainEnd = content.indexOf('</main>');
console.log('--- Main structure preview ---');
console.log(content.slice(mainIdx, mainIdx + 1000));

