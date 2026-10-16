const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
if (match) {
  console.log(match[1]);
}
