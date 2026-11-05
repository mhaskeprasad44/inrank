const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('inrank2.0');
let replacedCount = 0;

files.forEach(f => {
  let html = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Replace eyebrow-pill with section-kicker and remove inline pill styles
  if (html.includes('eyebrow-pill')) {
    html = html.replace(/<span class="eyebrow-pill"[^>]*>([\s\S]*?)<\/span>/g, (m, content) => {
      // Strip any bullet or dot
      const clean = content.replace(/^[•\s\u2022\u25cf]+/, '').trim();
      return `<span class="section-kicker">${clean}</span>`;
    });
    changed = true;
    replacedCount++;
  }

  // Also strip any other pill classes
  if (html.includes('pill-badge') || html.includes('badge-pill')) {
    html = html.replace(/class="([^"]*)\b(pill-badge|badge-pill)\b([^"]*)"/g, 'class="$1$3"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, html, 'utf8');
    console.log(`Updated pills in: ${f}`);
  }
});

console.log(`Total files updated: ${replacedCount}`);

