const fs = require('fs');

const raw = fs.readFileSync('services.html', 'utf8');

// Find a sample card
const cardRegex = /<div class="[^"]*group[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi;
const cardMatch = raw.match(/<div class="[^"]*group[^"]*rounded-2xl[^"]*"[\s\S]*?<\/div>\s*<\/div>/i);
if (cardMatch) {
  console.log(cardMatch[0].slice(0, 1000));
} else {
  // Let's find how cards are structured
  const p1 = raw.indexOf('id="pillar-1"');
  console.log(raw.slice(p1, p1 + 2500));
}

