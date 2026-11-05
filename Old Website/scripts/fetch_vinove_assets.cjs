const https = require('https');
const fs = require('fs');
const path = require('path');

const files = [
  'css/pages/corporate.css',
  'css/nav.css',
  'css/footer-social.css',
  'js/core.js',
  'js/pages/corporate.js'
];

fs.mkdirSync('scripts/vinove_assets/css/pages', { recursive: true });
fs.mkdirSync('scripts/vinove_assets/js/pages', { recursive: true });

files.forEach(file => {
  const url = `https://www.vinove.com/${file}`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      fs.writeFileSync(path.join('scripts/vinove_assets', file), data);
      console.log(`Saved ${file}, size: ${data.length}`);
    });
  }).on('error', err => console.error(file, err));
});

