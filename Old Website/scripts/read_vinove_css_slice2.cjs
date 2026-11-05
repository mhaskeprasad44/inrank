const fs = require('fs');
const css = fs.readFileSync('scripts/vinove_blog.css', 'utf8');

console.log('--- CSS SLICE 2: §2 Post Grid & §3 Categories ---');
console.log(css.slice(4500, 8500));

