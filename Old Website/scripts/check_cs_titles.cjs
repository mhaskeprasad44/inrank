const fs = require('fs');

const cs = fs.readFileSync('inrank2.0/case-studies/cytos.html', 'utf8');
const work = fs.readFileSync('inrank2.0/our-work/cytos.html', 'utf8');

const t1 = cs.match(/<title>([\s\S]*?)<\/title>/i);
const t2 = work.match(/<title>([\s\S]*?)<\/title>/i);

console.log('case-studies/cytos.html title:', t1 ? t1[1] : 'none');
console.log('our-work/cytos.html title:', t2 ? t2[1] : 'none');

