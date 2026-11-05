const fs = require('fs');

let tsContent = fs.readFileSync('src/blogsData.ts', 'utf8');

// Strip TypeScript interfaces and export statement
// Find where `export const BLOG_POSTS: BlogPost[] = [` starts
const startIndex = tsContent.indexOf('export const BLOG_POSTS: BlogPost[] = [');
if (startIndex === -1) {
  console.error('Could not find BLOG_POSTS declaration');
  process.exit(1);
}

// Slice from the array start
let jsContent = 'const BLOG_POSTS = ' + tsContent.slice(startIndex + 'export const BLOG_POSTS: BlogPost[] = '.length);
// If it ends with semicolon or export, let's export it
jsContent += '\nmodule.exports = BLOG_POSTS;\n';

// Write to a temporary file
fs.writeFileSync('scripts/temp_blogs_data.cjs', jsContent);

try {
  const blogs = require('./temp_blogs_data.cjs');
  console.log('Successfully loaded BLOG_POSTS! Count:', blogs.length);
  console.log('First blog title:', blogs[0].title);
  console.log('First blog faqs count:', blogs[0].faqs ? blogs[0].faqs.length : 0);
  console.log('Last blog title:', blogs[blogs.length - 1].title);
} catch (err) {
  console.error('Error loading temp_blogs_data.cjs:', err.message);
}

