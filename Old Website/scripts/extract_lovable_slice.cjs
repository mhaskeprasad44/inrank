const fs = require('fs');
const html = fs.readFileSync('scripts/lovable_blog_post.html', 'utf8');

const idx = html.indexOf('natural-ways');
console.log(html.slice(Math.max(0, idx - 200), Math.min(html.length, idx + 1500)));

