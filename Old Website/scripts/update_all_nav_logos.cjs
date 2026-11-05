const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0';

const oldLogoRegex = /<a href="\/" class="nav-logo"[^>]*>[\s\S]*?<\/a>/gi;

const newLogoMarkup = `<a href="/" class="nav-logo" aria-label="Inrank Technologies home">
        <img src="/img/logo.png" alt="Inrank Technologies" width="34" height="34" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>`;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const p = path.join(dir, f);
  let html = fs.readFileSync(p, 'utf8');
  if (oldLogoRegex.test(html)) {
    html = html.replace(oldLogoRegex, newLogoMarkup);
    fs.writeFileSync(p, html, 'utf8');
    console.log(`[OK] Updated nav-logo in ${f}`);
  }
});

