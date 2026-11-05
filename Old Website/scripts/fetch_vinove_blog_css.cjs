async function fetchVinoveBlogCss() {
  const res = await fetch('https://www.vinove.com/css/pages/blog.css');
  const css = await res.text();
  const fs = require('fs');
  fs.writeFileSync('scripts/vinove_blog.css', css, 'utf8');
  console.log('Saved scripts/vinove_blog.css, length:', css.length);
  console.log('First 1000 chars:\n', css.slice(0, 1000));
}
fetchVinoveBlogCss();

