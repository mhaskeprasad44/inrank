const fs = require('fs');

const content = fs.readFileSync('inrank2.0/blog/ai-seo-agency-generative-optimization.html', 'utf8');
const headerIdx = content.indexOf('</header>');
console.log(content.slice(headerIdx, headerIdx + 1500));

