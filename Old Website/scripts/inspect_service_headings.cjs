const fs = require('fs');

const content = fs.readFileSync('inrank2.0/services/ai-seo-services.html', 'utf8');
console.log(`\n=== Headings in services/ai-seo-services.html ===`);
const regex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
let m;
while ((m = regex.exec(content)) !== null) {
  console.log(`${m[1].toUpperCase()}: ${m[2].replace(/<[^>]+>/g, '').trim().slice(0, 70)}`);
}

