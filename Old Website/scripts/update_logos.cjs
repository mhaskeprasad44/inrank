const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'img' && file !== 'images' && file !== 'client-logos') {
        processDir(fullPath);
      }
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // 1. Header nav-logo (dark background header) -> inrank-white-logo.svg
      if (content.includes('class="logo-icon"')) {
        // e.g. <img src="/img/logo.png" alt="Inrank Technologies" width="34" height="34" class="logo-icon" />
        const newContent = content.replace(/<img\s+src="\/img\/logo\.png"\s+alt="Inrank Technologies"\s+width="(\d+)"\s+height="(\d+)"\s+class="logo-icon"\s*\/>/g, '<img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="$1" height="$2" class="logo-icon" />');
        if (newContent !== content) {
          content = newContent;
          changed = true;
        }
      }

      // 2. Mobile drawer logo
      if (content.includes('class="mob-logo"')) {
        const newContent = content.replace(/<a\s+href="\/"\s+class="mob-logo"[^>]*>[\s\S]*?<img\s+src="[^"]+"\s+alt="Inrank Technologies"\s+width="(\d+)"\s+height="(\d+)"(?:\s+class="logo-icon")?\s*\/?>/g, (match, w, h) => {
          return match.replace(/src="[^"]+"/, 'src="/img/inrank-white-logo.svg"');
        });
        if (newContent !== content) {
          content = newContent;
          changed = true;
        }
      }

      // 3. Footer logo (dark footer)
      if (content.includes('footer-logo') || content.includes('site-footer')) {
        // e.g. <a href="/" class="footer-logo"><img src="/img/logo.png" ...
        const newContent = content.replace(/<a\s+href="\/"\s+class="(?:footer-logo|footer-logo-lockup)"[^>]*>[\s\S]*?<img\s+src="[^"]+"\s+alt="Inrank Technologies"\s+width="(\d+)"\s+height="(\d+)"/g, (match) => {
          return match.replace(/src="[^"]+"/, 'src="/img/inrank-white-logo.svg"');
        });
        if (newContent !== content) {
          content = newContent;
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated logos in:', fullPath);
      }
    }
  }
}

processDir('inrank2.0');
console.log('Finished updating logo references.');

