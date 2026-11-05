const fs = require('fs');
const path = require('path');

const blogs = require('./temp_blogs_data.cjs');
console.log(`Loaded ${blogs.length} blogs for generation.`);

// Load index.html to extract authentic Header & Footer
const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

// Extract Header & Nav (from <!-- Top Notification or <header to </header>)
const headerMatch = indexHtml.match(/(<!-- ==========================================================================\s+HEADER & FLOATING CAPSULE NAVIGATION[\s\S]*?<\/header>)/);
if (!headerMatch) {
  console.error('Could not extract header from index.html');
  process.exit(1);
}
let headerHtml = headerMatch[1];

// Extract Mobile Drawer (#mob)
const mobMatch = indexHtml.match(/(<!-- Mobile Drawer Navigation[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/);
let mobDrawerHtml = '';
if (mobMatch) {
  mobDrawerHtml = mobMatch[1];
} else {
  const fallbackMob = indexHtml.match(/(<div class="mob-drawer" id="mob"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/);
  if (fallbackMob) mobDrawerHtml = fallbackMob[1];
}

// Extract Footer (from <footer to </footer>)
const footerMatch = indexHtml.match(/(<!-- ==========================================================================\s+SITE FOOTER[\s\S]*?<\/footer>)/);
if (!footerMatch) {
  console.error('Could not extract footer from index.html');
  process.exit(1);
}
let footerHtml = footerMatch[1];

console.log('Successfully extracted authentic Inrank 2.0 Header, Mobile Drawer, and Footer!');

