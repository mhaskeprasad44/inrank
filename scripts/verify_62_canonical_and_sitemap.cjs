const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const sitemapContent = fs.readFileSync(path.join(rootDir, 'sitemap.xml'), 'utf8');
const locMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

console.log(`Found ${locMatches.length} URLs in sitemap.xml.`);

if (locMatches.length !== 62) {
  console.error(`ERROR: Expected 62 URLs, but found ${locMatches.length}!`);
  process.exit(1);
}

// Check public/sitemap.xml
const pubSitemap = fs.readFileSync(path.join(rootDir, 'public', 'sitemap.xml'), 'utf8');
const pubLocMatches = [...pubSitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
if (pubLocMatches.length !== 62) {
  console.error(`ERROR: Expected 62 URLs in public/sitemap.xml, found ${pubLocMatches.length}!`);
  process.exit(1);
}

let errors = 0;
for (const url of locMatches) {
  if (!url.startsWith('https://www.inranktech.com/')) {
    console.error(`ERROR: Non-www URL found: ${url}`);
    errors++;
  }

  // Determine local file
  let localRelPath = '';
  const urlPath = url.replace('https://www.inranktech.com/', '');
  if (urlPath === '') {
    localRelPath = 'index.html';
  } else if (urlPath.startsWith('services/')) {
    const slug = urlPath.replace('services/', '').replace(/\/$/, '');
    localRelPath = path.join('public', 'services', slug, 'index.html');
  } else {
    localRelPath = urlPath;
  }

  const absPath = path.join(rootDir, localRelPath);
  if (!fs.existsSync(absPath)) {
    console.error(`ERROR: Missing file for ${url}: ${absPath}`);
    errors++;
    continue;
  }

  const content = fs.readFileSync(absPath, 'utf8');
  const canonMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  if (!canonMatch) {
    console.error(`ERROR: No canonical in ${localRelPath}`);
    errors++;
  } else if (canonMatch[1] !== url) {
    console.error(`ERROR: Canonical mismatch in ${localRelPath}: expected ${url}, got ${canonMatch[1]}`);
    errors++;
  }

  if (/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(content)) {
    console.error(`ERROR: noindex found in active sitemap URL: ${localRelPath}`);
    errors++;
  }
}

if (errors === 0) {
  console.log('PERFECT! All 62 URLs are validated:');
  console.log(' - Exactly 62 URLs in sitemap.xml & public/sitemap.xml');
  console.log(' - 100% start with https://www.inranktech.com/');
  console.log(' - 100% have physical files on disk');
  console.log(' - 100% have exact self-referential canonical tags');
  console.log(' - 0 have noindex tags');
} else {
  console.error(`Verification failed with ${errors} errors.`);
  process.exit(1);
}

