const fs = require('fs');

const stats = fs.statSync('C:\\Users\\PrasadMhaske\\.gemini\\antigravity\\brain\\0ddbe105-ce59-4fdf-afa3-c065212d3374\\ref_lovable_blog_post.png');
console.log('ref_lovable_blog_post.png size:', stats.size);

