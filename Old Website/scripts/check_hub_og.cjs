const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('inrank2.0');
const htmlFiles = fs.readdirSync(baseDir, { withFileTypes: true })
  .filter(d => !d.isDirectory() && d.name.endsWith('.html'))
  .map(d => d.name);

console.log('Hub pages check for OG tags:');
htmlFiles.forEach(f => {
  const c = fs.readFileSync(path.join(baseDir, f), 'utf8');
  const hasOg = c.includes('property="og:title"') || c.includes("property='og:title'");
  const hasRobots = c.includes('name="robots"');
  console.log(f, 'hasOg:', hasOg, 'hasRobots:', hasRobots);
});

