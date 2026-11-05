const fs = require('fs');
const content = fs.readFileSync('scripts/extracted_pricing_snippet.html', 'utf8');

['tab-web', 'tab-seo', 'tab-social'].forEach(tabId => {
  const start = content.indexOf(`id="${tabId}"`);
  if (start !== -1) {
    console.log(`\n================ ID: ${tabId} ================`);
    const slice = content.slice(start, start + 3500);
    console.log(slice);
  }
});

