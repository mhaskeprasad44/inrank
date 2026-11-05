const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('inrank2.0');

function checkLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const hrefMatches = content.match(/href="(\/[^"#?]+)/g) || [];
  const links = hrefMatches.map(h => h.replace('href="', ''));
  const uniqueLinks = Array.from(new Set(links));
  
  const broken = [];
  uniqueLinks.forEach(link => {
    // Determine path on disk
    let rel = link.startsWith('/') ? link.slice(1) : link;
    if (rel.endsWith('.css') || rel.endsWith('.js') || rel.endsWith('.webp') || rel.endsWith('.svg') || rel.endsWith('.png') || rel.endsWith('.html')) {
      const full = path.join(baseDir, rel);
      if (!fs.existsSync(full)) {
        broken.push(link);
      }
    } else {
      // Check if folder index.html or if .html can be appended
      const asHtml = path.join(baseDir, rel + '.html');
      const asIndex = path.join(baseDir, rel, 'index.html');
      if (!fs.existsSync(asHtml) && !fs.existsSync(asIndex) && rel !== '') {
        broken.push(link);
      }
    }
  });

  return { file: path.basename(filePath), total: uniqueLinks.length, broken };
}

console.log(checkLinks('inrank2.0/our-work.html'));
console.log(checkLinks('inrank2.0/case-studies.html'));
console.log(checkLinks('inrank2.0/services.html'));

