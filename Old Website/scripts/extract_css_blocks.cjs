const fs = require('fs');

function extractBlock(filePath, searchStr, len = 2000) {
  const content = fs.readFileSync(filePath, 'utf8');
  const idx = content.indexOf(searchStr);
  if (idx !== -1) {
    const start = Math.max(0, idx - 100);
    console.log(`\n================= ${filePath} around "${searchStr}" =================`);
    console.log(content.substring(start, start + len));
  }
}

extractBlock('scripts/apply_all_pages_system.cjs', 'hero-visual-card', 2200);
extractBlock('scripts/append_enhancements_css.cjs', 'services-grid', 3000);
extractBlock('scripts/apply_complete_homepage_fix.cjs', 'manifesto-section', 2000);

