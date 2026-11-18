const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const files = ['website-design-company-in-pune.html', 'digital-marketing-agency-in-pune.html'];

let allGood = true;

files.forEach(f => {
  const filePath = path.join(ROOT_DIR, f);
  const content = fs.readFileSync(filePath, 'utf8');

  // Check JSON-LD
  const match = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!match) {
    console.error(f + ': No JSON-LD found!');
    allGood = false;
  } else {
    try {
      const data = JSON.parse(match[1]);
      console.log(f + ': JSON-LD Valid! Graph nodes: ' + data['@graph'].length);
    } catch (err) {
      console.error(f + ' JSON-LD Error: ' + err.message);
      allGood = false;
    }
  }

  // Check section balance
  const mainOpen = (content.match(/<main/g) || []).length;
  const mainClose = (content.match(/<\/main>/g) || []).length;
  const secOpen = (content.match(/<section/g) || []).length;
  const secClose = (content.match(/<\/section>/g) || []).length;
  const detOpen = (content.match(/<details/g) || []).length;
  const detClose = (content.match(/<\/details>/g) || []).length;

  console.log(`${f} tags check: main (${mainOpen}/${mainClose}), section (${secOpen}/${secClose}), details (${detOpen}/${detClose})`);
  if (mainOpen !== mainClose || secOpen !== secClose || detOpen !== detClose) {
    console.error(`${f}: Unbalanced tags detected!`);
    allGood = false;
  }
});

if (!allGood) {
  process.exit(1);
} else {
  console.log("All pages validated successfully!");
}
