const fs = require('fs');

const d1 = fs.readFileSync('inrank2.0/our-work/dravyafinancial.html', 'utf8');
const searchWords = ['skincare', 'botanical', 'neem', 'ayurvedic', 'wealth', 'financial', 'capital', 'dravya'];
searchWords.forEach(w => {
  const count = (d1.match(new RegExp(w, 'gi')) || []).length;
  console.log(`${w}: ${count} occurrences`);
});

