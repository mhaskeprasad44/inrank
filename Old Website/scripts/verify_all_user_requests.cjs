const fs = require('fs');
const path = require('path');

const results = [];

function check(title, condition, detail = '') {
  results.push({ title, passed: Boolean(condition), detail });
}

// 1. Check inrank2.0/index.html
if (fs.existsSync('inrank2.0/index.html')) {
  const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

  // Logo
  check('Logo: White logo SVG used in header', indexHtml.includes('src="/img/inrank-white-logo.svg"'));

  // Comparison table
  check('Comparison Table: Removed Pune from Traditional Agencies', indexHtml.includes('Traditional Agencies') && !indexHtml.includes('Traditional Pune Agencies'));
  check('Comparison Table: Table markup intact', indexHtml.includes('inrank-compare-table') || indexHtml.includes('comparison-table'));

  // Section 5 Services Grid
  check('Section 5: 4-Pillar status strip present', indexHtml.includes('pillars-strip') && indexHtml.includes('Pillar 01: Search Dominance'));
  check('Section 5: 8 Services cards grid present', indexHtml.includes('services-grid') && indexHtml.includes('01 / SEO') && indexHtml.includes('08 / LOCAL 3-PACK'));

  // Section 6 Niches Icons
  check('Section 6: Sector SVG icons present', indexHtml.includes('SECTOR 01') && indexHtml.includes('<svg'));

  // Section 7 Numbers Proof Aligned
  check('Section 7: Balanced Proof cards present', indexHtml.includes('fact-item') && indexHtml.includes('₹14.2M+') && indexHtml.includes('+318%'));
} else {
  check('inrank2.0/index.html exists', false);
}

// 2. Check inrank2.0/contact.html
if (fs.existsSync('inrank2.0/contact.html')) {
  const contactHtml = fs.readFileSync('inrank2.0/contact.html', 'utf8');
  check('Contact Page: 2.0 Vinove Nav Dock present', contactHtml.includes('class="nav-dock"'));
  check('Contact Page: Direct Channels present (+91 87888 23182)', contactHtml.includes('+91 87888 23182') && contactHtml.includes('contact@inranktech.com'));
  check('Contact Page: What Happens Next timeline present', contactHtml.includes('timeline-step'));
  check('Contact Page: Executive Consultation Form present', contactHtml.includes('contact-form-card') && contactHtml.includes('form-btn-submit'));
} else {
  check('inrank2.0/contact.html exists', false);
}

// 3. Check inrank2.0/our-work.html
if (fs.existsSync('inrank2.0/our-work.html')) {
  const workHtml = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
  check('Our Work: 10 client cards present', (workHtml.match(/class="work-card"/g) || []).length === 10);
  check('Our Work: Hero screenshots used (.webp)', workHtml.includes('/portfolio/screenshots/greytothegreen.webp'));
  check('Our Work: Links point to /our-work/{slug}.html', workHtml.includes('href="/our-work/greytothegreen.html"'));
  check('Our Work: Interactive sector filters present', workHtml.includes('work-filter-pills'));
} else {
  check('inrank2.0/our-work.html exists', false);
}

// 4. Check 10 Individual Work Pages
const slugs = [
  'greytothegreen',
  'shetkarifoodstuff',
  'cytos',
  'dravyafinancial',
  'fludio',
  'hcpnest',
  'hiragrafix',
  'orthopedicanklefootspecialist',
  'riituinstitution',
  'vasroventures'
];

let workPagesCount = 0;
slugs.forEach(s => {
  const p = path.join('inrank2.0/our-work', `${s}.html`);
  if (fs.existsSync(p)) workPagesCount++;
});
check('All 10 Individual Work Pages exist in inrank2.0/our-work/', workPagesCount === 10, `${workPagesCount}/10 found`);

// 5. Check CSS Nav Shrink & Corporate
if (fs.existsSync('inrank2.0/css/nav.css')) {
  const navCss = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');
  check('Nav CSS: Floating dock shrink rules present', navCss.includes('.nav-dock.is-scrolled') || navCss.includes('max-width: 1180px'));
}

if (fs.existsSync('inrank2.0/css/corporate.css')) {
  const corpCss = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
  check('Corporate CSS: Services grid styling present', corpCss.includes('.services-grid'));
  check('Corporate CSS: Contact page styling present', corpCss.includes('.contact-grid') && corpCss.includes('.contact-form-card'));
  check('Corporate CSS: Work card screenshot display rules present', corpCss.includes('.work-card-media'));
}

// Print summary
console.log('=== VERIFICATION SUMMARY ===');
let allPassed = true;
results.forEach(r => {
  const status = r.passed ? '✅ PASS' : '❌ FAIL';
  if (!r.passed) allPassed = false;
  console.log(`${status} | ${r.title} ${r.detail ? '(' + r.detail + ')' : ''}`);
});

console.log('============================');
console.log(allPassed ? 'ALL CHANGES ARE 100% INTACT AND NOT REVERTED!' : 'SOME CHANGES WERE REVERTED!');

