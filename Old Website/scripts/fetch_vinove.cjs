const https = require('https');
const fs = require('fs');

https.get('https://www.vinove.com/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scripts/vinove_raw.html', data);
    console.log('Saved vinove_raw.html, size:', data.length);
    const cssMatches = [...data.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi)];
    console.log('CSS links:', cssMatches.map(m => m[0]));
    
    // Look at script tags
    const scripts = [...data.matchAll(/<script[^>]+src=["']([^"']+)["'][^>]*>/gi)];
    console.log('Scripts:', scripts.map(m => m[1]));
  });
}).on('error', err => console.error(err));

