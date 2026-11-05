const fs = require('fs');
const path = require('path');

const targetFiles = [
  'index.html',
  'pricing.html',
  'contact.html',
  'homepage-2.html',
  'homepage-3.html',
  'server.ts',
  'public/llms.txt',
  'src/main.ts',
  'src/homepage2.ts',
  'src/homepage3.ts'
];

targetFiles.forEach(file => {
  const p = path.join(__dirname, file);
  if (!fs.existsSync(p)) return;
  let text = fs.readFileSync(p, 'utf8');
  const original = text;

  // Replace +91 76204 14165 / +91 70386 12280 variations
  text = text.replace(/\+91[\s-]?76204[\s-]?14165/g, '+91 87888 23182');
  text = text.replace(/\+91[\s-]?70386[\s-]?12280/g, '+91 87888 23182');

  // Replace without leading + but with 91 prefix
  text = text.replace(/917620414165/g, '918788823182');
  text = text.replace(/917038612280/g, '918788823182');

  // Replace 10 digit without country code
  text = text.replace(/7620414165/g, '8788823182');
  text = text.replace(/7038612280/g, '8788823182');
  text = text.replace(/76204[\s-]14165/g, '87888 23182');
  text = text.replace(/70386[\s-]12280/g, '87888 23182');

  // Fix tel: and wa.me cleanups if any spaced strings were inserted
  text = text.replace(/tel:\+91[\s-]87888[\s-]23182/g, 'tel:+918788823182');
  text = text.replace(/wa\.me\/91[\s-]87888[\s-]23182/g, 'wa.me/918788823182');
  text = text.replace(/wa\.me\/\+918788823182/g, 'wa.me/918788823182');

  if (text !== original) {
    fs.writeFileSync(p, text, 'utf8');
    console.log(`Updated phone numbers in ${file}`);
  } else {
    console.log(`No changes needed in ${file}`);
  }
});
