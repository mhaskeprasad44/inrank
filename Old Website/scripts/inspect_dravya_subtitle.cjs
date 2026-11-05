const fs = require('fs');
const txt = fs.readFileSync('our-work/dravyafinancial.html', 'utf8');
const subIdx = txt.indexOf('text-emerald-700 leading-snu');
console.log(txt.slice(subIdx, subIdx + 800));

