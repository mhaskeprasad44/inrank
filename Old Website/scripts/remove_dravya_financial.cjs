const fs = require('fs');
const path = require('path');

console.log('=== REMOVING DRAVYA FINANCIAL FROM WEBSITE ===');

// 1. Delete standalone pages
const filesToDelete = [
  'inrank2.0/our-work/dravyafinancial.html',
  'inrank2.0/case-studies/dravyafinancial.html',
  'our-work/dravyafinancial.html',
  'case-studies/dravyafinancial.html'
];

filesToDelete.forEach(f => {
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
    console.log('Deleted file:', f);
  }
});

// 2. Desktop navbar replacement (replace Dravya box with Hira Grafix)
const dravyaBoxRegex = /<!--\s*Box\s*1:\s*Dravya\s*Financial\s*-->[\s\S]*?<\/a>/gi;
const hiraBoxReplacement = `<!-- Box 1: Hira Grafix -->
              <a href="/our-work/hiragrafix.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/hiragrafix.png" alt="Hira Grafix" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Hira Grafix</h4>
                  <span class="work-drop-desc">Signage &amp; industrial branding</span>
                </div>
              </a>`;

// 3. Mobile drawer replacement
const mobDravyaRegex = /<a\s+href="\/our-work\/dravyafinancial\.html"\s+class="mob-co">[\s\S]*?<\/a>/gi;
const mobHiraReplacement = `<a href="/our-work/hiragrafix.html" class="mob-co">
        <span class="mob-co-name">Hira Grafix</span>
        <span class="mob-co-cat">Signage &amp; Industrial Printing</span>
      </a>`;

// Scan and update all HTML files in inrank2.0
function updateDir(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      updateDir(full);
    } else if (f.endsWith('.html')) {
      let content = fs.readFileSync(full, 'utf8');
      let changed = false;

      // Replace desktop dropdown box
      if (dravyaBoxRegex.test(content)) {
        content = content.replace(dravyaBoxRegex, hiraBoxReplacement);
        changed = true;
      }

      // Replace mobile drawer link
      if (mobDravyaRegex.test(content)) {
        content = content.replace(mobDravyaRegex, mobHiraReplacement);
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(full, content, 'utf8');
        console.log('Updated nav/mob in:', full);
      }
    }
  }
}

updateDir('inrank2.0');

// 4. Update inrank2.0/index.html (marquee and work card)
if (fs.existsSync('inrank2.0/index.html')) {
  let home = fs.readFileSync('inrank2.0/index.html', 'utf8');

  // Marquee replacement
  home = home.replace(
    /<div class="client-logo-item"><img src="\/client-logos\/dravya\.png" alt="Dravya Financial" \/><\/div>/g,
    '<div class="client-logo-item"><img src="/client-logos/orthopedicanklefootspecialist.png" alt="Orthopedic &amp; Ankle Foot Specialist Clinic" /></div>'
  );

  // Work card 4 replacement
  const oldWorkCard4 = /<!-- Work Card 4: Dravya Financial -->[\s\S]*?<\/article>/;
  const newWorkCard4 = `<!-- Work Card 4: Fludio Design -->
          <article class="work-card">
            <div class="work-card-media">
              <img src="/portfolio/screenshots/fludio.webp" alt="Fludio Design Waterscapes Case Study" loading="lazy" />
              <span class="work-card-pill">HIGH-PERFORMANCE WEB</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">ARCHITECTURAL DESIGN · PUNE</span>
              <h3>Fludio Architectural Waterscapes</h3>
              <p>Architectural musical fountains and water choreography portfolio engineered for high-ticket commercial inquiries.</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">+240% Inbound Inquiries</span>
              <a href="/our-work/fludio.html" class="work-card-link">
                <span>View Record</span>
                <svg viewBox="0 0 16 16"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
              </a>
            </div>
          </article>`;

  if (oldWorkCard4.test(home)) {
    home = home.replace(oldWorkCard4, newWorkCard4);
    console.log('Replaced Dravya work card on inrank2.0/index.html');
  }

  fs.writeFileSync('inrank2.0/index.html', home, 'utf8');
}

// 5. Update inrank2.0/our-work.html
if (fs.existsSync('inrank2.0/our-work.html')) {
  let work = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
  // Hero image
  work = work.replace('/portfolio/screenshots/dravyafinancial.webp', '/portfolio/screenshots/greytothegreen.webp');
  // Card
  const dravyaCardWork = /<!-- Work Card: dravyafinancial -->[\s\S]*?<\/article>/;
  if (dravyaCardWork.test(work)) {
    work = work.replace(dravyaCardWork, '');
    console.log('Removed dravya card from inrank2.0/our-work.html');
  }
  fs.writeFileSync('inrank2.0/our-work.html', work, 'utf8');
}

// 6. Update inrank2.0/portfolio.html
if (fs.existsSync('inrank2.0/portfolio.html')) {
  let port = fs.readFileSync('inrank2.0/portfolio.html', 'utf8');
  // Remove schema JSON item
  port = port.replace(/\{\s*"@type":\s*"CreativeWork",\s*"name":\s*"Dravya Financial Solutions[^}]+\},?\s*/g, '');
  // Remove portfolio item
  const portItem = /<!-- Work Item Card: dravyafinancial -->[\s\S]*?<\/article>/;
  if (portItem.test(port)) {
    port = port.replace(portItem, '');
    console.log('Removed dravya item from inrank2.0/portfolio.html');
  }
  fs.writeFileSync('inrank2.0/portfolio.html', port, 'utf8');
}

// 7. Update sitemap.xml
if (fs.existsSync('sitemap.xml')) {
  let sitemap = fs.readFileSync('sitemap.xml', 'utf8');
  sitemap = sitemap.replace(/<url>[\s\S]*?dravyafinancial[\s\S]*?<\/url>\s*/g, '');
  fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
  console.log('Cleaned sitemap.xml');
}

// 8. Update llms.txt and llms-full.txt
['llms.txt', 'llms-full.txt'].forEach(f => {
  if (fs.existsSync(f)) {
    let txt = fs.readFileSync(f, 'utf8');
    txt = txt.split('\n').filter(l => !l.toLowerCase().includes('dravya')).join('\n');
    fs.writeFileSync(f, txt, 'utf8');
    console.log('Cleaned', f);
  }
});

console.log('=== COMPLETED REMOVAL SCRIPT ===');

