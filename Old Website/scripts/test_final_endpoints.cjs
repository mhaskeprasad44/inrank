const http = require('http');

const urls = [
  'http://localhost:8080/index.html',
  'http://localhost:8080/blog.html',
  'http://localhost:8080/blog/top-digital-marketing-web-development-agencies-pune.html',
  'http://localhost:8080/blog/seo-complete-guide.html',
  'http://localhost:8080/blog/custom-website-design-frameworks.html',
  'http://localhost:8080/blog/high-performance-wordpress-engineering.html',
  'http://localhost:8080/blog/omnichannel-ecommerce-architecture-guide.html',
  'http://localhost:8080/blog/ai-seo-agency-generative-optimization.html',
  'http://localhost:8080/blog/strategic-brand-naming-architecture.html',
  'http://localhost:8080/our-work/dravyafinancial.html',
  'http://localhost:8080/case-studies/dravyafinancial.html',
  'http://localhost:8080/our-work.html',
  'http://localhost:8080/pricing.html',
  'http://localhost:8080/contact.html'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, status: 'ERROR: ' + e.message });
    });
  });
}

(async () => {
  console.log('--- TESTING SERVER ENDPOINTS ---');
  for (const u of urls) {
    const res = await checkUrl(u);
    console.log(`${res.status === 200 ? '[200 OK]' : '[FAIL ' + res.status + ']'} ${res.url}`);
  }
  console.log('--- ENDPOINT TESTS COMPLETED ---');
})();

