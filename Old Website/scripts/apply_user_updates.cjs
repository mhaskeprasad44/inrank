const fs = require('fs');
const path = require('path');

// ═════════════════════════════════════════════════════════════════
// 1. UPDATE NAV LOGO IN inrank2.0/index.html & inrank2.0/css/nav.css
// ═════════════════════════════════════════════════════════════════

const indexHtmlPath = path.resolve('inrank2.0/index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Replace single logo img with dual logo img in nav
const singleLogoRegex = /<a href="\/" class="nav-logo" aria-label="Inrank Technologies Home">\s*<img src="\/img\/inrank-white-logo\.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon" \/>/;
const dualLogoMarkup = `<a href="/" class="nav-logo" aria-label="Inrank Technologies Home">
        <img src="/img/inrank-dark-logo.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon logo-icon--dark" />
        <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon logo-icon--white" />`;

if (singleLogoRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(singleLogoRegex, dualLogoMarkup);
  console.log('Updated nav logo to dual logo in inrank2.0/index.html');
}

// ═════════════════════════════════════════════════════════════════
// 2. UPDATE PLATFORM STICKERS IN HERO SECTION
// ═════════════════════════════════════════════════════════════════

const updatedStickersRow = `          <div class="hero-stickers-row">
            
            <!-- 1. Google Ads -->
            <div class="platform-sticker" style="--tilt: -3deg;">
              <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.784 16.924L8.71 8.391a2.846 2.846 0 013.889-1.042 2.846 2.846 0 011.042 3.889l-4.927 8.533a2.846 2.846 0 01-3.889 1.042 2.846 2.846 0 01-1.041-3.889z" fill="#FBBC04"/>
                <path d="M20.216 16.924a2.846 2.846 0 01-1.042 3.889 2.846 2.846 0 01-3.889-1.042L10.358 11.24a2.846 2.846 0 011.042-3.889 2.846 2.846 0 013.889 1.042l4.927 8.532z" fill="#4285F4"/>
                <circle cx="5.32" cy="18.68" r="2.846" fill="#34A853"/>
              </svg>
              <span>Google Ads (PPC)</span>
            </div>

            <!-- 2. Meta Ads -->
            <div class="platform-sticker" style="--tilt: 2deg;">
              <img src="/tech-stack/meta.png" alt="Meta Ads" class="h-4 w-auto object-contain flex-shrink-0" />
              <span>Meta &amp; Instagram</span>
            </div>

            <!-- 3. YouTube Video -->
            <div class="platform-sticker" style="--tilt: -2deg;">
              <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube Video</span>
            </div>

            <!-- 4. LinkedIn B2B -->
            <div class="platform-sticker" style="--tilt: 3deg;">
              <svg class="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn B2B</span>
            </div>

            <!-- 5. Google Maps 3-Pack -->
            <div class="platform-sticker" style="--tilt: -3deg;">
              <img src="/tech-stack/google-maps.svg" alt="Google Maps" class="h-4 w-auto object-contain flex-shrink-0" />
              <span>Google Maps 3-Pack</span>
            </div>

            <!-- 6. ChatGPT AI -->
            <div class="platform-sticker" style="--tilt: 2deg;">
              <img src="/tech-stack/chatgpt.png" alt="ChatGPT" class="h-4 w-auto object-contain flex-shrink-0" />
              <span>ChatGPT AI</span>
            </div>

            <!-- 7. Perplexity AI -->
            <div class="platform-sticker" style="--tilt: -2deg;">
              <img src="/tech-stack/perplexity.png" alt="Perplexity AI" class="h-4 w-auto object-contain flex-shrink-0" />
              <span>Perplexity AI</span>
            </div>

            <!-- 8. Shopify Plus D2C -->
            <div class="platform-sticker" style="--tilt: 3deg;">
              <img src="/tech-stack/shopify.webp" alt="Shopify" class="h-4 w-auto object-contain flex-shrink-0" />
              <span>Shopify Plus D2C</span>
            </div>

          </div>`;

const stickersRowRegex = /<div class="hero-stickers-row">[\s\S]*?<\/div>\s*(?=<div class="hero-hp2-kicker">)/;
if (stickersRowRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(stickersRowRegex, updatedStickersRow + '\n\n          ');
  console.log('Replaced hero stickers with updated 8 stickers (Moz removed, Perplexity separate, matching tech stack logos)');
}

// ═════════════════════════════════════════════════════════════════
// 3. MOVE GROWTH TECH STACK MARQUEE FROM HERO TO PROVEN METHODOLOGY
// ═════════════════════════════════════════════════════════════════

// Extract the marquee block
const marqueeBlockRegex = /<!-- HERO TECH STACK MARQUEE STRIP[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*(?=<\/div>\s*<\/section>)/;
const marqueeMatch = indexHtml.match(marqueeBlockRegex);

if (marqueeMatch) {
  const marqueeMarkup = marqueeMatch[0].trim();

  // Remove from hero
  indexHtml = indexHtml.replace(marqueeBlockRegex, '');
  console.log('Removed Growth Tech Stack marquee from hero section');

  // Insert into PROVEN METHODOLOGY section (right after operating-model closing div)
  const operatingModelEndRegex = /(<div class="operating-model">[\s\S]*?<\/div>)\s*(?=<\/div>\s*<\/section>)/;
  if (operatingModelEndRegex.test(indexHtml)) {
    const methodologyMarquee = `\n\n        <!-- Growth Tech Stack Strip inside Proven Methodology -->\n        ${marqueeMarkup}\n      `;
    indexHtml = indexHtml.replace(operatingModelEndRegex, `$1${methodologyMarquee}`);
    console.log('Inserted Growth Tech Stack marquee inside PROVEN METHODOLOGY section');
  } else {
    console.warn('Could not find operating-model end in indexHtml');
  }
}

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
console.log('Updated inrank2.0/index.html successfully');

// ═════════════════════════════════════════════════════════════════
// 4. UPDATE inrank2.0/css/nav.css FOR DUAL LOGO AND LIGHT PAGES
// ═════════════════════════════════════════════════════════════════

const navCssPath = path.resolve('inrank2.0/css/nav.css');
let navCss = fs.readFileSync(navCssPath, 'utf8');

const navDualLogoRules = `
/* ══════════════════════════════════════════
   DUAL LOGO SWITCHING (DARK ON LIGHT TOP, WHITE ON SCROLLED)
══════════════════════════════════════════ */
.logo-icon--dark {
  display: none !important;
}
.logo-icon--white {
  display: block !important;
}

/* On light pages when NOT scrolled: show dark logo, hide white logo */
body.light-hero-page #nav:not(.is-scrolled) .logo-icon--dark,
body.theme-ecosystem #nav:not(.is-scrolled) .logo-icon--dark,
body.page-blog-hub #nav:not(.is-scrolled) .logo-icon--dark {
  display: block !important;
}

body.light-hero-page #nav:not(.is-scrolled) .logo-icon--white,
body.theme-ecosystem #nav:not(.is-scrolled) .logo-icon--white,
body.page-blog-hub #nav:not(.is-scrolled) .logo-icon--white {
  display: none !important;
}

/* When scrolled (inside dark capsule dock): show white logo, hide dark logo */
body.light-hero-page #nav.is-scrolled .logo-icon--dark,
body.theme-ecosystem #nav.is-scrolled .logo-icon--dark,
body.page-blog-hub #nav.is-scrolled .logo-icon--dark {
  display: none !important;
}

body.light-hero-page #nav.is-scrolled .logo-icon--white,
body.theme-ecosystem #nav.is-scrolled .logo-icon--white,
body.page-blog-hub #nav.is-scrolled .logo-icon--white {
  display: block !important;
}

/* Service pages (theme-ecosystem) unscrolled text colors */
body.theme-ecosystem #nav:not(.is-scrolled) .nav-logo-name {
  color: #081424 !important;
}
body.theme-ecosystem #nav:not(.is-scrolled) .nav-logo-sub {
  color: #009d49 !important;
}
body.theme-ecosystem #nav:not(.is-scrolled) .nav-link {
  color: #334155 !important;
}
body.theme-ecosystem #nav:not(.is-scrolled) .nav-link:hover,
body.theme-ecosystem #nav:not(.is-scrolled) .nav-link[aria-expanded="true"] {
  color: #081424 !important;
  background: rgba(8, 20, 36, 0.06) !important;
}
body.theme-ecosystem #nav:not(.is-scrolled) .nav-chev {
  stroke: #475569 !important;
}
body.theme-ecosystem #nav:not(.is-scrolled) .nav-cta {
  background: #081424 !important;
  color: #ffffff !important;
  border: none !important;
}
body.theme-ecosystem #nav:not(.is-scrolled) .nav-cta:hover {
  background: #009d49 !important;
}
body.theme-ecosystem #nav:not(.is-scrolled) .nav-burger-box span {
  background: #081424 !important;
}
body.theme-ecosystem #nav:not(.is-scrolled) .nav-burger {
  background: rgba(8, 20, 36, 0.06) !important;
  border-color: rgba(8, 20, 36, 0.14) !important;
}
`;

if (!navCss.includes('logo-icon--dark')) {
  navCss += '\n' + navDualLogoRules;
  fs.writeFileSync(navCssPath, navCss, 'utf8');
  console.log('Appended dual logo rules and theme-ecosystem styles to inrank2.0/css/nav.css');
} else {
  console.log('Dual logo rules already present in nav.css');
}

