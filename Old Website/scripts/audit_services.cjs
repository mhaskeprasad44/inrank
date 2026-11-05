const fs = require('fs');
const path = require('path');

const servicesDir = path.resolve('inrank2.0/services');
const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.html'));

console.log(`Checking ${files.length} service html files...`);

let brokenCount = 0;
files.forEach(f => {
  const filePath = path.join(servicesDir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if #mob is opened
  const mobOpen = content.includes('id="mob"');
  // Check if main or hero exists
  const hasMain = content.includes('<main');
  const hasHero = content.includes('class="hero') || content.includes('class="service-hero') || content.includes('class="eco-hero');
  
  if (!hasMain || !hasHero) {
    brokenCount++;
    console.log(`Broken: ${f} -> hasMain: ${hasMain}, hasHero: ${hasHero}`);
  }
});

console.log(`Total broken service pages: ${brokenCount} / ${files.length}`);

