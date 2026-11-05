const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log('Header length:', headerMatch[0].length);
  console.log(headerMatch[0].slice(0, 1500));
} else {
  console.log('No <header> found, searching for <nav>');
  const navMatch = html.match(/<nav[\s\S]*?<\/nav>/i);
  if (navMatch) console.log(navMatch[0].slice(0, 1500));
}

