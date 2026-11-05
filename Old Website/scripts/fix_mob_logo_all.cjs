const fs = require('fs');

const properMobLogo = `<a href="/" class="mob-logo" aria-label="Inrank Technologies">
        <img src="/img/logo.png" alt="Inrank Technologies" width="32" height="32" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>`;

fs.readdirSync('inrank2.0').filter(f => f.endsWith('.html')).forEach(f => {
  const p = 'inrank2.0/' + f;
  let html = fs.readFileSync(p, 'utf8');

  // Replace mob-logo link
  html = html.replace(/<a[^>]*class=["']mob-logo["'][^>]*>[\s\S]*?<\/a>/i, properMobLogo);

  fs.writeFileSync(p, html);
  console.log('Fixed mob-logo in ' + f);
});

