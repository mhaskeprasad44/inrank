const http = require('http');

const urls = [
  '/services',
  '/services/',
  '/services.html',
  '/services/seo-company-pune',
  '/services/seo-company-pune/',
  '/services/seo-company-pune.html',
  '/services/ai-seo-services',
  '/services/ai-seo-services/',
  '/services/ai-seo-services.html',
  '/services/custom-website-development',
  '/services/custom-website-development.html'
];

async function check() {
  for (const u of urls) {
    await new Promise((resolve) => {
      http.get('http://localhost:8080' + u, (res) => {
        console.log(`${res.statusCode} -> ${u}`);
        resolve();
      }).on('error', (e) => {
        console.log(`ERR -> ${u}: ${e.message}`);
        resolve();
      });
    });
  }
}

check();

