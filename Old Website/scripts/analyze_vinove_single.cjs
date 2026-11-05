const fs = require('fs');

const html = fs.readFileSync('scripts/vinove_single_post.html', 'utf8');

console.log('--- VINOVE SINGLE POST STRUCTURE ---');

// Check breadcrumbs
const breadcrumb = html.match(/<nav[^>]*breadcrumb[^>]*>[\s\S]*?<\/nav>/i) || html.match(/class="[^"]*breadcrumb[^"]*"[^>]*>[\s\S]*?<\/[a-z0-9]+>/i);
if (breadcrumb) console.log('Breadcrumbs:', breadcrumb[0].slice(0, 300));

// Check hero / header
const hero = html.match(/<header[\s\S]*?<\/header>/i) || html.match(/<section[^>]*hero[\s\S]*?<\/section>/i);
if (hero) console.log('Hero header:', hero[0].slice(0, 500));

// Check layout: main, article, aside, toc
console.log('Has aside?:', html.includes('<aside'));
console.log('Has toc?:', /table\s*of\s*contents|toc/i.test(html));

// Check sections
const sections = [...html.matchAll(/<section\b([^>]*)>/gi)].map(m => m[1]);
console.log('Sections in Single Post:', sections);

// Check author bio
const author = html.match(/class="[^"]*author[^"]*"[^>]*>[\s\S]*?<\/[a-z0-9]+>/i);
if (author) console.log('Author block:', author[0].slice(0, 300));

// Check related
const related = html.match(/class="[^"]*related[^"]*"[^>]*>[\s\S]*?<\/[a-z0-9]+>/i);
if (related) console.log('Related block:', related[0].slice(0, 300));

