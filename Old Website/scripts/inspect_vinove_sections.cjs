const fs = require('fs');
const html = fs.readFileSync('scripts/vinove_raw.html', 'utf8');

function printMatch(label, regex) {
  const m = html.match(regex);
  if (m) {
    console.log(`=== ${label} ===`);
    console.log(m[0].substring(0, 1500));
    console.log('\n');
  } else {
    console.log(`=== ${label} (NOT FOUND) ===\n`);
  }
}

printMatch('HEADER', /<header[\s\S]*?<\/header>/i);
printMatch('HERO', /<section\s+class="hero[^"]*"[\s\S]*?<\/section>/i);
printMatch('MANIFESTO', /<section\s+class="manifesto[^"]*"[\s\S]*?<\/section>/i);
printMatch('OPERATING', /<section\s+class="operating[^"]*"[\s\S]*?<\/section>/i);
printMatch('PROOF', /<section\s+class="proof[^"]*"[\s\S]*?<\/section>/i);
printMatch('PEOPLE', /<section\s+class="people-section[^"]*"[\s\S]*?<\/section>/i);
printMatch('CLOSING', /<section\s+class="closing[^"]*"[\s\S]*?<\/section>/i);
printMatch('FOOTER', /<footer[\s\S]*?<\/footer>/i);

