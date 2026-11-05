const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) res = res.concat(walk(full));
    else if (file.endsWith('.html')) res.push(full);
  });
  return res;
}

const all = walk('inrank2.0');
const missingWork = all.filter(f => !fs.readFileSync(f, 'utf8').includes('drop-work'));
const missingServ = all.filter(f => !fs.readFileSync(f, 'utf8').includes('drop-mega'));

console.log('Total files:', all.length);
console.log('Missing drop-work:', missingWork.length);
if (missingWork.length > 0) console.log(missingWork);
console.log('Missing drop-mega:', missingServ.length);
if (missingServ.length > 0) console.log(missingServ);

