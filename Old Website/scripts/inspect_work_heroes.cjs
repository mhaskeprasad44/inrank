const fs = require('fs');
const path = require('path');

const dir = 'inrank2.0/our-work';
const files = fs.readdirSync(dir);
for (const f of files) {
  if (f.endsWith('.html')) {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const h1 = content.match(/<h1[\s\S]*?<\/h1>/i);
    // Find any span or div with rounded, pill, badge, or tag
    const badges = content.match(/<span[^>]*class="[^"]*(?:badge|pill|tag|kicker|meta)[^"]*"[^>]*>[\s\S]*?<\/span>/gi) || [];
    console.log(`=== ${f} ===`);
    console.log(`H1: ${h1 ? h1[0].replace(/<[^>]+>/g, '').trim() : 'NONE'}`);
    console.log(`Badges/Chips found: ${badges.length}`);
    badges.slice(0, 5).forEach(b => console.log('  ' + b.replace(/\s+/g, ' ')));
  }
}

