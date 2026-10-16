const fs = require('fs');

const home = fs.readFileSync('../cytos/src/pages/HomePage.jsx', 'utf8');
let idx = 0;
let pos = 0;
while ((pos = home.indexOf('id=\\"rfqForm\\"', idx)) !== -1) {
  console.log(`Found id="rfqForm" at position ${pos}`);
  console.log(home.substring(pos - 150, pos + 250));
  idx = pos + 1;
}
