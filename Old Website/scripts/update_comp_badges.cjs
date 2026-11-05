const fs = require('fs');
let css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const oldBadgeRegex = /\.comp-badge-good\s*\{[\s\S]*?\}\s*\.comp-badge-bad\s*\{[\s\S]*?\}/g;
const newBadgeCss = `.comp-badge-good {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  color: #009d49 !important;
  font-weight: 750 !important;
  font-size: 0.88rem !important;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  box-shadow: none !important;
}

.comp-badge-bad {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  color: #64748b !important;
  font-weight: 550 !important;
  font-size: 0.88rem !important;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  box-shadow: none !important;
}`;

if (oldBadgeRegex.test(css)) {
  css = css.replace(oldBadgeRegex, newBadgeCss);
  fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
  console.log('Updated comp-badge styles to clean text without borders.');
} else {
  console.log('Regex did not match, appending override at the end.');
  css += '\n\n/* Comparison table badges without pill borders */\n' + newBadgeCss;
  fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
  console.log('Appended clean comp-badge styles.');
}

