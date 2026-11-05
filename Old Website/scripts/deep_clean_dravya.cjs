const fs = require('fs');
const path = require('path');

// 1. Clean root index.html marquee
if (fs.existsSync('index.html')) {
  let idx = fs.readFileSync('index.html', 'utf8');
  // Remove the misplaced work-dropdown-cards from marquee
  idx = idx.replace(/<!-- Dravya Financial -->[\s\S]*?<\/a>/g, '');
  idx = idx.replace(/<!-- Project 3: Dravya Financial -->/g, '<!-- Project 3: Hira Grafix -->');
  fs.writeFileSync('index.html', idx, 'utf8');
  console.log('Cleaned root index.html');
}

// 2. Clean inrank-27-service-pages and public directories
function cleanFolder(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      cleanFolder(full);
    } else if (f === 'dravyafinancial.html') {
      fs.unlinkSync(full);
      console.log('Deleted:', full);
    } else if (/\.(html|txt|xml)$/.test(f)) {
      let content = fs.readFileSync(full, 'utf8');
      if (/dravya/i.test(content)) {
        content = content.replace(/<!--\s*Box\s*1:\s*Dravya\s*Financial\s*-->[\s\S]*?<\/a>/gi, `<!-- Box 1: Hira Grafix -->
              <a href="/our-work/hiragrafix.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/hiragrafix.png" alt="Hira Grafix" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Hira Grafix</h4>
                  <span class="work-drop-desc">Signage &amp; industrial branding</span>
                </div>
              </a>`);
        content = content.replace(/<a\s+href="[^"]*dravyafinancial\.html"[^>]*>[\s\S]*?<\/a>/gi, '');
        content = content.replace(/<div\s+class="client-logo-item"><img\s+src="[^"]*dravya[^"]*"[^>]*><\/div>/gi, '');
        content = content.split('\n').filter(l => !/dravya/i.test(l)).join('\n');
        fs.writeFileSync(full, content, 'utf8');
        console.log('Cleaned:', full);
      }
    }
  }
}

cleanFolder('inrank-27-service-pages');
cleanFolder('public');
console.log('Finished deep cleaning.');

