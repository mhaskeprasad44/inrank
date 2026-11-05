const fs = require('fs');
if (fs.existsSync('scripts/check_current_pillars_html.cjs')) {
  console.log(fs.readFileSync('scripts/check_current_pillars_html.cjs', 'utf8'));
}

