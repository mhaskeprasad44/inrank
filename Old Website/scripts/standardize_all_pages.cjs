const fs = require('fs');

const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

// Nav block (including progress bar, skip-link, nav, scrim, and mob drawer)
const navStart = indexHtml.indexOf('<div id="scroll-bar"');
const navEnd = indexHtml.indexOf('<!-- ══════════════════════════════════════════\n       MAIN CONTENT');
const navBlock = indexHtml.substring(navStart, navEnd).trim();

// Footer block
const footerStart = indexHtml.indexOf('<footer class="site-footer"');
const footerEnd = indexHtml.indexOf('</footer>') + '</footer>'.length;
const footerBlock = indexHtml.substring(footerStart, footerEnd).trim();

console.log('Nav block length:', navBlock.length);
console.log('Footer block length:', footerBlock.length);

const subpages = [
  'about.html',
  'case-studies.html',
  'contact.html',
  'digital-marketing-agency-in-pune.html',
  'our-work.html',
  'portfolio.html',
  'pricing.html',
  'privacy-policy.html',
  'services.html',
  'terms-and-conditions.html',
  'website-design-company-in-pune.html'
];

subpages.forEach(p => {
  const file = 'inrank2.0/' + p;
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Replace header/nav
  // Look for either <div id="scroll-bar" or <nav or <header
  const bodyTagIdx = content.indexOf('<body');
  const bodyCloseIdx = content.indexOf('>', bodyTagIdx) + 1;
  const mainIdx = content.indexOf('<main');

  if (bodyCloseIdx !== 0 && mainIdx !== -1) {
    const beforeNav = content.substring(0, bodyCloseIdx);
    const afterNav = content.substring(mainIdx);
    content = beforeNav + '\n  ' + navBlock + '\n\n  ' + afterNav;
  }

  // Replace footer
  const oldFooterStart = content.indexOf('<footer');
  const oldFooterEnd = content.indexOf('</footer>');
  if (oldFooterStart !== -1 && oldFooterEnd !== -1) {
    const beforeFooter = content.substring(0, oldFooterStart);
    const afterFooter = content.substring(oldFooterEnd + '</footer>'.length);
    content = beforeFooter + footerBlock + afterFooter;
  }

  // Ensure CSS and JS links
  if (!content.includes('corporate.css')) {
    content = content.replace('</head>', '  <link rel="stylesheet" href="/css/corporate.css" />\n</head>');
  }
  if (!content.includes('nav.css')) {
    content = content.replace('</head>', '  <link rel="stylesheet" href="/css/nav.css" />\n</head>');
  }
  if (!content.includes('footer-social.css')) {
    content = content.replace('</head>', '  <link rel="stylesheet" href="/css/footer-social.css" />\n</head>');
  }
  if (!content.includes('core.js')) {
    content = content.replace('</body>', '  <script src="/js/core.js"></script>\n</body>');
  }

  fs.writeFileSync(file, content);
  console.log('Standardized: ' + p);
});

