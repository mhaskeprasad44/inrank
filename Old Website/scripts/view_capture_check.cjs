const fs = require('fs');
if (fs.existsSync('scripts/capture_check.cjs')) {
  console.log(fs.readFileSync('scripts/capture_check.cjs', 'utf8').slice(0, 800));
}

