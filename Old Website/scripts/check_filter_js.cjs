const fs = require('fs');

const workHtml = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
const scriptMatches = workHtml.match(/<script[\s\S]*?<\/script>/gi) || [];
console.log('Scripts in our-work.html:', scriptMatches.length);
scriptMatches.forEach((s, i) => {
  if (s.includes('filter') || s.includes('Filter')) {
    console.log(`Script ${i}:`, s.slice(0, 500));
  }
});

// Also search core.js for filter
const coreJs = fs.readFileSync('inrank2.0/js/core.js', 'utf8');
const filterInCore = coreJs.split('\n').filter(l => l.includes('filter') || l.includes('Filter'));
console.log('Filter references in core.js:', filterInCore);

