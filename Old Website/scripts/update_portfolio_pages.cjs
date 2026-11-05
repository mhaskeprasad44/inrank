const fs = require('fs');
const path = require('path');

const dirs = ['inrank2.0/our-work', 'inrank2.0/case-studies'];

dirs.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
  files.forEach(f => {
    const full = path.join(dir, f);
    let c = fs.readFileSync(full, 'utf8');

    // 1. Replace button text: Visit Live Portal / View Live Portal -> View Website
    c = c.replace(/<span>Visit Live Portal<\/span>/g, '<span>View Website</span>');
    c = c.replace(/<span>View Live Portal<\/span>/g, '<span>View Website</span>');
    c = c.replace(/Visit Live Portal/g, 'View Website');
    c = c.replace(/View Live Portal/g, 'View Website');

    // 2. Remove pill background/border-radius in mockup frame top bar
    // <span style="font-size:0.75rem;font-weight:800;color:#009d49;background:#e6f7ef;padding:4px 12px;border-radius:999px;">
    c = c.replace(/<span style="font-size:0\.75rem;font-weight:800;color:#009d49;background:#e6f7ef;padding:4px 12px;border-radius:999px;">([\s\S]*?)<\/span>/g,
      '<span style="font-size:0.8rem;font-weight:800;color:#009d49;">$1</span>');

    // 3. Clean up eyebrow spans with inline pill styles
    // <span class="eyebrow-pill" style="margin-bottom:1rem;display:inline-block;">PROJECT OVERVIEW</span>
    c = c.replace(/<span class="eyebrow-pill" style="margin-bottom:1rem;display:inline-block;">([\s\S]*?)<\/span>/g,
      '<span class="section-kicker">$1</span>');
    // <span class="eyebrow-pill" style="background:rgba(0,157,73,0.15);color:#00bf5d;border-color:rgba(0,157,73,0.3);margin-bottom:1.5rem;display:inline-block;">SCALE YOUR REVENUE</span>
    c = c.replace(/<span class="eyebrow-pill" style="background:rgba\(0,157,73,0\.15\);color:#00bf5d;border-color:rgba\(0,157,73,0\.3\);margin-bottom:1\.5rem;display:inline-block;">([\s\S]*?)<\/span>/g,
      '<span class="section-kicker" style="color:#00bf5d;">$1</span>');

    fs.writeFileSync(full, c, 'utf8');
    console.log(`Updated ${full}`);
  });
});

// Also update inrank2.0/our-work.html
if (fs.existsSync('inrank2.0/our-work.html')) {
  let ow = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
  ow = ow.replace(/title="Visit Live Portal"/g, 'title="View Website"');
  ow = ow.replace(/Visit Live Portal/g, 'View Website');
  ow = ow.replace(/View Live Portal/g, 'View Website');
  fs.writeFileSync('inrank2.0/our-work.html', ow, 'utf8');
  console.log('Updated inrank2.0/our-work.html');
}

// Also update inrank2.0/case-studies.html
if (fs.existsSync('inrank2.0/case-studies.html')) {
  let cs = fs.readFileSync('inrank2.0/case-studies.html', 'utf8');
  cs = cs.replace(/Visit Live Portal/g, 'View Website');
  cs = cs.replace(/View Live Portal/g, 'View Website');
  fs.writeFileSync('inrank2.0/case-studies.html', cs, 'utf8');
  console.log('Updated inrank2.0/case-studies.html');
}

