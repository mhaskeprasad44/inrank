const fs = require('fs');

const orig = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/index.html', 'utf8');

const brandMatches = [...orig.matchAll(/<a[^>]*class="[^"]*brand[^"]*"[^>]*>([\s\S]*?)<\/a>/gi)];
console.log('Brand matches:');
brandMatches.forEach(m => console.log(m[0]));

const navMatches = [...orig.matchAll(/<header[^>]*>([\s\S]*?)<\/header>/gi)];
if (navMatches.length) {
  console.log('\nHeader in orig:', navMatches[0][0].substring(0, 1000));
}

