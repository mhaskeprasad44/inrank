const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const navMatch = html.match(/<nav class="nav-bar">[\s\S]*?<\/nav>/);
if (navMatch) {
  console.log(navMatch[0]);
} else {
  console.log('nav-bar not found!');
  const navAny = html.match(/<header[\s\S]*?<\/header>/);
  console.log('header:', navAny ? navAny[0].slice(0, 1000) : 'none');
}

