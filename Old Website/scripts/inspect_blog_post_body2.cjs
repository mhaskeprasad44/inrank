const fs = require('fs');

const content = fs.readFileSync('inrank2.0/blog/ai-seo-agency-generative-optimization.html', 'utf8');
const articleIdx = content.indexOf('<article');
const articleEnd = content.indexOf('</article>');
console.log('Article length:', articleEnd - articleIdx);
console.log(content.slice(articleIdx, articleIdx + 1200));

