const fs = require('fs');
const html = fs.readFileSync('scripts/lovable_blog_post.html', 'utf8');
console.log('Lovable HTML length:', html.length);
console.log('Sample text:', html.slice(0, 1500));

