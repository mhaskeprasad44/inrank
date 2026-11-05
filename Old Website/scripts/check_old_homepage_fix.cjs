const fs = require('fs');
const content = fs.readFileSync('scripts/apply_complete_homepage_fix.cjs', 'utf8');

const regexes = [
  /hero-visual-card[\s\S]*?(?=\/\*|\n\n[.#])/g,
  /manifesto-section[\s\S]*?(?=\/\*|\n\n[.#])/g,
  /services-grid[\s\S]*?(?=\/\*|\n\n[.#])/g,
  /service-card[\s\S]*?(?=\/\*|\n\n[.#])/g,
  /pillars-strip[\s\S]*?(?=\/\*|\n\n[.#])/g
];

regexes.forEach((r, i) => {
  const match = content.match(r);
  console.log(`Regex ${i} matches:`, match ? match.length : 0);
  if (match) {
    console.log(`Sample ${i}:`, match[0].slice(0, 200));
  }
});

