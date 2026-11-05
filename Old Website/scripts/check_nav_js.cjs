const fs = require('fs');

function checkJs(file) {
  if (fs.existsSync(file)) {
    console.log(`=== ${file} ===`);
    const content = fs.readFileSync(file, 'utf8');
    console.log(content.slice(0, 1000));
  } else {
    console.log(`${file} does not exist.`);
  }
}

checkJs('inrank2.0/js/nav.js');
checkJs('inrank2.0/js/corporate.js');
checkJs('inrank2.0/js/main.js');

