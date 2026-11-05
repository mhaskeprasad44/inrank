const fs = require('fs');

const pages = [
  'index.html',
  'our-work.html',
  'contact.html',
  'pricing.html',
  'services.html',
  'about.html',
  'case-studies.html'
];

console.log('=== DIAGNOSING INrank 2.0 PAGES ===');

pages.forEach(p => {
  const filePath = 'inrank2.0/' + p;
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${p}: FILE DOES NOT EXIST!`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');

  // Check header
  const hasNavDock = content.includes('nav-dock');
  const hasWhiteLogo = content.includes('/img/inrank-white-logo.svg');
  const hasCoreJs = content.includes('/js/core.js');
  const hasNavCss = content.includes('/css/nav.css');
  const hasCorpCss = content.includes('/css/corporate.css');
  const usesTailwind = content.includes('group-hover') || content.includes('text-foreground') || content.includes('bg-background');

  console.log(`\nPage: ${p} (Size: ${content.length} bytes)`);
  console.log(`  nav-dock: ${hasNavDock ? '✅' : '❌ NO'}`);
  console.log(`  white logo: ${hasWhiteLogo ? '✅' : '❌ NO'}`);
  console.log(`  /js/core.js: ${hasCoreJs ? '✅' : '❌ NO'}`);
  console.log(`  nav.css: ${hasNavCss ? '✅' : '❌ NO'}`);
  console.log(`  corporate.css: ${hasCorpCss ? '✅' : '❌ NO'}`);
  console.log(`  Tailwind classes present (broken styling): ${usesTailwind ? '⚠️ YES (BROKEN)' : '✅ NO'}`);
});

