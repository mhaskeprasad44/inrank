const fs = require('fs');
const path = require('path');

const cssDir = 'inrank2.0/css';
fs.readdirSync(cssDir).forEach(f => {
  const c = fs.readFileSync(path.join(cssDir, f), 'utf8');
  if (c.includes('eco-service-list') || c.includes('eco-check-badge')) {
    console.log(`Found in ${f}`);
  }
});

// Also check index.html for inline style or style block
const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');
if (indexHtml.includes('.eco-service-list')) {
  console.log('Found .eco-service-list in index.html <style>');
  const idx = indexHtml.indexOf('.eco-service-list');
  console.log(indexHtml.slice(idx - 50, idx + 800));
}

