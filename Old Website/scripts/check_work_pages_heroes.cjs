const fs = require('fs');
const path = require('path');

const dir = 'inrank2.0/our-work';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  console.log(`=== ${f} ===`);
  const heroMatch = content.match(/<section[^>]*class="[^"]*hero[^"]*"[^>]*>[\s\S]*?<\/section>/i);
  if (heroMatch) {
    console.log(heroMatch[0].slice(0, 600));
  } else {
    console.log('No hero section found.');
  }
});

