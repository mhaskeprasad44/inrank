const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'inrank2.0');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

console.log('Verifying inrank2.0 HTML files:', files);

let errors = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // check images
  const imgMatches = [...content.matchAll(/src=["']([^"']+)["']/g)];
  imgMatches.forEach(m => {
    const src = m[1];
    if (src.startsWith('http') || src.startsWith('//') || src.startsWith('data:')) return;
    const resolved = path.join(dir, src);
    if (!fs.existsSync(resolved)) {
      console.error(`[ERROR] In ${file}, missing asset: ${src}`);
      errors++;
    }
  });

  // check css
  const cssMatches = [...content.matchAll(/href=["']([^"']+\.css)["']/g)];
  cssMatches.forEach(m => {
    const href = m[1];
    const resolved = path.join(dir, href);
    if (!fs.existsSync(resolved)) {
      console.error(`[ERROR] In ${file}, missing CSS: ${href}`);
      errors++;
    }
  });

  // check internal html links
  const aMatches = [...content.matchAll(/href=["']([a-zA-Z0-9_\-]+\.html(?:#[a-zA-Z0-9_\-]+)?)["']/g)];
  aMatches.forEach(m => {
    const page = m[1].split('#')[0];
    const resolved = path.join(dir, page);
    if (!fs.existsSync(resolved)) {
      console.error(`[ERROR] In ${file}, broken link to: ${m[1]}`);
      errors++;
    }
  });
});

if (errors === 0) {
  console.log('✓ All assets, stylesheets, and internal links in inrank2.0 verified successfully with ZERO errors!');
} else {
  console.log(`Found ${errors} issues.`);
}

