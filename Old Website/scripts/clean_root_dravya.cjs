const fs = require('fs');

const rootFiles = [
  'case-studies.html',
  'contact.html',
  'digital-marketing-agency-in-pune.html',
  'index.html',
  'justdial-profile.html',
  'our-work.html',
  'portfolio.html',
  'pricing.html',
  'services.html',
  'website-design-company-in-pune.html'
];

rootFiles.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
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

    // Marquee logo
    if (content.includes('dravya.png') || content.includes('dravyafinancial.png')) {
      content = content.replace(/<div\s+class="client-logo-item"><img\s+src="[^"]*dravya[^"]*"[^>]*><\/div>/gi, '');
      changed = true;
    }

    // Portfolio / work cards
    const cardMatch = /<article[^>]*dravyafinancial[\s\S]*?<\/article>/gi;
    if (cardMatch.test(content)) {
      content = content.replace(cardMatch, '');
      changed = true;
    }

    // Work item card
    const workItemMatch = /<!--\s*Work\s*Item\s*Card:\s*dravyafinancial\s*-->[\s\S]*?<\/article>/gi;
    if (workItemMatch.test(content)) {
      content = content.replace(workItemMatch, '');
      changed = true;
    }

    // Work Card 4 in index.html
    const indexWorkCard = /<!--\s*Work\s*Card\s*4:\s*Dravya\s*Financial\s*-->[\s\S]*?<\/article>/gi;
    if (indexWorkCard.test(content)) {
      content = content.replace(indexWorkCard, '');
      changed = true;
    }

    // Any remaining simple links
    if (/dravya/i.test(content)) {
      content = content.replace(/\{\s*"@type":\s*"CreativeWork",\s*"name":\s*"Dravya Financial Solutions[^}]+\},?\s*/g, '');
      // Generic line remove if it specifically mentions dravyafinancial
      content = content.split('\n').filter(l => !l.includes('dravyafinancial.com') && !l.includes('Dravya Financial Solutions Pvt Ltd')).join('\n');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(f, content, 'utf8');
      console.log('Cleaned root file:', f);
    }
  }
});

