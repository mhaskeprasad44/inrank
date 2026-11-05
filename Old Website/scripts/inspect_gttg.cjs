const fs = require('fs');
const content = fs.readFileSync('inrank2.0/our-work/greytothegreen.html', 'utf8');
const heroMatch = content.match(/<section class="work-hero"[\s\S]*?<\/section>/i) || content.match(/<main[\s\S]*?<\/section>/i);
if (heroMatch) {
  console.log(heroMatch[0]);
} else {
  console.log('No hero match, first 1500 chars after body:');
  const bodyIdx = content.indexOf('<body');
  console.log(content.slice(bodyIdx, bodyIdx + 1500));
}

