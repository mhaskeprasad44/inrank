const fs = require('fs');
const css = fs.readFileSync('scripts/vinove_blog.css', 'utf8');

console.log('--- CSS SLICE 1: §1 to §3 ---');
console.log(css.slice(1500, 4500));

