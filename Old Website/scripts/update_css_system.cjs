const fs = require('fs');

// 1. UPDATE corporate.css
let corp = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

// Change --max: 1200px to --max: 1400px
corp = corp.replace(/--max:\s*1200px;/g, '--max: 1400px;');

// Change .shell max width override
corp = corp.replace(/width:\s*min\(100%,\s*1200px\)\s*!important;/g, 'width: min(100%, 1400px) !important;');

// Change .ft-wrap max-width
corp = corp.replace(/\.ft-wrap\s*\{\s*max-width:\s*1280px;/g, '.ft-wrap {\n  max-width: 1400px;');

// Redefine eyebrow-pill & section kickers to pure plain text
const oldEyebrowPill = `/* Eyebrow Pills & Section Headers */
.eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(0, 157, 73, 0.08);
  border: 1px solid rgba(0, 157, 73, 0.22);
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--terra);
  margin-bottom: 1.25rem;
}

.eyebrow-pill::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--terra);
}`;

const cleanEyebrow = `/* Section Eyebrows & Kickers — 100% Pure Plain Text (Zero Pills, Zero Borders, Zero Dots) */
.eyebrow-pill,
.section-kicker,
.kicker,
.eyebrow,
.cap-badge,
.cap-badge-wrap,
.comp-badge-good,
.comp-badge-bad,
.eyebrow-badge {
  display: inline-block !important;
  background: none !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  font-size: 0.75rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  color: var(--terra, #009d49) !important;
  margin-bottom: 0.85rem !important;
  line-height: 1.2 !important;
}

.eyebrow-pill::before,
.eyebrow-pill::after,
.eyebrow-badge::before,
.eyebrow-badge::after,
.section-kicker::before,
.section-kicker::after {
  display: none !important;
  content: none !important;
}

.eco-dark .eyebrow-pill,
.eco-dark .section-kicker,
.hero-subpage .eyebrow-pill,
.hero-subpage .eyebrow,
.hero-subpage .section-kicker,
[data-theme="dark"] .eyebrow-pill,
.dark .eyebrow-pill,
.dark-hero .eyebrow-pill {
  color: #00bf5d !important;
  background: none !important;
  border: none !important;
}`;

if (corp.includes('.eyebrow-pill::before')) {
  corp = corp.replace(oldEyebrowPill, cleanEyebrow);
} else {
  corp += '\n' + cleanEyebrow;
}

fs.writeFileSync('inrank2.0/css/corporate.css', corp, 'utf8');
console.log('corporate.css updated successfully.');

// 2. UPDATE core.css
let core = fs.readFileSync('inrank2.0/css/core.css', 'utf8');
core = core.replace(/--max:\s*1320px;/g, '--max: 1400px;');
core = core.replace(/\.eyebrow-pill\s*\{[\s\S]*?\}/g, `.eyebrow-pill {
  padding: 0 !important;
  background: none !important;
  border: none !important;
  border-radius: 0 !important;
  font-size: 0.75rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  color: var(--brand-primary, #009d49) !important;
  display: inline-block !important;
  margin-bottom: 0.75rem !important;
}`);
fs.writeFileSync('inrank2.0/css/core.css', core, 'utf8');
console.log('core.css updated successfully.');

// 3. UPDATE components.css
let comp = fs.readFileSync('inrank2.0/css/components.css', 'utf8');
comp = comp.replace(/\.eyebrow-badge\s*\{[\s\S]*?\}/g, `.eyebrow-badge {
  display: inline-block !important;
  font-size: 0.75rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  color: var(--brand-primary, #009d49) !important;
  padding: 0 !important;
  background: none !important;
  border: none !important;
  border-radius: 0 !important;
  margin-bottom: 0.85rem !important;
}`);
comp = comp.replace(/#nav\.is-light \.nav-inner,\s*#nav\.nav-open \.nav-inner\s*\{[\s\S]*?width:\s*min\(1180px,\s*100%\);[\s\S]*?max-width:\s*1180px;/g, (match) => {
  return match.replace(/1180px/g, '1400px');
});
fs.writeFileSync('inrank2.0/css/components.css', comp, 'utf8');
console.log('components.css updated successfully.');

// 4. UPDATE nav.css
let nav = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');
nav = nav.replace(/#nav\.is-scrolled \.nav-bar\s*\{\s*width:\s*min\(1180px,\s*100%\);\s*max-width:\s*1180px;/g, `#nav.is-scrolled .nav-bar {\n  width: min(1400px, calc(100% - 32px));\n  max-width: 1400px;`);
fs.writeFileSync('inrank2.0/css/nav.css', nav, 'utf8');
console.log('nav.css updated successfully.');
