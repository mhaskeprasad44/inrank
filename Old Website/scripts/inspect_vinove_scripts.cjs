const fs = require('fs');
if (fs.existsSync('scripts/fetch_vinove_nav.cjs')) {
  console.log('=== fetch_vinove_nav.cjs ===');
  console.log(fs.readFileSync('scripts/fetch_vinove_nav.cjs', 'utf8').slice(0, 1000));
}
if (fs.existsSync('scripts/test_mob_drawer_fixed.cjs')) {
  console.log('=== test_mob_drawer_fixed.cjs ===');
  console.log(fs.readFileSync('scripts/test_mob_drawer_fixed.cjs', 'utf8').slice(0, 1000));
}

