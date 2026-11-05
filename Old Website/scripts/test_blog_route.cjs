const http = require('http');

['/blog', '/blog/', '/blog.html', '/blog/top-digital-marketing-web-development-agencies-pune.html'].forEach(path => {
  http.get('http://localhost:8080' + path, res => {
    console.log(path, 'status:', res.statusCode);
  }).on('error', err => {
    console.log(path, 'error:', err.message);
  });
});

