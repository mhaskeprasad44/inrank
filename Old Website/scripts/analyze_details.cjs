const fs = require('fs');

const navCss = fs.readFileSync('vinove_css_nav.css', 'utf8');
const corpCss = fs.readFileSync('vinove_css_pages_corporate.css', 'utf8');
const coreJs = fs.readFileSync('vinove_js_core.js', 'utf8');
const homeHtml = fs.readFileSync('vinove_home.html', 'utf8');

// Find CSS variables in navCss and corpCss
const navVars = navCss.match(/--[\w-]+:\s*[^;]+;/g) || [];
const corpVars = corpCss.match(/--[\w-]+:\s*[^;]+;/g) || [];

console.log('=== CSS VARIABLES FOUND ===');
console.log('Nav vars (sample):', navVars.slice(0, 15));
console.log('Corp vars (sample):', corpVars.slice(0, 20));

// Find all nav items and dropdown IDs
const navItems = [...homeHtml.matchAll(/<li class="nav-item"[^>]*>([\s\S]*?)<\/li>/gi)];
console.log('\n=== NAV ITEMS COUNT:', navItems.length);
navItems.forEach((item, i) => {
  const btn = item[1].match(/<button[^>]*class="nav-link"[^>]*>([\s\S]*?)<\/button>/i) || item[1].match(/<a[^>]*class="nav-link"[^>]*>([\s\S]*?)<\/a>/i);
  console.log(`Item ${i + 1}:`, btn ? btn[1].replace(/<[^>]+>/g, '').trim() : 'Link/Button');
});

// Find right side actions in nav
const navActions = homeHtml.match(/<div class="nav-actions"[\s\S]*?<\/div>\s*<\/div>/i);
console.log('\n=== NAV ACTIONS ===');
console.log(navActions ? navActions[0] : 'None');

// Inspect Section 1: Hero
const heroHtml = homeHtml.match(/<section class="hero[^"]*"[\s\S]*?<\/section>/i);
console.log('\n=== HERO SECTION STRUCTURE ===');
if (heroHtml) {
  console.log(heroHtml[0].slice(0, 1200));
}

// Inspect Section 2: Manifesto
const manifestoHtml = homeHtml.match(/<section class="manifesto"[\s\S]*?<\/section>/i);
console.log('\n=== MANIFESTO SECTION STRUCTURE ===');
if (manifestoHtml) {
  console.log(manifestoHtml[0].slice(0, 1000));
}

// Inspect Section 3: Operating
const operatingHtml = homeHtml.match(/<section class="operating"[\s\S]*?<\/section>/i);
console.log('\n=== OPERATING SECTION STRUCTURE ===');
if (operatingHtml) {
  console.log(operatingHtml[0].slice(0, 1000));
}

// Inspect Section 4: Proof
const proofHtml = homeHtml.match(/<section class="proof"[\s\S]*?<\/section>/i);
console.log('\n=== PROOF SECTION STRUCTURE ===');
if (proofHtml) {
  console.log(proofHtml[0].slice(0, 1000));
}

