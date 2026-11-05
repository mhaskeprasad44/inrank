/**
 * Inject components.css link into all inrank2.0 HTML files.
 * Places it right after corporate.css link.
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'inrank2.0');
const linkTag = '  <link rel="stylesheet" href="/css/components.css" />';

const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let updated = 0;
for (const file of htmlFiles) {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Skip if already has components.css
  if (html.includes('components.css')) {
    console.log(`[SKIP] ${file} already has components.css`);
    continue;
  }

  // Insert after corporate.css line
  const corpIdx = html.indexOf('href="/css/corporate.css"');
  if (corpIdx !== -1) {
    // Find end of line containing corporate.css
    let lineEnd = html.indexOf('\n', corpIdx);
    if (lineEnd === -1) lineEnd = html.length;
    html = html.slice(0, lineEnd + 1) + linkTag + '\n' + html.slice(lineEnd + 1);
  } else {
    // Fallback: insert before </head>
    html = html.replace('</head>', linkTag + '\n</head>');
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`[OK] ${file}`);
  updated++;
}

console.log(`\nDone: ${updated} files updated.`);

