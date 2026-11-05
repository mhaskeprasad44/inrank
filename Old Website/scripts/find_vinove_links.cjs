const fs = require('fs');

const html = fs.readFileSync('scripts/vinove_blog.html', 'utf8');

const cssLinks = [...html.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]*)"/gi)].map(m => m[1]);
console.log('CSS links in Vinove:', cssLinks);

