const fs = require('fs');

const script = fs.readFileSync('scripts/apply_complete_homepage_fix.cjs', 'utf8');
const startIdx = script.indexOf('const masterHomepageCss = `');
const endIdx = script.indexOf('`;\n\n// Append master rules to corporate.css');

const css = script.slice(startIdx + 'const masterHomepageCss = `'.length, endIdx);
console.log('masterHomepageCss extracted, length:', css.length);
console.log('Contains SECTION 2:', css.includes('SECTION 2: MARQUEE'));
console.log('Contains SECTION 3:', css.includes('SECTION 3: OPERATING PHILOSOPHY'));
console.log('Contains SECTION 5:', css.includes('SECTION 5: CAPABILITIES'));
console.log('Contains .services-grid:', css.includes('.services-grid'));
console.log('Contains .service-card:', css.includes('.service-card'));
console.log('Contains SECTION 15:', css.includes('SECTION 15: TAKE THE NEXT STEP'));

