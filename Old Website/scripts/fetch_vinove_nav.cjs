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
  const [navCss, coreJs, homeHtml] = await Promise.all([
    get('https://www.vinove.com/css/nav.css'),
    get('https://www.vinove.com/js/core.js'),
    get('https://www.vinove.com/')
  ]);

  console.log('=== Vinove nav.css total length:', navCss.length);
  console.log('=== Vinove core.js total length:', coreJs.length);

  // Search for nav scroll transitions
  const scrollMatches = coreJs.match(/function\s+updateState[\s\S]*?\n\s*\}/) || coreJs.match(/window\.addEventListener\(['"]scroll['"][\s\S]*?\n\s*\}/);
  console.log('\n--- Scroll logic in JS ---');
  console.log(scrollMatches ? scrollMatches[0] : 'None');

  // Search for page load or entrance animations
  const loadMatches = coreJs.match(/window\.addEventListener\(['"]load['"][\s\S]*?\n\s*\}/) || coreJs.match(/DOMContentLoaded[\s\S]*?\n\s*\}/);
  console.log('\n--- Load / DOMContentLoaded logic in JS ---');
  console.log(loadMatches ? loadMatches[0] : 'None');

  // Let's search in navCss for animations or transitions on #nav, .nav-bar, .nav-logo, etc.
  console.log('\n--- #nav CSS rules ---');
  const navRules = navCss.match(/#nav[\s\S]*?\{[\s\S]*?\}/g) || [];
  navRules.slice(0, 10).forEach(r => console.log(r));

  // Let's search for animations in navCss
  console.log('\n--- Animations / Keyframes in navCss ---');
  const anims = navCss.match(/@keyframes[\s\S]*?\n\}/g) || [];
  anims.forEach(a => console.log(a));
}

run().catch(console.error);

