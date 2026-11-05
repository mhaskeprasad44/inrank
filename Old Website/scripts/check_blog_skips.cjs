const fs = require('fs');

const skips = JSON.parse(fs.readFileSync('scripts/skipped_headings_list.json', 'utf8'));
const blogSkips = skips.filter(s => s.file.startsWith('blog/'));
console.log('Blog pages in skipped_headings_list:', blogSkips.length);
if (blogSkips.length > 0) {
  console.log(blogSkips.map(b => b.file));
}

