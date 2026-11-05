const fs = require('fs');

const html = fs.readFileSync('scripts/vinove_blog.html', 'utf8');

console.log('--- VINOVE BLOG ANALYSIS ---');

// Check hero section
const heroMatch = html.match(/<section[^>]*hero[^>]*>[\s\S]*?<\/section>/i) || html.match(/<header[^>]*>[\s\S]*?<\/header>/i);

// Find container, header, filters, cards
const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
console.log('Vinove H1:', h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : 'None');

// Check card markup
const cardMatch = html.match(/<article[\s\S]*?<\/article>/i);
if (cardMatch) {
  console.log('\n--- SAMPLE ARTICLE CARD IN VINOVE ---');
  console.log(cardMatch[0].slice(0, 800));
}

// Check grid / sections
const sections = [...html.matchAll(/<section\b([^>]*)>/gi)].map(m => m[1]);
console.log('\nSections in Vinove Blog:', sections);

