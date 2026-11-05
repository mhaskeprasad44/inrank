const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir, base = '') {
  let res = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) {
      res = res.concat(getHtmlFiles(full, rel));
    } else if (entry.name.endsWith('.html')) {
      res.push(rel.replace(/\\/g, '/'));
    }
  }
  return res;
}

const pages = getHtmlFiles('inrank2.0');
console.log('Total pages in inrank2.0:', pages.length);
console.log(JSON.stringify(pages, null, 2));

