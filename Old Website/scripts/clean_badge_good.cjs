const fs = require('fs');
let css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const oldRegex = /\.badge-good\s*\{[\s\S]*?padding:\s*6px\s*14px[\s\S]*?\}/g;
const newCleanBadge = `.badge-good {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  padding: 0 !important;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  color: #009d49 !important;
  font-weight: 800 !important;
  font-size: 0.92rem !important;
  box-shadow: none !important;
}`;

css = css.replace(oldRegex, newCleanBadge);
// Also append to the end to ensure no overrides
css += '\n\n' + newCleanBadge;

fs.writeFileSync('inrank2.0/css/corporate.css', css, 'utf8');
console.log('Successfully replaced .badge-good with clean text.');

