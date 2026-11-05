const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('inrank2.0');

function getHtmlFiles(dir) {
  let res = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      res = res.concat(getHtmlFiles(full));
    } else if (entry.name.endsWith('.html')) {
      res.push(full);
    }
  }
  return res;
}

const htmlFiles = getHtmlFiles(baseDir);
let modifiedCount = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  const rel = path.relative(baseDir, file).replace(/\\/g, '/');

  // 1. Clean nav dropdown h4s across all pages
  content = content.replace(/<h4 class="mega-rail-title">([\s\S]*?)<\/h4>/gi, '<div class="mega-rail-title">$1</div>');
  content = content.replace(/<h4 class="work-drop-name">([\s\S]*?)<\/h4>/gi, '<div class="work-drop-name">$1</div>');

  // 2. Fix service page process thread-node h4 -> h3
  if (rel.startsWith('services/')) {
    content = content.replace(/(<div class="thread-node">[\s\S]*?)<h4>([\s\S]*?)<\/h4>/gi, '$1<h3>$2</h3>');
  }

  // 3. Fix portfolio.html missing H2 before grid
  if (rel === 'portfolio.html') {
    if (!content.includes('portfolio-grid-heading')) {
      content = content.replace(
        /(<div id="portfolio-grid"[^>]*>)/i,
        '<h2 id="portfolio-grid-heading" class="sr-only">Featured Client Web &amp; Technology Deployments</h2>\n        $1'
      );
    }
  }

  // 4. Fix services.html and services/index.html missing H2 before pillars-grid-4
  if (rel === 'services.html' || rel === 'services/index.html') {
    if (!content.includes('growth-pillars-heading')) {
      content = content.replace(
        /(<div class="pillars-grid-4">)/i,
        '<h2 id="growth-pillars-heading" class="sr-only">Accountable Growth Pillars</h2>\n        $1'
      );
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
  }
}

console.log(`Successfully updated ${modifiedCount} files.`);

