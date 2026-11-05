const fs = require('fs');

const html = fs.readFileSync('scripts/greytothegreen_blog_post.html', 'utf8');

console.log('HTML Length:', html.length);

// Extract headings
const headings = [...html.matchAll(/<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/gi)].map(m => `H${m[1]}: ${m[2].replace(/<[^>]*>/g, '').trim()}`);
console.log('Headings count:', headings.length);
console.log('Headings:', headings.slice(0, 15));

// Check breadcrumbs
const breadcrumbMatch = html.match(/<nav[^>]*breadcrumb[^>]*>[\s\S]*?<\/nav>/i) || html.match(/<ol[^>]*breadcrumb[^>]*>[\s\S]*?<\/ol>/i) || html.match(/class="[^"]*breadcrumb[^"]*"[^>]*>[\s\S]*?<\/[a-z0-9]+>/i);
if (breadcrumbMatch) {
  console.log('Breadcrumbs found:', breadcrumbMatch[0].slice(0, 300));
}

// Check Table of Contents / Sidebar
const tocMatch = html.match(/class="[^"]*(?:toc|table-of-contents)[^"]*"[^>]*>[\s\S]*?<\/[a-z0-9]+>/i) || html.match(/<aside[^>]*>[\s\S]*?<\/aside>/i);
if (tocMatch) {
  console.log('TOC/Sidebar found:', tocMatch[0].slice(0, 400));
}

// Check Author section
const authorMatch = html.match(/class="[^"]*author[^"]*"[^>]*>[\s\S]*?<\/[a-z0-9]+>/i);
if (authorMatch) {
  console.log('Author found:', authorMatch[0].slice(0, 300));
}

// Check Related posts
const relatedMatch = html.match(/class="[^"]*related[^"]*"[^>]*>[\s\S]*?<\/[a-z0-9]+>/i);
if (relatedMatch) {
  console.log('Related found:', relatedMatch[0].slice(0, 300));
}

