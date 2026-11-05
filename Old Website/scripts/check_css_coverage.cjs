/**
 * Comprehensive CSS class coverage checker for Inrank 2.0
 * Checks all main HTML pages against all CSS files
 */
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'inrank2.0');

// Read all CSS
const cssFiles = ['css/core.css', 'css/nav.css', 'css/corporate.css', 'css/components.css', 'css/contact.css'];
let allCss = '';
for (const f of cssFiles) {
  allCss += fs.readFileSync(path.join(baseDir, f), 'utf8');
}

// Extract defined classes from CSS
const definedClasses = new Set();
const classRegex = /\.([a-zA-Z][a-zA-Z0-9_-]*)/g;
let m;
while ((m = classRegex.exec(allCss)) !== null) {
  definedClasses.add(m[1]);
}

// Tailwind utility pattern
const twPattern = /^(grid|flex|hidden|block|inline|items-|justify-|gap-|p[xytblr]?-|m[xytblr]?-|w-|h-|min-|max-|text-|bg-|border|rounded|shadow|font-|leading-|tracking-|space-|overflow|relative|absolute|fixed|sticky|top-|bottom-|left-|right-|z-|opacity-|transition|transform|scale-|rotate-|translate-|cursor-|select-|sr-only|lg:|md:|sm:|xl:|2xl:|hover:|focus:|group|container|col-span|row-span|grid-cols|aspect-|divide-|ring-|placeholder-|decoration-|underline|line-|break-|whitespace-|object-|float-|clear-|table-|align-|backdrop-|self-|order-|grow|shrink|basis-|place-|content-|auto-|antialiased|selection:)/;

const mainPages = ['index.html', 'services.html', 'pricing.html', 'case-studies.html', 'our-work.html', 'contact.html', 'about.html'];

let totalMissing = 0;

for (const page of mainPages) {
  const filePath = path.join(baseDir, page);
  const html = fs.readFileSync(filePath, 'utf8');
  
  // Extract all classes from HTML
  const htmlClasses = new Set();
  const classAttrRegex = /class="([^"]*)"/g;
  let cm;
  while ((cm = classAttrRegex.exec(html)) !== null) {
    cm[1].split(/\s+/).filter(Boolean).forEach(cls => htmlClasses.add(cls));
  }

  // Filter out Tailwind utilities and check custom classes
  const missing = [];
  for (const cls of htmlClasses) {
    if (twPattern.test(cls)) continue; // Handled by Tailwind CDN
    if (definedClasses.has(cls)) continue; // Defined in our CSS
    if (['active', 'open', 'show', 'is-dark', 'is-light', 'is-current', 'is-visible', 'nav-open', 'data-open'].includes(cls)) continue; // State classes
    missing.push(cls);
  }

  if (missing.length > 0) {
    console.log(`\n[${page}] ${missing.length} missing classes:`);
    missing.sort().forEach(cls => console.log(`  - ${cls}`));
    totalMissing += missing.length;
  } else {
    console.log(`[${page}] ✓ All classes covered`);
  }
}

console.log(`\n${'='.repeat(50)}`);
console.log(`Total CSS classes defined: ${definedClasses.size}`);
console.log(`Total missing across all pages: ${totalMissing}`);

