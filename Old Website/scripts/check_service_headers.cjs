const fs = require('fs');
const path = require('path');

function list(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) res = res.concat(list(full));
    else if (f.endsWith('.html')) res.push(full);
  }
  return res;
}

const listFiles = list('inrank2.0/services');
listFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('mega-grid-wrap')) console.log('Has master:', f);
});
