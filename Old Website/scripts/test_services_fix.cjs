const fs = require('fs');

let content = fs.readFileSync('inrank2.0/services.html', 'utf8');

// Replace nav dropdown h4 with div
content = content.replace(/<h4 class="mega-rail-title">([\s\S]*?)<\/h4>/gi, '<div class="mega-rail-title">$1</div>');
content = content.replace(/<h4 class="work-drop-name">([\s\S]*?)<\/h4>/gi, '<div class="work-drop-name">$1</div>');

// Add H2 before pillars-grid-4 if not present
if (!content.includes('growth-pillars-heading')) {
  content = content.replace(
    /(<div class="pillars-grid-4">)/i,
    '<h2 id="growth-pillars-heading" class="sr-only">Accountable Growth Pillars</h2>\n        $1'
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

console.log('Headings in test services.html:');
list.forEach(h => console.log(`${h.tag}: ${h.text}`));
console.log('\nRemaining skips count in services.html:', skips.length);
if (skips.length > 0) console.log(skips);

