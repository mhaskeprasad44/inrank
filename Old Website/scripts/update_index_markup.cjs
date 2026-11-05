const fs = require('fs');
let html = fs.readFileSync('inrank2.0/index.html', 'utf8');

// 1. Fix burger button innerHTML
html = html.replace(
  /<button id="nav-burger"[^>]*>[\s\S]*?<\/button>/,
  `<button id="nav-burger" class="nav-burger" aria-label="Open mobile menu" aria-expanded="false" aria-controls="mob">
        <span class="nav-burger-box" aria-hidden="true"><span></span><span></span><span></span></span>
      </button>`
);

// 2. Fix mobile drawer logo lockup
html = html.replace(
  /<a class="mob-logo"[^>]*>[\s\S]*?<\/a>/,
  `<a class="mob-logo" href="/" aria-label="Inrank Technologies home">
        <img src="/img/logo.png" alt="Inrank Technologies" width="32" height="32" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>`
);

// 3. Fix closing cards classes
html = html.replace(
  /<article class="closing-card"[^>]*>([\s\S]*?)<\/article>\s*<article class="closing-card"[^>]*>/,
  `<article class="closing-card card-dark">$1</article>\n        <article class="closing-card card-light">`
);

// 4. Fix footer logo lockup
html = html.replace(
  /<div class="footer-brand">[\s\S]*?<p>/,
  `<div class="footer-brand">
        <a href="/" class="footer-logo-lockup" aria-label="Inrank Technologies home">
          <img src="/img/logo.png" alt="Inrank Technologies" width="34" height="34" class="logo-icon" />
          <div class="nav-logo-brand">
            <span class="footer-logo-name">Inrank</span>
            <span class="footer-logo-sub">Technologies</span>
          </div>
        </a>
        <p>`
);

fs.writeFileSync('inrank2.0/index.html', html);
console.log('index.html updated successfully!');

