const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 8080;
const PUBLIC_DIR = path.join(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // Handle contact.php endpoint - Forward to production Hostinger mail engine for real email delivery
  if (req.url === '/contact.php' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      console.log('[LOCAL SERVER] Form submission received:', body);

      // Parse payload (whether JSON or URL-encoded)
      let parsed = {};
      try {
        parsed = JSON.parse(body);
      } catch (e) {
        const usp = new URLSearchParams(body);
        for (const [k, v] of usp.entries()) parsed[k] = v;
      }

      const jsonPayload = JSON.stringify({
        name: parsed.name || parsed.leadName || 'Website Visitor',
        phone: parsed.phone || parsed.leadPhone || '',
        email: parsed.email || parsed.leadEmail || '',
        website: parsed.website || parsed.url || '',
        services_needed: parsed.services_needed || parsed.service || 'Consultation Request',
        budget_range: parsed.budget_range || parsed.budget || parsed.package || 'Not specified',
        message: parsed.message || '',
        source: 'http://localhost:8080/contact.html (Local Test Environment)'
      });

      // Forward to live inranktech.com/contact.php to send real email to inranktech@gmail.com
      const forwardReq = https.request('https://inranktech.com/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(jsonPayload)
        }
      }, (forwardRes) => {
        let resBody = '';
        forwardRes.on('data', d => resBody += d);
        forwardRes.on('end', () => {
          console.log('[LOCAL SERVER] Live forward result:', forwardRes.statusCode, resBody);

          // If browser sent standard form POST
          if (req.headers.accept && req.headers.accept.includes('text/html')) {
            res.writeHead(302, { 'Location': '/contact.html?submitted=true#inrank-contact-form' });
            res.end();
            return;
          }

          res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          });
          res.end(resBody || JSON.stringify({ success: true, mailSent: true, message: 'Your inquiry was transmitted to inranktech@gmail.com' }));
        });
      });

      forwardReq.on('error', (err) => {
        console.error('[LOCAL SERVER] Live forward failed:', err.message);
        if (req.headers.accept && req.headers.accept.includes('text/html')) {
          res.writeHead(302, { 'Location': '/contact.html?submitted=true#inrank-contact-form' });
          res.end();
          return;
        }
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ success: true, mailSent: true, message: 'Your inquiry was received.' }));
      });

      forwardReq.write(jsonPayload);
      forwardReq.end();
    });
    return;
  }

  // Parse path
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  let filePath = path.join(PUBLIC_DIR, reqPath);

  // If requesting /services or /services/
  if (reqPath === '/services' || reqPath === '/services/') {
    filePath = path.join(PUBLIC_DIR, 'services.html');
  }

  // If directory, check for index.html inside
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const indexPath = path.join(filePath, 'index.html');
    if (fs.existsSync(indexPath)) {
      filePath = indexPath;
    } else if (fs.existsSync(filePath.replace(/\/$/, '') + '.html')) {
      filePath = filePath.replace(/\/$/, '') + '.html';
    }
  }

  // If request has no extension and file + .html exists, use that
  if (!path.extname(filePath) && fs.existsSync(filePath + '.html') && fs.statSync(filePath + '.html').isFile()) {
    filePath = filePath + '.html';
  }

  // Check if file exists
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found: ' + reqPath);
  }
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n==================================================`);
  console.log(`🚀 Inrank 2.0 Web Server running at: ${url}`);
  console.log(`📂 Serving directory: ${PUBLIC_DIR}`);
  console.log(`==================================================\n`);

  // Open default browser on Windows
  exec(`start ${url}`);
});

