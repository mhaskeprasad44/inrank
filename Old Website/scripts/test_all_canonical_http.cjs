const fs = require('fs');

const urls = JSON.parse(fs.readFileSync('scripts/unique_canonical_urls.json', 'utf8'));

async function testAllUrls() {
  console.log(`Testing all ${urls.length} canonical URLs on local server...`);
  const failures = [];
  for (const u of urls) {
    const localUrl = u.replace('https://inranktech.com', 'http://localhost:8080');
    try {
      const res = await fetch(localUrl);
      if (res.status !== 200) {
        failures.push({ url: u, status: res.status });
      }
    } catch (e) {
      failures.push({ url: u, error: e.message });
    }
  }

  console.log('Test completed.');
  console.log('Total failures:', failures.length);
  if (failures.length > 0) {
    console.log('Failed URLs:', failures);
  } else {
    console.log('ALL 89 CANONICAL URLS RETURNED HTTP 200 OK!');
  }
}

testAllUrls().catch(console.error);

