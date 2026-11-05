const fs = require('fs');

const file = 'inrank2.0/index.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Extract the full services section
const servStartTag = '<section class="capabilities-section" id="services">';
const servStartIdx = html.indexOf(servStartTag);
const servEndTag = '</section>';
const servEndIdx = html.indexOf(servEndTag, servStartIdx) + servEndTag.length;

if (servStartIdx === -1) {
  console.error('Could not find services section!');
  process.exit(1);
}

let servicesSection = html.substring(servStartIdx, servEndIdx);

// 2. Remove the 4-pillars benchmark strip from the services section
// The strip is from <!-- 4 Pillars Architecture Benchmark Strip or <div class="pillars-strip"> to </div> right before <!-- 8 Core Growth Services Grid
const pillarsStripRegex = /<!--\s*4 Pillars Architecture Benchmark Strip[\s\S]*?<\/div>\s*<\/div>\s*(?=\s*<!--\s*8 Core Growth Services Grid)/i;

if (pillarsStripRegex.test(servicesSection)) {
  servicesSection = servicesSection.replace(pillarsStripRegex, '');
  console.log('Removed 4 pillars strip via regex 1');
} else {
  // Fallback: match <div class="pillars-strip">[\s\S]*?</div>\s*</div>
  const fallbackRegex = /<div class="pillars-strip">[\s\S]*?<\/div>\s*<\/div>\s*(?=\s*<!--\s*8 Core)/i;
  if (fallbackRegex.test(servicesSection)) {
    servicesSection = servicesSection.replace(fallbackRegex, '');
    console.log('Removed 4 pillars strip via fallback regex');
  } else {
    console.warn('Could not match pillars strip regex! Checking manually:');
    const pStart = servicesSection.indexOf('<div class="pillars-strip">');
    const gStart = servicesSection.indexOf('<div class="services-grid">');
    if (pStart !== -1 && gStart !== -1) {
      servicesSection = servicesSection.substring(0, pStart) + servicesSection.substring(gStart);
      console.log('Removed 4 pillars strip via substring slice');
    }
  }
}

// 3. Remove services section from its old position
// We also remove any surrounding comment like <!-- 5. CAPABILITIES SECTION... -->
const oldBlockRegex = /\s*<!--\s*5\.\s*CAPABILITIES SECTION[\s\S]*?<\/section>/i;
if (oldBlockRegex.test(html)) {
  html = html.replace(oldBlockRegex, '');
  console.log('Removed old services block with its comment');
} else {
  html = html.substring(0, servStartIdx) + html.substring(servEndIdx);
  console.log('Removed old services section via slice');
}

// 4. Insert the clean services section right after the marquee band (client logos) and before OUR OPERATING PHILOSOPHY
const marqueeEndTag = '</section>';
const marqueeStartIdx = html.indexOf('class="marquee-band"');
const marqueeEndIdx = html.indexOf(marqueeEndTag, marqueeStartIdx) + marqueeEndTag.length;

if (marqueeEndIdx === -1) {
  console.error('Could not find end of marquee section!');
  process.exit(1);
}

const insertionPoint = marqueeEndIdx;

const newServicesBlock = `\n\n    <!-- 3. SERVICES & CAPABILITIES (INRANK 27 SERVICES) -->\n    ` + servicesSection;

html = html.substring(0, insertionPoint) + newServicesBlock + html.substring(insertionPoint);

// Update section comments numbers if needed for clarity
html = html.replace(/<!-- 3\. OPERATING PHILOSOPHY/g, '<!-- 4. OPERATING PHILOSOPHY')
           .replace(/<!-- 4\. 4-STAGE OPERATING METHODOLOGY/g, '<!-- 5. 4-STAGE OPERATING METHODOLOGY');

fs.writeFileSync(file, html, 'utf8');
console.log('Successfully updated inrank2.0/index.html with reordered services section.');

