const fs = require('fs');

const css = fs.readFileSync('scripts/vinove_blog.css', 'utf8');

const postIdx = css.indexOf('§5  Post Content') !== -1 ? css.indexOf('§5  Post Content') : css.indexOf('POST CONTENT');
console.log('Post Content section:\n', css.slice(postIdx, postIdx + 3000));

