const fs = require('fs');

const content = fs.readFileSync('inrank2.0/blog/ai-ranking-citations-knowledge-graph-optimization.html', 'utf8');
const articleIdx = content.indexOf('<article');
console.log('Article start idx:', articleIdx);
console.log(content.slice(articleIdx, articleIdx + 1500));

