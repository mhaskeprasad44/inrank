const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === 'dist') return;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (/\.(jsx?|html)$/.test(file)) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('../cytos');
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const forms = content.match(/<form[^>]*>[\s\S]*?<\/form>/gi);
  if (forms) {
    console.log(f + ': has ' + forms.length + ' forms');
    forms.forEach((form, idx) => {
      const idMatch = form.match(/id="([^"]+)"|id=\\"([^"\\]+)\\"/);
      const actionMatch = form.match(/action="([^"]+)"|action=\\"([^"\\]+)\\"/);
      console.log(`  Form ${idx + 1}: id=${idMatch ? (idMatch[1]||idMatch[2]) : 'none'}, action=${actionMatch ? (actionMatch[1]||actionMatch[2]) : 'none'}`);
    });
  }
});
