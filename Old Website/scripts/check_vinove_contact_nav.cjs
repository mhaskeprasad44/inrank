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
  const contactHtml = await get('https://www.vinove.com/contact/');
  const navTag = contactHtml.match(/<nav[^>]*>/i);
  console.log('Nav tag on vinove contact page:', navTag ? navTag[0] : 'None');

  const contactCss = await get('https://www.vinove.com/css/pages/corporate.css');
  // see if there is contact specific nav styling
  const ctNav = contactCss.match(/[^{}]*contact[^{}]*nav[^{}]*\{[^}]*\}/gi) || [];
  console.log('Contact nav rules in CSS:', ctNav);
}

run().catch(console.error);

