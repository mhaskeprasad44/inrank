const fs = require('fs');

const raw = fs.readFileSync('case-studies.html', 'utf8');

const articles = [...raw.matchAll(/<article[\s\S]*?<\/article>/gi)].map(m => m[0]);
console.log('Extracting 10 case study articles:');

articles.forEach((a, i) => {
  const h2 = a.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const clean = a.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`\n--- Article ${i + 1} ---`);
  console.log('H2:', h2 ? h2[1].replace(/<[^>]+>/g, '').trim() : 'None');
  console.log('Snippet:', clean.slice(0, 250));
});

fs.writeFileSync('scripts/extracted_case_study_articles.json', JSON.stringify(articles, null, 2));

