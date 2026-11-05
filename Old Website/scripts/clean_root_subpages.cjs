const fs = require('fs');
const path = require('path');

const rootDirs = ['case-studies', 'our-work'];

rootDirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    if (!f.endsWith('.html')) return;
    const full = path.join(dir, f);
    let content = fs.readFileSync(full, 'utf8');
    let changed = false;

    // Desktop navbar box
    const oldDropCard = /<a\s+href="[^"]*dravyafinancial\.html"[^>]*>[\s\S]*?<\/a>/gi;
    if (oldDropCard.test(content)) {
      content = content.replace(oldDropCard, `<a href="/our-work/hiragrafix.html" class="work-dropdown-card">
        <div class="work-drop-logo-wrap">
          <img src="/client-logos/hiragrafix.png" alt="Hira Grafix" class="work-drop-logo" />
        </div>
        <div class="work-drop-info">
          <h4 class="work-drop-name">Hira Grafix</h4>
          <span class="work-drop-desc">Commercial Signage &amp; Branding</span>
        </div>
      </a>`);
      changed = true;
    }

    if (/dravya/i.test(content)) {
      content = content.split('\n').filter(l => !l.includes('dravyafinancial')).join('\n');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(full, content, 'utf8');
      console.log('Cleaned:', full);
    }
  });
});

