/**
 * Inject Tailwind CDN <script> into all inrank2.0 HTML files.
 * Places it right after the Google Fonts link and before our custom CSS.
 * Configures Tailwind brand colors to match Inrank palette.
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'inrank2.0');

// Tailwind CDN script with brand color configuration
const tailwindBlock = `
  <!-- Tailwind CSS CDN (utility layer) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'] },
          colors: {
            emerald: {
              50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7',
              400: '#34d399', 500: '#10b981', 600: '#009d49', 700: '#047857',
              800: '#065f46', 900: '#064e3b', 950: '#022c22'
            },
            slate: {
              50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
              400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
              800: '#1e293b', 900: '#0f172a', 950: '#081424'
            }
          }
        }
      }
    }
  </script>
`;

const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let updated = 0;
for (const file of htmlFiles) {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Skip if already has tailwind
  if (html.includes('tailwindcss') || html.includes('cdn.tailwindcss.com')) {
    console.log(`[SKIP] ${file} already has Tailwind`);
    continue;
  }

  // Strategy: Insert before the first <link rel="stylesheet" href="/css/...">
  // or before </head> as fallback
  const coreLink = html.indexOf('<link rel="stylesheet" href="/css/core.css"');
  const coreLinkAlt = html.indexOf("<link rel='stylesheet' href='/css/core.css'");
  const insertBefore = coreLink !== -1 ? coreLink : (coreLinkAlt !== -1 ? coreLinkAlt : -1);

  if (insertBefore !== -1) {
    // Find the beginning of the line containing core.css link
    let lineStart = insertBefore;
    while (lineStart > 0 && html[lineStart - 1] !== '\n') lineStart--;
    // Find the comment line above (<!-- Core & Vinove... -->)
    const commentPattern = '<!-- Core';
    const commentIdx = html.lastIndexOf(commentPattern, lineStart);
    if (commentIdx !== -1 && lineStart - commentIdx < 100) {
      let commentLineStart = commentIdx;
      while (commentLineStart > 0 && html[commentLineStart - 1] !== '\n') commentLineStart--;
      html = html.slice(0, commentLineStart) + tailwindBlock + '\n\n  ' + html.slice(commentLineStart);
    } else {
      html = html.slice(0, lineStart) + tailwindBlock + '\n\n' + html.slice(lineStart);
    }
  } else {
    // Fallback: insert before </head>
    html = html.replace('</head>', tailwindBlock + '\n</head>');
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`[OK] ${file} — Tailwind CDN injected`);
  updated++;
}

console.log(`\nDone: ${updated} files updated, ${htmlFiles.length - updated} skipped.`);

