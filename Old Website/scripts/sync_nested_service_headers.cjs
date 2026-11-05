const fs = require('fs');
const path = require('path');

// Extract canonical unified header from index.html
const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

const navStart = indexHtml.indexOf('<!-- Unified Corporate Header & Mega Dropdown (Vinove 2.0 System) -->');
const navEnd = indexHtml.indexOf('</header>', navStart) + '</header>'.length;
const canonicalHeader = indexHtml.substring(navStart, navEnd);

console.log('Canonical header extracted, length:', canonicalHeader.length);

const servicesDir = 'inrank2.0/services';
const dirs = fs.readdirSync(servicesDir).filter(f => fs.statSync(path.join(servicesDir, f)).isDirectory());

let updated = 0;
dirs.forEach(dir => {
  const indexPath = path.join(servicesDir, dir, 'index.html');
  if (fs.existsSync(indexPath)) {
    let html = fs.readFileSync(indexPath, 'utf8');
    
    // Check if nav.css is linked in head
    if (!html.includes('/css/nav.css')) {
      html = html.replace('</head>', '  <link rel="stylesheet" href="/css/nav.css" />\n</head>');
    }

    // Replace header
    const oldHeaderMatch = html.match(/<header[\s\S]*?<\/header>/);
    if (oldHeaderMatch) {
      html = html.replace(oldHeaderMatch[0], canonicalHeader);
      fs.writeFileSync(indexPath, html, 'utf8');
      updated++;
    }
  }
});

console.log(`Updated ${updated} nested service index.html files with canonical unified header.`);

