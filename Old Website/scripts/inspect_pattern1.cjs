const fs = require('fs');

const p1Files = ['portfolio.html', 'services.html', 'services/index.html'];

p1Files.forEach(f => {
  const content = fs.readFileSync('inrank2.0/' + f, 'utf8');
  console.log(`\n=== Headings in ${f} ===`);
  const regex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = regex.exec(content)) !== null) {
    console.log(`${m[1].toUpperCase()}: ${m[2].replace(/<[^>]+>/g, '').trim().slice(0, 70)}`);
  }
});

