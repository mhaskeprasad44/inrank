const fs = require('fs');
const path = require('path');

console.log('--- STARTING 4 USER UPDATES ---');

// ════════════════════════════════════════════════════════════
// 1. UPDATE service-ecosystem.css
// ════════════════════════════════════════════════════════════
let ecoCss = fs.readFileSync('inrank2.0/css/service-ecosystem.css', 'utf8');

// Reduce H1 size (.eco-title)
ecoCss = ecoCss.replace(
  /\.eco-title\s*\{[\s\S]*?font-size:\s*clamp\(2\.6rem,\s*5\.2vw,\s*5\.5rem\);[\s\S]*?line-height:\s*1\.02;/,
  `.eco-title {
  margin: 0;
  font-size: clamp(2rem, 3.2vw, 3.15rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;`
);

// Style .eco-availability and .eco-avail-icon
if (!ecoCss.includes('.eco-avail-icon')) {
  ecoCss = ecoCss.replace(
    /\.eco-availability\s*\{[\s\S]*?\}/,
    `.eco-availability {
  margin-top: 1.75rem;
  color: #cbd5e1;
  font-size: 0.84rem;
  font-weight: 550;
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 1.4;
}

.eco-avail-icon {
  color: var(--eco-signal, #00bf5d);
  flex-shrink: 0;
  display: inline-block;
}`
  );
}

fs.writeFileSync('inrank2.0/css/service-ecosystem.css', ecoCss, 'utf8');
console.log('1. Updated service-ecosystem.css (H1 reduced, availability icon styled)');

// ════════════════════════════════════════════════════════════
// 2. UPDATE corporate.css (Pillars Strip Redesign)
// ════════════════════════════════════════════════════════════
let corpCss = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const newPillarsCss = `/* ══════════════════════════════════════════════════════════
   REDESIGNED 4-PILLAR ARCHITECTURAL BENCHMARK STRIP
   Modern, enterprise cards replacing legacy green dot pills
   ══════════════════════════════════════════════════════════ */
.pillars-strip {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr) !important;
  gap: 1.25rem !important;
  margin: 2.25rem 0 3.25rem !important;
}

@media (max-width: 900px) {
  .pillars-strip {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 520px) {
  .pillars-strip {
    grid-template-columns: 1fr !important;
  }
}

.pillar-tab,
.pillar-pill {
  position: relative !important;
  padding: 1.35rem 1.4rem !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  border-radius: 16px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0 !important;
  box-shadow: 0 4px 16px rgba(8, 20, 36, 0.02) !important;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1) !important;
  cursor: pointer !important;
  overflow: hidden !important;
  text-decoration: none !important;
}

/* Remove any legacy dot completely */
.pill-dot,
.pillar-tab::after,
.pillar-pill::after {
  display: none !important;
  content: none !important;
}

.pillar-tab-head {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  margin-bottom: 0.75rem !important;
}

.pillar-tab-tag {
  font-size: 0.6875rem !important;
  font-weight: 850 !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  color: #64748b !important;
  transition: color 0.2s ease !important;
}

.pillar-tab-stat {
  font-size: 0.95rem !important;
  font-weight: 850 !important;
  color: #009d49 !important;
  letter-spacing: -0.01em !important;
  font-variant-numeric: tabular-nums !important;
}

.pillar-tab-name,
.pillar-pill strong {
  font-size: 1.05rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  letter-spacing: -0.02em !important;
  line-height: 1.25 !important;
  margin: 0 0 0.35rem !important;
  transition: color 0.2s ease !important;
}

.pillar-tab-sub,
.pillar-pill small {
  font-size: 0.8rem !important;
  font-weight: 600 !important;
  color: #64748b !important;
  line-height: 1.4 !important;
  margin: 0 !important;
}

/* Top accent indicator line */
.pillar-tab::before,
.pillar-pill::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 3px !important;
  background: transparent !important;
  transition: background 0.25s ease !important;
}

/* Hover State */
.pillar-tab:hover,
.pillar-pill:hover {
  transform: translateY(-3px) !important;
  border-color: rgba(0, 157, 73, 0.35) !important;
  box-shadow: 0 12px 28px rgba(8, 20, 36, 0.08) !important;
}

.pillar-tab:hover .pillar-tab-tag,
.pillar-pill:hover .pillar-tab-tag {
  color: #009d49 !important;
}

/* Active State */
.pillar-tab.active,
.pillar-pill.active {
  background: #ffffff !important;
  border-color: #009d49 !important;
  box-shadow: 0 12px 32px rgba(0, 157, 73, 0.12) !important;
}

.pillar-tab.active::before,
.pillar-pill.active::before {
  background: #009d49 !important;
}

.pillar-tab.active .pillar-tab-tag,
.pillar-pill.active .pillar-tab-tag {
  color: #009d49 !important;
}`;

corpCss = corpCss.replace(
  /\.pillars-strip\s*\{[\s\S]*?\.pillar-pill small\s*\{[\s\S]*?color:\s*#009d49\s*!important;\s*\}/,
  newPillarsCss
);

fs.writeFileSync('inrank2.0/css/corporate.css', corpCss, 'utf8');
console.log('2. Updated corporate.css (Pillars strip redesigned)');

// ════════════════════════════════════════════════════════════
// 3. UPDATE nav.css (Support Mega Dropdown on About)
// ════════════════════════════════════════════════════════════
let navCss = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

// Ensure about dropdown is static on desktop
navCss = navCss.replace(
  /\.nav-item\[data-dropdown="services"\]\s*\{\s*position:\s*static\s*!important;\s*\}/g,
  `.nav-item[data-dropdown="services"],
  .nav-item[data-dropdown="about"] {
    position: static !important;
  }`
);

// Ensure about dropdown opens on hover/focus/data-open
navCss = navCss.replace(
  /\.nav-item\[data-dropdown="services"\]:hover > \.drop-mega,\s*\.nav-item\[data-dropdown="services"\]:focus-within > \.drop-mega,\s*\.nav-item\[data-dropdown="services"\]\[data-open\] > \.drop-mega\s*\{/g,
  `.nav-item[data-dropdown="services"]:hover > .drop-mega,
  .nav-item[data-dropdown="services"]:focus-within > .drop-mega,
  .nav-item[data-dropdown="services"][data-open] > .drop-mega,
  .nav-item[data-dropdown="about"]:hover > .drop-mega,
  .nav-item[data-dropdown="about"]:focus-within > .drop-mega,
  .nav-item[data-dropdown="about"][data-open] > .drop-mega {`
);

navCss = navCss.replace(
  /\.nav-item\[data-dropdown="services"\]\[data-open\] > \.drop-mega\s*\{/g,
  `.nav-item[data-dropdown="services"][data-open] > .drop-mega,
.nav-item[data-dropdown="about"][data-open] > .drop-mega {`
);

fs.writeFileSync('inrank2.0/css/nav.css', navCss, 'utf8');
console.log('3. Updated nav.css (About dropdown enabled with mega dropdown system)');

// ════════════════════════════════════════════════════════════
// 4. DEFINE THE MASTER ABOUT MEGA DROPDOWN HTML
// ════════════════════════════════════════════════════════════
const aboutMegaDropdownHtml = `        <!-- About with Mega Dropdown (Exact Services Dropdown Style) -->
        <div class="nav-item" data-dropdown="about">
          <button class="nav-link nav-link--drop" aria-expanded="false" aria-haspopup="true">
            <span>About</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
              <path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Floating Mega Dropdown Menu for About -->
          <div class="nav-drop drop-mega" role="region" aria-label="About Submenu">
            <div class="mega-grid-wrap">
              <!-- Left Rail: About Inrank Overview -->
              <div class="mega-rail">
                <span class="mega-rail-eyebrow">ABOUT INRANK</span>
                <h4 class="mega-rail-title">Engineering Direct Growth</h4>
                <p class="mega-rail-text">Direct senior ownership with zero account managers, zero junior interns, and 100% IP code &amp; asset handover.</p>
                <a href="/about.html" class="mega-rail-cta">
                  <span>Explore our philosophy</span>
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>

              <!-- Right Area: 4 Architectural Pillars of About -->
              <div class="mega-pillars-grid">
                
                <!-- Pillar 1: Company & Mission -->
                <div class="mega-pillar-card">
                  <a href="/about.html#philosophy" class="mega-co-head">
                    <span class="mega-co-logo">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </span>
                    <div>
                      <span class="mega-co-name">Company &amp; Mission</span>
                      <span class="mega-co-cat">Our Founding Story</span>
                    </div>
                  </a>
                  <div class="mega-pillar-links">
                    <a href="/about.html#philosophy" class="mega-sub-link">Operating Philosophy</a>
                    <a href="/about.html#ownership" class="mega-sub-link">100% Code &amp; Asset Ownership</a>
                    <a href="/about.html#speed" class="mega-sub-link">Engineered for Conversion Speed</a>
                    <a href="/about.html" class="mega-sub-link">Zero Agency Markup Model</a>
                  </div>
                </div>

                <!-- Pillar 2: Leadership Profile -->
                <div class="mega-pillar-card">
                  <a href="/about.html#prasad-mhaske" class="mega-co-head">
                    <span class="mega-co-logo">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </span>
                    <div>
                      <span class="mega-co-name">Leadership Profile</span>
                      <span class="mega-co-cat">Prasad Mhaske</span>
                    </div>
                  </a>
                  <div class="mega-pillar-links">
                    <a href="/about.html#prasad-mhaske" class="mega-sub-link">Founder &amp; Lead Architect</a>
                    <a href="/about.html#team" class="mega-sub-link">Direct Senior Engineers</a>
                    <a href="/about.html#team" class="mega-sub-link">No Junior Account Managers</a>
                    <a href="/about.html#team" class="mega-sub-link">Weekly Technical Sprints</a>
                  </div>
                </div>

                <!-- Pillar 3: Baner Tech Lab -->
                <div class="mega-pillar-card">
                  <a href="/about.html#lab" class="mega-co-head">
                    <span class="mega-co-logo">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    <div>
                      <span class="mega-co-name">Baner Tech Lab</span>
                      <span class="mega-co-cat">Pune Headquarters</span>
                    </div>
                  </a>
                  <div class="mega-pillar-links">
                    <a href="/about.html#lab" class="mega-sub-link">Baner Road, near Balewadi High St</a>
                    <a href="/about.html#lab" class="mega-sub-link">In-Person Technical War Rooms</a>
                    <a href="/about.html#lab" class="mega-sub-link">Direct Client Collaboration</a>
                    <a href="/contact.html" class="mega-sub-link">Schedule Lab Visit / Meeting</a>
                  </div>
                </div>

                <!-- Pillar 4: Production Standards -->
                <div class="mega-pillar-card">
                  <a href="/about.html#standards" class="mega-co-head">
                    <span class="mega-co-logo">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </span>
                    <div>
                      <span class="mega-co-name">Quality Benchmarks</span>
                      <span class="mega-co-cat">Production Standards</span>
                    </div>
                  </a>
                  <div class="mega-pillar-links">
                    <a href="/about.html#standards" class="mega-sub-link">Google Lighthouse 95+ Standard</a>
                    <a href="/about.html#standards" class="mega-sub-link">Sub-1.2s Page Load Guarantee</a>
                    <a href="/about.html#standards" class="mega-sub-link">Clean Semantic Next.js Code</a>
                    <a href="/case-studies.html" class="mega-sub-link">Verified Client Case Studies</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>`;

// ════════════════════════════════════════════════════════════
// 5. UPDATE index.html (About Dropdown + Pillars Strip)
// ════════════════════════════════════════════════════════════
let indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

// Replace old about dropdown with new About mega dropdown in index.html
indexHtml = indexHtml.replace(
  /<!-- About Dropdown -->\s*<div class="nav-item" data-dropdown="about">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
  aboutMegaDropdownHtml
);

// Redesign 4 pillars strip in index.html
const newPillarsHtml = `        <!-- 4 Pillars Architecture Benchmark Strip (Redesigned Enterprise Cards) -->
        <div class="pillars-strip">
          <div class="pillar-tab active" data-pillar="1">
            <div class="pillar-tab-head">
              <span class="pillar-tab-tag">PILLAR 01</span>
              <span class="pillar-tab-stat">+318%</span>
            </div>
            <h3 class="pillar-tab-name">Search Dominance</h3>
            <p class="pillar-tab-sub">Organic Reach Surge</p>
          </div>

          <div class="pillar-tab" data-pillar="2">
            <div class="pillar-tab-head">
              <span class="pillar-tab-tag">PILLAR 02</span>
              <span class="pillar-tab-stat">&lt; 1.2s</span>
            </div>
            <h3 class="pillar-tab-name">High-Performance Web</h3>
            <p class="pillar-tab-sub">Core Web Vitals Speed</p>
          </div>

          <div class="pillar-tab" data-pillar="3">
            <div class="pillar-tab-head">
              <span class="pillar-tab-tag">PILLAR 03</span>
              <span class="pillar-tab-stat">4.8x</span>
            </div>
            <h3 class="pillar-tab-name">Paid Acquisition</h3>
            <p class="pillar-tab-sub">Average Campaign ROAS</p>
          </div>

          <div class="pillar-tab" data-pillar="4">
            <div class="pillar-tab-head">
              <span class="pillar-tab-tag">PILLAR 04</span>
              <span class="pillar-tab-stat">+42%</span>
            </div>
            <h3 class="pillar-tab-name">Brand &amp; CRO</h3>
            <p class="pillar-tab-sub">Lead Conversion Lift</p>
          </div>
        </div>`;

indexHtml = indexHtml.replace(
  /<!-- 4 Pillars Architecture Strip -->\s*<div class="pillars-strip">[\s\S]*?<\/div>\s*<\/div>/,
  newPillarsHtml
);

fs.writeFileSync('inrank2.0/index.html', indexHtml, 'utf8');
console.log('4. Updated index.html (About mega dropdown & new 4-pillar benchmark cards)');

// ════════════════════════════════════════════════════════════
// 6. SYNCHRONIZE MASTER HEADER ACROSS ALL 86 HTML PAGES
// ════════════════════════════════════════════════════════════
const masterHeaderMatch = indexHtml.match(/<header id="nav"[\s\S]*?<\/header>/i);
if (!masterHeaderMatch) {
  console.error('Master header not found in index.html');
  process.exit(1);
}
const masterHeader = masterHeaderMatch[0];

function syncHeader(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') syncHeader(full);
    } else if (f.endsWith('.html') && f !== 'test_footer.html' && full !== path.normalize('inrank2.0/index.html')) {
      let c = fs.readFileSync(full, 'utf8');
      if (/<header id="nav"[\s\S]*?<\/header>/i.test(c)) {
        c = c.replace(/<header id="nav"[\s\S]*?<\/header>/i, masterHeader);
        fs.writeFileSync(full, c, 'utf8');
      }
    }
  }
}
syncHeader('inrank2.0');
console.log('5. Synchronized master header (with About mega-dropdown) to all pages.');

// ════════════════════════════════════════════════════════════
// 7. UPDATE ALL SERVICE PAGES WITH OUTLINED LOGO & TEXT
// ════════════════════════════════════════════════════════════
const serviceFiles = fs.readdirSync('inrank2.0/services').filter(f => f.endsWith('.html'));

const outlinedLogoAvailability = `<p class="eco-availability">
            <svg class="eco-avail-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="5.5" cy="4.5" r="2" />
              <rect x="12" y="2.5" width="8" height="4" rx="1.5" />
              <rect x="3.5" y="9" width="4" height="13" rx="1.5" />
              <rect x="12" y="9" width="4" height="13" rx="1.5" />
            </svg>
            <span>Engineered &amp; executed directly by Inrank Team. Transparent fixed pricing from ₹11,999.</span>
          </p>`;

serviceFiles.forEach(f => {
  const full = path.join('inrank2.0/services', f);
  let c = fs.readFileSync(full, 'utf8');

  // Replace availability paragraph with outlined logo + updated text
  c = c.replace(
    /<p class="eco-availability">[\s\S]*?<\/p>/,
    outlinedLogoAvailability
  );

  // Also replace any generic text occurrence
  c = c.replace(/Engineered &amp; executed directly by Inrank Baner Lab/g, 'Engineered &amp; executed directly by Inrank Team');
  c = c.replace(/Engineered & executed directly by Inrank Baner Lab/g, 'Engineered & executed directly by Inrank Team');

  fs.writeFileSync(full, c, 'utf8');
});

console.log(`6. Updated all ${serviceFiles.length} service pages with outlined logo and 'Inrank Team' text.`);

console.log('--- ALL 4 UPDATES APPLIED SUCCESSFULLY ---');

