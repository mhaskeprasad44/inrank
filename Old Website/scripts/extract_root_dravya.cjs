const fs = require('fs');

if (fs.existsSync('our-work/dravyafinancial.html')) {
  const txt = fs.readFileSync('our-work/dravyafinancial.html', 'utf8');
  console.log('Root our-work/dravyafinancial.html length:', txt.length);
  // Extract all headings and text blocks
  const headings = txt.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/g) || [];
  console.log('Headings:', headings.map(h => h.replace(/<[^>]+>/g, '').trim()));
  
  // Extract summary/challenge/solution
  const pTags = txt.match(/<p[^>]*>([\s\S]*?)<\/p>/g) || [];
  console.log('\nFirst 8 paragraphs:');
  pTags.slice(0, 8).forEach((p, idx) => {
    console.log(`[P${idx + 1}]:`, p.replace(/<[^>]+>/g, '').trim());
  });
}

