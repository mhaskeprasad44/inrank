const fs = require('fs');

const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');
const navMatch = indexHtml.match(/<nav class="nav-links"[\s\S]*?<\/nav>/);
if (navMatch) {
  const links = [...navMatch[0].matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map(m => ({
    href: m[1],
    text: m[2].replace(/<[^>]*>/g, '').trim()
  }));
  console.log('Top nav links:', links.filter(l => ['/pricing.html', '/about.html', '/blog.html', '/contact.html'].includes(l.href)));
}
