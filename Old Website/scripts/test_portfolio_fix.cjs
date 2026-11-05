const fs = require('fs');

let content = fs.readFileSync('inrank2.0/portfolio.html', 'utf8');

// Replace nav dropdown h4 with div
content = content.replace(/<h4 class="mega-rail-title">([\s\S]*?)<\/h4>/gi, '<div class="mega-rail-title">$1</div>');
content = content.replace(/<h4 class="work-drop-name">([\s\S]*?)<\/h4>/gi, '<div class="work-drop-name">$1</div>');

// Add H2 before portfolio grid if not present
if (!content.includes('portfolio-grid-heading')) {
  content = content.replace(
    /(<div id="portfolio-grid"[^>]*>)/i,
    '<h2 id="portfolio-grid-heading" class="sr-only">Featured Client Web &amp; Technology Deployments</h2>\n        $1'
  );
}

// Audit headings
const regex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
const list = [];
let m;
while ((m = regex.exec(content)) !== null) {
  list.push({
    level: parseInt(m[1].charAt(1)),
    tag: m[1].toUpperCase(),
    text: m[2].replace(/<[^>]+>/g, '').trim().slice(0, 50)
  });
}

let prev = 0;
const skips = [];
list.forEach(item => {
  if (prev > 0 && item.level > prev + 1) {
    skips.push({ from: prev, to: item.level, text: item.text });
  }
  prev = item.level;
});

console.log('Headings in test portfolio.html:');
list.forEach(h => console.log(`${h.tag}: ${h.text}`));
console.log('\nRemaining skips count in portfolio.html:', skips.length);
if (skips.length > 0) console.log(skips);

