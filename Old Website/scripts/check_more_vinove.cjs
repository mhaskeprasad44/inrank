const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const [corpCss, corpJs, homeHtml] = await Promise.all([
    get('https://www.vinove.com/css/pages/corporate.css'),
    get('https://www.vinove.com/js/pages/corporate.js'),
    get('https://www.vinove.com/')
  ]);

  console.log('=== Vinove corporate.css total length:', corpCss.length);
  console.log('=== Vinove corporate.js total length:', corpJs.length);

  // Search for nav or header in corpCss and corpJs
  const navInCorpCss = corpCss.match(/[^{}]*(?:nav|header)[^{}]*\{[^}]*\}/gi) || [];
  console.log('Nav matches in corporate.css:', navInCorpCss.length);
  navInCorpCss.slice(0, 5).forEach(m => console.log(m));

  // Search for hero slideshow or animations in corpJs
  console.log('\n--- corporate.js sample ---');
  console.log(corpJs.slice(0, 1500));

  // Check if there are other stylesheets in homeHtml
  const links = [...homeHtml.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi)];
  console.log('\n--- Stylesheets in homeHtml ---');
  links.forEach(l => console.log(l[0]));

  // Check scripts in homeHtml
  const scripts = [...homeHtml.matchAll(/<script[^>]*src=["']([^"']+)["'][^>]*>/gi)];
  console.log('\n--- Scripts in homeHtml ---');
  scripts.forEach(s => console.log(s[0]));
}

run().catch(console.error);

