const fs = require('fs');
const css = fs.readFileSync('scripts/vinove_blog.css', 'utf8');

console.log('--- CSS SLICE 3: §5 Post Content & §6 Author Bio ---');
console.log(css.slice(8500, 14000));

