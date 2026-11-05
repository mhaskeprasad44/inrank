const fs = require('fs');

console.log('--- ANALYZING VINOVE BLOG HUB ---');
const vinoveHtml = fs.readFileSync('scripts/vinove_blog.html', 'utf8');

// Check main sections or classes in vinove
const vinoveHeadings = [...vinoveHtml.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)].map(m => m[1].replace(/<[^>]*>/g, '').trim());
console.log('Vinove Headings (sample):', vinoveHeadings.slice(0, 15));

// Check categories / tabs in vinove
const categoryMatches = [...vinoveHtml.matchAll(/class="[^"]*cat[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/gi)].map(m => m[1].replace(/<[^>]*>/g, '').trim());
console.log('Vinove Categories (sample):', categoryMatches.slice(0, 10));

console.log('\n--- ANALYZING LOVABLE BLOG POST ---');
const lovableHtml = fs.readFileSync('scripts/lovable_blog_post.html', 'utf8');

const lovableHeadings = [...lovableHtml.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi)].map(m => m[1].replace(/<[^>]*>/g, '').trim());
console.log('Lovable Headings:', lovableHeadings);

// Find structural elements in Lovable
console.log('Lovable has aside?:', lovableHtml.includes('<aside'));
console.log('Lovable has table of contents?:', /table\s*of\s*contents|toc/i.test(lovableHtml));
console.log('Lovable has author?:', /author|written\s*by/i.test(lovableHtml));
console.log('Lovable has breadcrumbs?:', /breadcrumb/i.test(lovableHtml));
console.log('Lovable has newsletter/subscribe/cta?:', /newsletter|subscribe|cta/i.test(lovableHtml));
console.log('Lovable has related posts?:', /related/i.test(lovableHtml));
console.log('Lovable has share?:', /share/i.test(lovableHtml));

