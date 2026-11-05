const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) res = res.concat(walk(full));
    else if (file.endsWith('.html')) res.push(full);
  });
  return res;
}

const allHtml = walk('inrank2.0');
let updatedCount = 0;

allHtml.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // 1. Greytothegreen: Landscape architecture portal -> Botanical skincare & remedies
  if (content.includes('Landscape architecture portal')) {
    content = content.replace(/Landscape architecture portal/g, 'Botanical skincare &amp; remedies');
    changed = true;
  }

  // 2. Cytos Diagnostics / Clinical pathology & lab network -> CyTOS Machines / PCB prototyping CNC machines
  if (content.includes('Cytos Diagnostics') || content.includes('Clinical pathology &amp; lab network')) {
    content = content.replace(/Cytos Diagnostics/g, 'CyTOS Machines');
    content = content.replace(/Clinical pathology &amp; lab network/g, 'PCB prototyping CNC machines');
    changed = true;
  }

  // 3. Fludio: Luxury acoustic architecture -> Architectural musical fountains
  if (content.includes('Luxury acoustic architecture')) {
    content = content.replace(/Luxury acoustic architecture/g, 'Architectural musical fountains');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    updatedCount++;
  }
});

console.log(`Updated Our Work dropdown card descriptions across ${updatedCount} HTML files!`);

