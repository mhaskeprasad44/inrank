const fs = require('fs');

const dravya = fs.readFileSync('inrank2.0/our-work/dravyafinancial.html', 'utf8');

const sections = dravya.match(/<section[\s\S]*?<\/section>/g);
console.log('Total sections in dravya:', sections.length);
sections.forEach((s, i) => {
  console.log(`\n--- SECTION ${i} ---`);
  console.log(s.slice(0, 200).replace(/\s+/g, ' '));
  const text = s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log('Text length:', text.length);
  console.log('Snippet:', text.slice(0, 300));
});

