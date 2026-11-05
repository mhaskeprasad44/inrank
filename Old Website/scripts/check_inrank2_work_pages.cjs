const fs = require('fs');
const path = require('path');

const dir = 'inrank2.0/our-work';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const title = (content.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
  const h1 = (content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1];
  const category = (content.match(/class="work-card-category"[^>]*>([\s\S]*?)<\//) || content.match(/class="[^"]*category[^"]*"[^>]*>([\s\S]*?)<\//) || [])[1];
  
  // Look for any mention of landscape or real estate in greytothegreen or vasro
  console.log(`\n--- ${f} ---`);
  console.log('Title:', title ? title.trim() : 'N/A');
  console.log('H1:', h1 ? h1.replace(/<[^>]+>/g, '').trim() : 'N/A');
  if (category) console.log('Category:', category.trim());

  if (f === 'greytothegreen.html') {
    const idx = content.indexOf('Architecture');
    console.log('greytothegreen mentions Architecture:', idx !== -1);
    if (idx !== -1) console.log(content.slice(Math.max(0, idx - 50), Math.min(content.length, idx + 150)));
  }
  if (f === 'vasroventures.html') {
    const idx = content.indexOf('Real Estate');
    console.log('vasroventures mentions Real Estate:', idx !== -1);
    if (idx !== -1) console.log(content.slice(Math.max(0, idx - 50), Math.min(content.length, idx + 150)));
  }
});

