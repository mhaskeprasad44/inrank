const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const servicesDir = path.join(ROOT_DIR, 'services');

fs.readdirSync(servicesDir).forEach(file => {
  if (!file.endsWith('.html')) return;
  const filePath = path.join(servicesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Match H1 with <br> inside
  // e.g., in Pune<br><em>...</em> -> in Pune <br><em>...</em>
  let modified = false;
  const newContent = content.replace(/(<h1[^>]*>[\s\S]*?)(in Pune)(<br\s*\/?>)([\s\S]*?<\/h1>)/gi, (match, p1, p2, p3, p4) => {
    modified = true;
    return `${p1}${p2} <br>${p4}`;
  });

  if (modified && newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated H1 spacing in services/${file}`);
  }
});
