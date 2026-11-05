const fs = require('fs');
const path = require('path');

function cleanDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) cleanDir(full);
    else if (f === 'dravyafinancial.html') {
      fs.unlinkSync(full);
      console.log('Deleted:', full);
    } else if (/\.(html|txt|xml)$/.test(f)) {
      let content = fs.readFileSync(full, 'utf8');
      if (/dravya/i.test(content)) {
        content = content.replace(/<a\s+href="[^"]*dravyafinancial\.html"[^>]*>[\s\S]*?<\/a>/gi, '');
        content = content.replace(/<div\s+class="client-logo-item"><img\s+src="[^"]*dravya[^"]*"[^>]*><\/div>/gi, '');
        content = content.split('\n').filter(l => !/dravya/i.test(l)).join('\n');
        fs.writeFileSync(full, content, 'utf8');
        console.log('Cleaned dist file:', full);
      }
    }
  }
}

cleanDir('dist');
console.log('Dist cleaning complete.');

