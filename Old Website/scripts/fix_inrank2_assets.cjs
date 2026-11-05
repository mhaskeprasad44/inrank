const fs = require('fs');

// Fix cloudflare logo in inrank2.0/index.html
let index = fs.readFileSync('inrank2.0/index.html', 'utf8');
index = index.replace('cloudflare-logo-png_seeklogo-294318.png', 'cloudflare-logo-png_seeklogo-294312.png');
fs.writeFileSync('inrank2.0/index.html', index, 'utf8');

// Fix secondary pages
const fixFiles = [
  'digital-marketing-agency-in-pune.html',
  'website-design-company-in-pune.html',
  'privacy-policy.html',
  'terms-and-conditions.html'
];

fixFiles.forEach(f => {
  const p = 'inrank2.0/' + f;
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/<link[^>]*href=["']\/src\/index\.css["'][^>]*>/gi, '<link rel="stylesheet" href="/css/core.css"><link rel="stylesheet" href="/css/corporate.css">');
    content = content.replace(/<script[^>]*src=["']\/src\/main\.ts["'][^>]*><\/script>/gi, '<script src="/js/core.js"></script>');
    fs.writeFileSync(p, content, 'utf8');
    console.log('Fixed', f);
  }
});

console.log('✓ All asset references fixed!');

