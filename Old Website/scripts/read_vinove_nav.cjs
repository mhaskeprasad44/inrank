const fs = require('fs');
const css = fs.readFileSync('scripts/vinove_nav.css', 'utf8');

// Find all rules related to #nav or .nav
const blocks = css.split('}');
for (const b of blocks) {
  if (b.includes('#nav') || b.includes('.nav-bar') || b.includes('.nav-links') || b.includes('.nav-item')) {
    const trimmed = b.trim();
    if (trimmed.length < 300) {
      console.log('--- BLOCK ---');
      console.log(trimmed + '}');
    }
  }
}

