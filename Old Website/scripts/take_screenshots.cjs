const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(__dirname, '..', 'inrank2.0', reqPath);
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeMap = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.png': 'image/png',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': mimeMap[ext] || 'application/octet-stream' });
    res.end(fs.readFileSync(filePath));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(4321, () => {
  console.log('Local server started on http://localhost:4321');
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const outHome = path.join(__dirname, '..', 'inrank2.0', 'preview_home.png');
  const outContact = path.join(__dirname, '..', 'inrank2.0', 'preview_contact.png');

  try {
    console.log('Capturing Home...');
    execSync(`"${chromePath}" --headless=new --disable-gpu --window-size=1440,900 --hide-scrollbars --screenshot="${outHome}" http://localhost:4321/index.html`);
    console.log('Home captured successfully:', fs.statSync(outHome).size, 'bytes');

    console.log('Capturing Contact...');
    execSync(`"${chromePath}" --headless=new --disable-gpu --window-size=1440,900 --hide-scrollbars --screenshot="${outContact}" http://localhost:4321/contact.html`);
    console.log('Contact captured successfully:', fs.statSync(outContact).size, 'bytes');
  } catch (err) {
    console.error('Error during capture:', err.message);
  } finally {
    server.close();
  }
});

