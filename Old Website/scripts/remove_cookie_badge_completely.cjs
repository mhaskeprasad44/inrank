const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

for (const p of [
  path.join(rootDir, 'public', 'cookie-consent.js'),
  path.join(rootDir, 'dist', 'cookie-consent.js')
]) {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');

    // Remove the HTML tag completely
    content = content.replace(/\s*<span class="inrank-cm-badge-req">[^<]*<\/span>/g, '');

    // Remove the CSS class definition completely
    content = content.replace(/\.inrank-cm-badge-req\s*\{[^}]*\}\s*/g, '');

    fs.writeFileSync(p, content, 'utf8');
    console.log(`Cleaned ${p}`);
  }
}

