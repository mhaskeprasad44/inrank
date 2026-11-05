const fs = require('fs');

const html = fs.readFileSync('scripts/vinove_blog.html', 'utf8');

// Find all <style> tags or CSS matching blog-
const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]).join('\n');
console.log('Total inline style length in Vinove:', styles.length);

const blogCssMatches = [...styles.matchAll(/(?:\.blog-[^{]+|\.featured-[^{]+)\{[^}]+\}/gi)].map(m => m[0]);
console.log('Found blog CSS rules:', blogCssMatches.length);
console.log('Sample blog CSS:\n', blogCssMatches.slice(0, 20).join('\n'));

