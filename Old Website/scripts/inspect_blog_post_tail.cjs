const fs = require('fs');

const content = fs.readFileSync('inrank2.0/blog/ai-seo-agency-generative-optimization.html', 'utf8');
const articleEnd = content.indexOf('</article>');
console.log(content.slice(articleEnd, articleEnd + 1500));

