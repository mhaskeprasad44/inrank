const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', err => resolve({ status: 500, error: err.message }));
  });
}

async function main() {
  console.log("Analyzing competitor sitemaps...");
  const targets = [
    'https://awrange.com/sitemap_index.xml',
    'https://awrange.com/post-sitemap.xml',
    'https://awrange.com/page-sitemap.xml',
    'https://a2digisolution.com/sitemap_index.xml',
    'https://www.webbird.in/sitemap_index.xml'
  ];

  for (const t of targets) {
    const res = await fetchUrl(t);
    console.log(`URL: ${t} -> Status: ${res.status}, Length: ${res.data ? res.data.length : 0}`);
    if (res.status === 200 && res.data) {
      // Find URLs matching pune or seo
      const matches = res.data.match(/<loc>([^<]+)<\/loc>/g) || [];
      const puneUrls = matches
        .map(m => m.replace(/<\/?loc>/g, ''))
        .filter(u => u.toLowerCase().includes('pune') || u.toLowerCase().includes('seo'));
      console.log(`  Total URLs: ${matches.length}, Pune/SEO URLs: ${puneUrls.length}`);
      puneUrls.slice(0, 5).forEach(u => console.log(`   - ${u}`));
    }
  }
}

main();
