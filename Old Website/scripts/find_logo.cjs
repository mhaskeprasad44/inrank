const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const logoMatch = html.match(/<a[^>]*class="[^"]*logo[^"]*"[^>]*>[\s\S]*?<\/a>/i);
if (logoMatch) {
  console.log('Logo match:\n', logoMatch[0]);
} else {
  const matches = [...html.matchAll(/<img[^>]*src="[^"]*logo[^"]*"[^>]*>/gi)];
  matches.forEach(m => console.log(m[0]));
}

