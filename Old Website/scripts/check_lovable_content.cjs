const fs = require('fs');
const html = fs.readFileSync('scripts/lovable_blog_post.html', 'utf8');
console.log('Contains natural-ways?:', html.includes('natural-ways'));
console.log('Contains freshen?:', html.includes('freshen'));
console.log('Contains bathrooms?:', html.includes('bathrooms'));
console.log('Contains chemical-free?:', html.includes('chemical-free'));

