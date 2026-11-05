const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');
const headerMatch = indexHtml.match(/<header id="nav"[\s\S]*?<\/header>/i);
if (!headerMatch) {
  console.error('Could not find master header in index.html');
  process.exit(1);
}
const masterHeader = headerMatch[0];

let updatedCount = 0;

function processDir(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') processDir(full);
    } else if (f.endsWith('.html') && f !== 'test_footer.html' && full !== path.normalize('inrank2.0/index.html')) {
      let c = fs.readFileSync(full, 'utf8');
      let modified = false;

      // 1. Ensure nav.css is linked in <head>
      if (!c.includes('/css/nav.css') && !c.includes('css/nav.css')) {
        c = c.replace(/<\/head>/i, '  <link rel="stylesheet" href="/css/nav.css" />\n</head>');
        modified = true;
      }

      // 2. Ensure core.js is loaded before </body>
      if (!c.includes('/js/core.js') && !c.includes('js/core.js')) {
        c = c.replace(/<\/body>/i, '  <script src="/js/core.js"></script>\n</body>');
        modified = true;
      }

      // 3. Ensure nav-scrim is present
      if (!c.includes('id="nav-scrim"')) {
        // Will be added with masterHeader or right after header
      }

      // 4. Replace or inject master header
      if (/<header id="nav"[\s\S]*?<\/header>/i.test(c)) {
        c = c.replace(/<header id="nav"[\s\S]*?<\/header>/i, masterHeader);
        modified = true;
      } else if (/<header[\s\S]*?<\/header>/i.test(c)) {
        c = c.replace(/<header[\s\S]*?<\/header>/i, masterHeader);
        modified = true;
      } else {
        // Inject after <body>
        c = c.replace(/(<body[^>]*>)/i, `$1\n${masterHeader}\n<div class="nav-scrim" id="nav-scrim"></div>`);
        modified = true;
      }

      // 5. Ensure nav-scrim exists right after header if not already there
      if (!c.includes('id="nav-scrim"')) {
        c = c.replace(/<\/header>/i, '</header>\n    <div class="nav-scrim" id="nav-scrim"></div>');
        modified = true;
      }

      fs.writeFileSync(full, c, 'utf8');
      updatedCount++;
    }
  }
}

processDir('inrank2.0');
console.log(`Master header synchronization complete. Updated ${updatedCount} files.`);

