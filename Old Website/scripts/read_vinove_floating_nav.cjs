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
  
  lines.forEach((line, i) => {
    if (line.includes('#nav.is-light') || line.includes('floating') || line.includes('pill') || line.includes('nav-bar')) {
      console.log(`Line ${i + 1}: ${line}`);
    }
  });
}

run().catch(console.error);

