const fs = require('fs');
const txt = fs.readFileSync('our-work/dravyafinancial.html', 'utf8');
const headerIdx = txt.indexOf('<header class="space-y-5">');
console.log(txt.slice(headerIdx, headerIdx + 1500));

