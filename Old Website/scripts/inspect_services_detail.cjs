const fs = require('fs');

const content = fs.readFileSync('inrank2.0/services.html', 'utf8');

// Find all service links inside <main>
const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
if (mainMatch) {
  const main = mainMatch[1];
  const links = [...main.matchAll(/href="(\/services\/[^"]+)"/g)].map(m => m[1]);
  console.log('Services in <main> of services.html:', links.length);
  console.log(links);

  // Look for service cards/items in main
  const h3s = [...main.matchAll(/<h3[^>]*>(.*?)<\/h3>/gis)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('H3 titles in <main> of services.html (count = ' + h3s.length + '):', h3s);
}

