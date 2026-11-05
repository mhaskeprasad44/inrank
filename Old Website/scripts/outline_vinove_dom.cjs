const fs = require('fs');
const html = fs.readFileSync('scripts/vinove_raw.html', 'utf8');

// Strip scripts and svgs to see the pure markup structure
const clean = html
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<svg[\s\S]*?<\/svg>/gi, '<svg>[ICON]</svg>');

// Print outline of tags with class or id
const tagRegex = /<([a-z0-9]+)(\s+[^>]*?)>/gi;
let m;
let indent = 0;
while ((m = tagRegex.exec(clean)) !== null) {
  const tag = m[1].toLowerCase();
  const attrs = m[2];
  if (['meta', 'link', 'br', 'hr', 'img', 'input', 'source'].includes(tag)) continue;
  if (attrs.includes('class=') || attrs.includes('id=')) {
    const cls = (attrs.match(/class="([^"]*)"/) || [])[1] || '';
    const id = (attrs.match(/id="([^"]*)"/) || [])[1] || '';
    console.log(`<${tag}${id ? ' #' + id : ''}${cls ? ' .' + cls.split(' ').join('.') : ''}>`);
  }
}

