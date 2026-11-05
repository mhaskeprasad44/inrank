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
  const [navCss, corpCss] = await Promise.all([
    get('https://www.vinove.com/css/nav.css'),
    get('https://www.vinove.com/css/pages/corporate.css')
  ]);

  console.log('=== Keyframes in corporate.css ===');
  const corpKeyframes = corpCss.match(/@keyframes[^{]*\{[\s\S]*?\n\}/g) || [];
  corpKeyframes.forEach(k => console.log(k));

  console.log('=== All transition and animation properties on header / nav ===');
  const allNavTransitions = (navCss + corpCss).match(/[^{}]*(?:#nav|\.site-header|\.nav-bar)[\s\S]*?\{[^}]*(?:transition|animation)[^}]*\}/gi) || [];
  allNavTransitions.forEach(t => console.log(t.trim() + '\n'));
}

run().catch(console.error);

