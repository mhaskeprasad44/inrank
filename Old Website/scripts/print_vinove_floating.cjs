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
  const navCss = await get('https://www.vinove.com/css/nav.css');
  const lines = navCss.split('\n');
  console.log(lines.slice(705, 960).join('\n'));
}

run().catch(console.error);

