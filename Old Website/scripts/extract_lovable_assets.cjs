const fs = require('fs');

const html = fs.readFileSync('scripts/lovable_blog_post.html', 'utf8');

// Find all script src
const scriptSrcs = [...html.matchAll(/<script[^>]*src="([^"]*)"/gi)].map(m => m[1]);
console.log('Script sources:', scriptSrcs);

// Find all link rel="stylesheet"
const cssSrcs = [...html.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]*)"/gi)].map(m => m[1]);
console.log('CSS sources:', cssSrcs);

