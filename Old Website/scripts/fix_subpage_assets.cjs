/**
 * Fix sub-directory HTML files (services/, case-studies/, our-work/) 
 * to reference the 2.0 CSS/JS instead of production Vite assets.
 * Also adds Tailwind CDN.
 */
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'inrank2.0');

const tailwindScript = `<script src="https://cdn.tailwindcss.com"></script>
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
  </script>`;

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  }
  return results;
}

// Get sub-directory HTML files only
const subDirs = ['services', 'case-studies', 'our-work'];
let allFiles = [];
for (const sd of subDirs) {
  const subPath = path.join(baseDir, sd);
  if (fs.existsSync(subPath)) {
    allFiles = allFiles.concat(walk(subPath));
  }
}

let fixed = 0;
for (const filePath of allFiles) {
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Replace /src/main.ts with proper CSS/JS
  if (html.includes('/src/main.ts') || html.includes('/src/index.css')) {
    html = html.replace(/<script[^>]*src="\/src\/main\.ts"[^>]*><\/script>/g, 
      '<script src="/js/core.js" defer></script>');
    html = html.replace(/<link[^>]*href="\/src\/index\.css"[^>]*\/?>/g, '');
  }

  // 2. Add Tailwind CDN if missing
  if (!html.includes('cdn.tailwindcss.com')) {
    // Insert before </head> or before first <link rel="stylesheet"
    if (html.includes('</head>')) {
      html = html.replace('</head>', 
        `  ${tailwindScript}\n  <link rel="stylesheet" href="/css/core.css" />\n  <link rel="stylesheet" href="/css/nav.css" />\n  <link rel="stylesheet" href="/css/corporate.css" />\n  <link rel="stylesheet" href="/css/components.css" />\n</head>`);
    }
  }

  // 3. Add components.css if not present
  if (!html.includes('components.css') && html.includes('cdn.tailwindcss.com')) {
    html = html.replace('</head>', 
      '  <link rel="stylesheet" href="/css/components.css" />\n</head>');
  }

  fs.writeFileSync(filePath, html, 'utf8');
  fixed++;
}

console.log(`Fixed ${fixed} sub-directory HTML files.`);

