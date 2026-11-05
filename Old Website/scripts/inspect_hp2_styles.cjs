const fs = require('fs');
const hp2 = fs.readFileSync('homepage-2.html', 'utf8');

const styleMatches = hp2.match(/<style[\s\S]*?<\/style>/g);
console.log('Style tags count:', styleMatches ? styleMatches.length : 0);
if (styleMatches) {
  styleMatches.forEach((s, idx) => {
    console.log(`=== STYLE TAG ${idx+1} ===`);
    console.log(s.substring(0, 2000));
  });
}

