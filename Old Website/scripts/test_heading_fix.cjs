const fs = require('fs');

let content = fs.readFileSync('inrank2.0/services/ai-seo-services.html', 'utf8');

// Replace thread-node h4 with h3
content = content.replace(/(<div class="thread-node">[\s\S]*?)<h4>([\s\S]*?)<\/h4>/gi, '$1<h3>$2</h3>');

// Replace nav dropdown h4 with div
content = content.replace(/<h4 class="mega-rail-title">([\s\S]*?)<\/h4>/gi, '<div class="mega-rail-title">$1</div>');
content = content.replace(/<h4 class="work-drop-name">([\s\S]*?)<\/h4>/gi, '<div class="work-drop-name">$1</div>');

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

console.log('Headings in test ai-seo-services.html:');
list.forEach(h => console.log(`${h.tag}: ${h.text}`));
console.log('\nRemaining skips count:', skips.length);
if (skips.length > 0) console.log(skips);

