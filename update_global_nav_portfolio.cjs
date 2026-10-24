const fs = require('fs');
const path = require('path');

const targetFiles = [
  'index.html',
  'pricing.html',
  'contact.html',
  'website-design-company-in-pune.html',
  'digital-marketing-agency-in-pune.html'
];

targetFiles.forEach(fileName => {
  const filePath = path.join(__dirname, fileName);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add to Desktop Nav if not already present
  if (!content.includes('href="/portfolio.html"')) {
    // Look for Results link or Pricing link
    if (content.includes('href="/#results"')) {
      content = content.replace(
        '<a href="/#results"',
        `<a href="/portfolio.html" class="flex items-center gap-1 text-sm font-bold text-foreground hover:text-emerald-600 transition-colors"><span>Portfolio</span><span class="px-1.5 py-0.2 rounded text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">10 Works</span></a>\n              <a href="/#results"`
      );
      console.log(`✓ Added desktop Portfolio link to ${fileName}`);
    } else if (content.includes('href="/pricing.html"')) {
      content = content.replace(
        'href="/pricing.html"',
        `href="/portfolio.html" class="flex items-center gap-1 text-sm font-bold text-foreground hover:text-emerald-600 transition-colors"><span>Portfolio</span><span class="px-1.5 py-0.2 rounded text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">10 Works</span></a>\n            <a href="/pricing.html"`
      );
      console.log(`✓ Added desktop Portfolio link before pricing in ${fileName}`);
    }
  }

  // 2. Add to Mobile Drawer Nav if not already present
  if (!content.includes('href="/portfolio.html"') || (content.match(/href="\/portfolio\.html"/g) || []).length < 2) {
    if (content.includes('href="/pricing.html"') && content.includes('id="mobile-menu-drawer"')) {
      // Find mobile drawer section
      const mobileDrawerIndex = content.indexOf('id="mobile-menu-drawer"');
      if (mobileDrawerIndex !== -1) {
        const afterDrawer = content.slice(mobileDrawerIndex);
        if (!afterDrawer.includes('href="/portfolio.html"')) {
          content = content.replace(
            /(<div id="mobile-menu-drawer"[^>]*>[\s\S]*?<div[^>]*>)/i,
            `$1\n            <a href="/portfolio.html" class="block py-2.5 px-3 rounded-lg bg-emerald-50/70 text-emerald-800 font-bold text-sm">Portfolio &amp; Case Studies (10 Works)</a>`
          );
          console.log(`✓ Added mobile Portfolio link to ${fileName}`);
        }
      }
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Global navigation updated across pages.');
