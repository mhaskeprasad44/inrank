const fs = require('fs');
if (fs.existsSync('scripts/append_contact_and_work_css.cjs')) {
  console.log(fs.readFileSync('scripts/append_contact_and_work_css.cjs', 'utf8').slice(0, 1500));
}

