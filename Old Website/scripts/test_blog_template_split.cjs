const fs = require('fs');
const path = require('path');

// Read an existing blog post to use its identical header, nav, footer, styles, and wrapper
const samplePost = fs.readFileSync('inrank2.0/blog/ai-ranking-citations-knowledge-graph-optimization.html', 'utf8');

// Extract Header & Nav (everything before <main id="main">)
const mainStart = samplePost.indexOf('<main id="main">');
const preMain = samplePost.slice(0, mainStart);

// Extract Footer & Script (everything after </main>)
const mainEnd = samplePost.indexOf('</main>');
const postMain = samplePost.slice(mainEnd);

console.log('Pre-main template length:', preMain.length);
console.log('Post-main template length:', postMain.length);

