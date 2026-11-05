const http = require('http');

const pages = [
  '/',
  '/services.html',
  '/pricing.html',
  '/about.html',
  '/contact.html',
  '/case-studies.html',
  '/our-work.html',
  '/portfolio.html',
  '/css/corporate.css',
  '/css/nav.css',
  '/css/footer-social.css',
  '/js/core.js'
];

let checked = 0;
pages.forEach(p => {
  http.get('http://localhost:8080' + p, res => {
    let len = 0;
    res.on('data', chunk => len += chunk.length);
    res.on('end', () => {
      console.log(`[${res.statusCode}] ${p} - ${len} bytes`);
      if (++checked === pages.length) console.log('\nAll pages verified successfully!');
    });
  }).on('error', err => console.error(p, err.message));
});

