const fs = require('fs');

const homeHtml = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/index.html', 'utf8');

// Extract nav
const navMatch = homeHtml.match(/<!-- ══════════════════════════════════════════\s+VINOVE FLOATING DOCK NAVIGATION[\s\S]*?<\/div>\s*<\/div>/i);
if (navMatch) console.log('Extracted NAV, length:', navMatch[0].length);

// Extract footer
const footerMatch = homeHtml.match(/<!-- ══════════════════════════════════════════\s+VINOVE CORPORATE FOOTER[\s\S]*?<\/footer>/i);
if (footerMatch) console.log('Extracted FOOTER, length:', footerMatch[0].length);

// Extract closing
const closingMatch = homeHtml.match(/<!-- 13\. VINOVE CLOSING DUAL ACTION CARDS -->[\s\S]*?<\/section>/i);
if (closingMatch) console.log('Extracted CLOSING, length:', closingMatch[0].length);

