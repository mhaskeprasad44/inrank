const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'build') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html') && file !== 'google27965a1a30fcb004.html') {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getHtmlFiles(ROOT_DIR);
const list = [];

files.forEach(f => {
  const rel = path.relative(ROOT_DIR, f).replace(/\\/g, '/');
  const content = fs.readFileSync(f, 'utf8');

  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : '';

  list.push({ file: rel, title, h1 });
});

console.log('--- ALL PAGES TITLES & H1s ---');
list.forEach(item => {
  console.log(`${item.file}`);
  console.log(`   Title: ${item.title}`);
  console.log(`   H1:    ${item.h1}`);
});
