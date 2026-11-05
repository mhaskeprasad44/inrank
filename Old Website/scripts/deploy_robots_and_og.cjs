const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('inrank2.0');

function getHtmlFiles(dir) {
  let res = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      res = res.concat(getHtmlFiles(full));
    } else if (entry.name.endsWith('.html')) {
      res.push(full);
    }
  }
  return res;
}

const htmlFiles = getHtmlFiles(baseDir);
const robotsTag = '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />';

let robotsAddedCount = 0;
let ogAddedCount = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  const rel = path.relative(baseDir, file).replace(/\\/g, '/');

  // 1. Add modern robots tag if missing
  if (!content.includes('name="robots"')) {
    if (content.includes('<meta name="description"')) {
      content = content.replace(/(<meta name="description"[^>]*>)/i, `$1\n  ${robotsTag}`);
      robotsAddedCount++;
    } else if (content.includes('</head>')) {
      content = content.replace('</head>', `  ${robotsTag}\n</head>`);
      robotsAddedCount++;
    }
  }

  // 2. Add OpenGraph & Twitter tags if missing
  if (!content.includes('property="og:title"')) {
    const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                      content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
    
    const pageTitle = titleMatch ? titleMatch[1].trim() : 'Inrank Technologies | Digital Growth & Performance Web Partner Pune';
    const pageDesc = descMatch ? descMatch[1].trim() : 'Performance-first web development and digital growth agency in Baner, Pune.';
    const pageUrl = 'https://inranktech.com/' + (rel === 'index.html' ? '' : rel);

    const ogTags = `
  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${pageUrl}" />
  <meta property="og:title" content="${pageTitle}" />
  <meta property="og:description" content="${pageDesc}" />
  <meta property="og:image" content="https://inranktech.com/img/og-preview.png" />
  <meta property="og:site_name" content="Inrank Technologies" />
  <meta property="og:locale" content="en_IN" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${pageUrl}" />
  <meta name="twitter:title" content="${pageTitle}" />
  <meta name="twitter:description" content="${pageDesc}" />
  <meta name="twitter:image" content="https://inranktech.com/img/og-preview.png" />`;

    if (content.includes('</head>')) {
      content = content.replace('</head>', `${ogTags}\n</head>`);
      ogAddedCount++;
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
  }
}

console.log(`Added modern robots tag to ${robotsAddedCount} pages.`);
console.log(`Added OpenGraph / Twitter cards to ${ogAddedCount} pages.`);

