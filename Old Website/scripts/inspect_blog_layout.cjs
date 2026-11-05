const fs = require('fs');

const content = fs.readFileSync('inrank2.0/blog/ai-seo-agency-generative-optimization.html', 'utf8');
const layoutIdx = content.indexOf('post-layout');
console.log(content.slice(layoutIdx, layoutIdx + 2000));

