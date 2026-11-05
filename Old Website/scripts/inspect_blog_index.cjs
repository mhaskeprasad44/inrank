const fs = require('fs');

const content = fs.readFileSync('inrank2.0/blog.html', 'utf8');
console.log('blog.html total length:', content.length);

const gridIdx = content.indexOf('blog-grid');
if (gridIdx !== -1) {
  console.log('--- blog-grid sample ---');
  console.log(content.slice(gridIdx, gridIdx + 1200));
}

