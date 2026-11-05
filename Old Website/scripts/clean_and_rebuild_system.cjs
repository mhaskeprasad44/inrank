const fs = require('fs');
const path = require('path');
const { projects } = require('./projects_data.cjs');

// ════════════════════════════════════════════════════════════
// 1. UPDATE NAV.CSS
// ════════════════════════════════════════════════════════════
function updateNavCss() {
  const cssPath = path.join(__dirname, '../inrank2.0/css/nav.css');
  let css = fs.readFileSync(cssPath, 'utf8');

  const navCustomStyles = `
/* ══════════════════════════════════════════
   GUARANTEED DESKTOP HOVER & MEGA DROPDOWN (Vinove 2.0 System)
   Matching User Reference Screenshot Exactly
══════════════════════════════════════════ */

.nav-drop::before {
  content: '';
  position: absolute;
  top: -18px;
  left: 0;
  right: 0;
  height: 18px;
  background: transparent;
}

/* Base small dropdown (About) */
@media (hover: hover) and (min-width: 992px) {
  .nav-item:hover > .nav-drop,
  .nav-item:focus-within > .nav-drop,
  .nav-item[data-open] > .nav-drop {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }
}

/* Services nav item is static on desktop so mega dropdown centers relative to .nav-bar */
@media (min-width: 992px) {
  .nav-item[data-dropdown="services"] {
    position: static !important;
  }
}

.drop-mega {
  position: absolute !important;
  top: calc(100% + 12px) !important;
  left: 50% !important;
  transform: translateX(-50%) translateY(8px) !important;
  width: min(1060px, calc(100vw - 40px)) !important;
  max-width: 1060px !important;
  background: #ffffff !important;
  border: 1px solid rgba(8, 20, 36, 0.10) !important;
  border-radius: 20px !important;
  box-shadow: 0 28px 72px rgba(8, 20, 36, 0.18) !important;
  z-index: 1000 !important;
  overflow: hidden !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  transition: opacity .25s cubic-bezier(.22, 1, .36, 1), transform .25s cubic-bezier(.22, 1, .36, 1), visibility .25s !important;
}

@media (hover: hover) and (min-width: 992px) {
  .nav-item[data-dropdown="services"]:hover > .drop-mega,
  .nav-item[data-dropdown="services"]:focus-within > .drop-mega,
  .nav-item[data-dropdown="services"][data-open] > .drop-mega {
    transform: translateX(-50%) translateY(0) !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }
}

.nav-item[data-dropdown="services"][data-open] > .drop-mega {
  transform: translateX(-50%) translateY(0) !important;
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

.mega-grid-wrap {
  display: grid !important;
  grid-template-columns: 260px 1fr !important;
  min-height: 440px !important;
}

.mega-rail {
  padding: 32px 26px !important;
  background: #f8fafc !important;
  border-right: 1px solid rgba(8, 20, 36, 0.08) !important;
  display: flex !important;
  flex-direction: column !important;
}

.mega-rail-eyebrow {
  font-size: 0.6875rem !important;
  font-weight: 850 !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  color: #009d49 !important;
  margin-bottom: 8px !important;
  display: block !important;
}

.mega-rail-title {
  font-size: 1.25rem !important;
  font-weight: 850 !important;
  color: #081424 !important;
  line-height: 1.25 !important;
  letter-spacing: -0.02em !important;
  margin: 0 0 12px !important;
}

.mega-rail-text {
  font-size: 0.84rem !important;
  color: #556980 !important;
  line-height: 1.55 !important;
  margin: 0 0 auto !important;
}

.mega-rail-cta {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  font-size: 0.84rem !important;
  font-weight: 750 !important;
  color: #009d49 !important;
  text-decoration: none !important;
  margin-top: 24px !important;
  transition: color 0.2s ease, transform 0.2s ease !important;
}

.mega-rail-cta:hover {
  color: #00b755 !important;
  transform: translateX(4px) !important;
}

.mega-pillars-grid {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 14px !important;
  padding: 22px !important;
  background: #ffffff !important;
}

.mega-pillar-card {
  padding: 16px 14px !important;
  border-radius: 14px !important;
  border: 1px solid rgba(8, 20, 36, 0.08) !important;
  background: #ffffff !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 10px !important;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease !important;
}

.mega-pillar-card:hover {
  border-color: #009d49 !important;
  box-shadow: 0 10px 28px rgba(8, 20, 36, 0.06) !important;
  transform: translateY(-2px) !important;
}

.mega-co-head {
  display: flex !important;
  align-items: flex-start !important;
  gap: 12px !important;
  text-decoration: none !important;
  color: inherit !important;
}

.mega-co-logo {
  width: 44px !important;
  height: 44px !important;
  border-radius: 12px !important;
  background: rgba(0, 157, 73, 0.08) !important;
  color: #009d49 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-shrink: 0 !important;
  transition: background 0.2s, color 0.2s !important;
}

.mega-pillar-card:hover .mega-co-logo {
  background: #009d49 !important;
  color: #ffffff !important;
}

.mega-co-info {
  display: flex !important;
  flex-direction: column !important;
  gap: 3px !important;
  flex: 1 !important;
  min-width: 0 !important;
}

.mega-co-title-row {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 8px !important;
}

.mega-co-name {
  font-size: 0.95rem !important;
  font-weight: 800 !important;
  color: #081424 !important;
  line-height: 1.25 !important;
  letter-spacing: -0.015em !important;
}

.mega-co-arr {
  stroke: #94a3b8 !important;
  transition: stroke 0.2s, transform 0.2s !important;
  flex-shrink: 0 !important;
}

.mega-pillar-card:hover .mega-co-arr {
  stroke: #009d49 !important;
  transform: translate(2px, -2px) !important;
}

.mega-co-tag {
  font-size: 0.77rem !important;
  color: #64748b !important;
  line-height: 1.35 !important;
}

.mega-pillar-links {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 6px 12px !important;
  padding-top: 10px !important;
  border-top: 1px solid rgba(8, 20, 36, 0.06) !important;
}

.mega-sub-link {
  font-size: 0.77rem !important;
  color: #475569 !important;
  text-decoration: none !important;
  font-weight: 550 !important;
  padding: 2px 0 !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  transition: color 0.15s ease, transform 0.15s ease !important;
}

.mega-sub-link:hover {
  color: #009d49 !important;
  transform: translateX(3px) !important;
}

/* Ensure mobile menu drawer doesn't cause page overflow when closed */
#mob {
  position: fixed !important;
  inset: 0 0 0 auto !important;
  width: min(380px, 100vw) !important;
  background: #081424 !important;
  z-index: 1000 !important;
  transform: translateX(100%) !important;
  visibility: hidden !important;
  pointer-events: none !important;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s !important;
  overflow-y: auto !important;
}

#mob.open,
#mob.is-open {
  transform: translateX(0) !important;
  visibility: visible !important;
  pointer-events: auto !important;
}
`;

  if (css.includes('/* ══════════════════════════════════════════\n   GUARANTEED DESKTOP HOVER')) {
    css = css.replace(/\/\* ══════════════════════════════════════════\s+GUARANTEED DESKTOP HOVER[\s\S]*$/, navCustomStyles);
  } else if (css.includes('/* ── Guaranteed Desktop Hover')) {
    css = css.replace(/\/\* ── Guaranteed Desktop Hover[\s\S]*$/, navCustomStyles);
  } else {
    css += '\n' + navCustomStyles;
  }

  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('nav.css updated cleanly.');
}

// ════════════════════════════════════════════════════════════
// 2. UNIFIED HEADER GENERATOR
// ════════════════════════════════════════════════════════════
function getHeaderHtml(activeKey) {
  return `  <!-- Unified Corporate Header & Mega Dropdown (Vinove 2.0 System) -->
  <header id="nav" class="nav-dock" data-dock="default">
    <div class="nav-bar">
      <!-- Inrank Brand Logo -->
      <a href="/" class="nav-logo" aria-label="Inrank Technologies Home">
        <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="nav-links" aria-label="Main Navigation">
        <!-- Services with Mega Dropdown -->
        <div class="nav-item" data-dropdown="services">
          <button class="nav-link nav-link--drop${activeKey === 'services' ? ' is-current' : ''}" aria-expanded="false" aria-haspopup="true">
            <span>Services</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
              <path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Floating Mega Dropdown Menu -->
          <div class="nav-drop drop-mega" role="region" aria-label="Services Submenu">
            <div class="mega-grid-wrap">
              <!-- Left Rail: Digital Capabilities Overview -->
              <div class="mega-rail">
                <span class="mega-rail-eyebrow">DIGITAL CAPABILITIES</span>
                <h4 class="mega-rail-title">Full-Stack Growth Engineering</h4>
                <p class="mega-rail-text">We replace fragmented agencies with an accountable, high-performance growth engineering partner.</p>
                <a href="/services.html" class="mega-rail-cta">
                  <span>Explore all 27 services</span>
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>

              <!-- Right Area: 4 Pillars with ALL 27 Services -->
              <div class="mega-pillars-grid">
                
                <!-- Pillar 1: Search & AI Discovery -->
                <div class="mega-pillar-card">
                  <a href="/services.html#pillar-1" class="mega-co-head">
                    <span class="mega-co-logo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </span>
                    <div class="mega-co-info">
                      <div class="mega-co-title-row">
                        <span class="mega-co-name">Search &amp; AI Discovery</span>
                        <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 10L10 2M10 2H4M10 2V8"/></svg>
                      </div>
                      <span class="mega-co-tag">SEO in Pune, GEO &amp; Google 3-Pack</span>
                    </div>
                  </a>
                  <div class="mega-pillar-links">
                    <a href="/services/seo-company-pune.html" class="mega-sub-link">SEO Company Pune</a>
                    <a href="/services/ai-seo-services.html" class="mega-sub-link">AI SEO Services</a>
                    <a href="/services/geo-seo-agency.html" class="mega-sub-link">GEO &amp; Answer Engines</a>
                    <a href="/services/google-my-business-services.html" class="mega-sub-link">Google 3-Pack &amp; Maps</a>
                    <a href="/services/link-building-services.html" class="mega-sub-link">Authority Link Building</a>
                    <a href="/services/ai-ranking-citations.html" class="mega-sub-link">AI Citations</a>
                    <a href="/services/content-marketing-services.html" class="mega-sub-link">Content Marketing</a>
                  </div>
                </div>

                <!-- Pillar 2: High-Performance Web -->
                <div class="mega-pillar-card">
                  <a href="/services.html#pillar-2" class="mega-co-head">
                    <span class="mega-co-logo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    </span>
                    <div class="mega-co-info">
                      <div class="mega-co-title-row">
                        <span class="mega-co-name">High-Performance Web</span>
                        <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 10L10 2M10 2H4M10 2V8"/></svg>
                      </div>
                      <span class="mega-co-tag">Custom Next.js, WordPress &amp; E-Commerce</span>
                    </div>
                  </a>
                  <div class="mega-pillar-links">
                    <a href="/services/custom-website-development.html" class="mega-sub-link">Custom Web Development</a>
                    <a href="/services/wordpress-development-services.html" class="mega-sub-link">WordPress Development</a>
                    <a href="/services/ecommerce-website-development-company.html" class="mega-sub-link">E-Commerce Development</a>
                    <a href="/services/shopify-store-development.html" class="mega-sub-link">Shopify Stores</a>
                    <a href="/services/mobile-app-development.html" class="mega-sub-link">Mobile App Engineering</a>
                    <a href="/services/website-maintenance-services.html" class="mega-sub-link">Website Maintenance</a>
                    <a href="/services/landing-page-design-services.html" class="mega-sub-link">Landing Page Sprints</a>
                  </div>
                </div>

                <!-- Pillar 3: Performance Marketing -->
                <div class="mega-pillar-card">
                  <a href="/services.html#pillar-3" class="mega-co-head">
                    <span class="mega-co-logo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </span>
                    <div class="mega-co-info">
                      <div class="mega-co-title-row">
                        <span class="mega-co-name">Performance Marketing</span>
                        <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 10L10 2M10 2H4M10 2V8"/></svg>
                      </div>
                      <span class="mega-co-tag">Google Ads, Meta &amp; High-ROI Funnels</span>
                    </div>
                  </a>
                  <div class="mega-pillar-links">
                    <a href="/services/ppc-services.html" class="mega-sub-link">PPC Management</a>
                    <a href="/services/google-ads-agency.html" class="mega-sub-link">Google Ads Agency</a>
                    <a href="/services/meta-ads-agency.html" class="mega-sub-link">Meta &amp; Instagram Ads</a>
                    <a href="/services/linkedin-marketing-agency.html" class="mega-sub-link">LinkedIn B2B Marketing</a>
                    <a href="/services/social-media-marketing-services.html" class="mega-sub-link">Social Media Growth</a>
                    <a href="/services/influencer-marketing-agency.html" class="mega-sub-link">Influencer Campaigns</a>
                  </div>
                </div>

                <!-- Pillar 4: Brand & CRO Optimization -->
                <div class="mega-pillar-card">
                  <a href="/services.html#pillar-4" class="mega-co-head">
                    <span class="mega-co-logo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
                    </span>
                    <div class="mega-co-info">
                      <div class="mega-co-title-row">
                        <span class="mega-co-name">Brand &amp; CRO Optimization</span>
                        <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 10L10 2M10 2H4M10 2V8"/></svg>
                      </div>
                      <span class="mega-co-tag">UI/UX, Brand Identity &amp; Conversions</span>
                    </div>
                  </a>
                  <div class="mega-pillar-links">
                    <a href="/services/ui-ux-design-services.html" class="mega-sub-link">UI/UX Design Systems</a>
                    <a href="/services/conversion-rate-optimization-services.html" class="mega-sub-link">Conversion Optimization (CRO)</a>
                    <a href="/services/corporate-logo-design.html" class="mega-sub-link">Corporate Logo Design</a>
                    <a href="/services/brand-naming-agency.html" class="mega-sub-link">Brand Naming Agency</a>
                    <a href="/services/brochure-design-services.html" class="mega-sub-link">Brochure &amp; Collateral</a>
                    <a href="/services/letterhead-stationery-design.html" class="mega-sub-link">Letterhead &amp; Stationery</a>
                    <a href="/services/luxury-business-card-design.html" class="mega-sub-link">Luxury Business Cards</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- Direct Navigation Items -->
        <a href="/pricing.html" class="nav-link${activeKey === 'pricing' ? ' is-current' : ''}" data-nav="pricing">Pricing</a>
        <a href="/our-work.html" class="nav-link${activeKey === 'work' ? ' is-current' : ''}" data-nav="work">Our Work</a>
        <a href="/case-studies.html" class="nav-link${activeKey === 'cases' ? ' is-current' : ''}" data-nav="cases">Case Studies</a>

        <!-- About Dropdown -->
        <div class="nav-item" data-dropdown="about">
          <button class="nav-link nav-link--drop${activeKey === 'about' ? ' is-current' : ''}" aria-expanded="false" aria-haspopup="true">
            <span>About</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
              <path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="nav-drop nav-drop--sm" role="region" aria-label="About Submenu">
            <div class="drop-list">
              <a href="/about.html" class="drop-link-card">
                <strong>About Inrank</strong>
                <span>Our story, Baner engineering lab &amp; mission</span>
              </a>
              <a href="/about.html#prasad-mhaske" class="drop-link-card">
                <strong>Leadership Profile</strong>
                <span>Prasad Mhaske, Founder &amp; Lead Architect</span>
              </a>
              <a href="/about.html#lab" class="drop-link-card">
                <strong>Baner Engineering Lab</strong>
                <span>Direct senior engineers, no junior interns</span>
              </a>
            </div>
          </div>
        </div>

        <a href="/contact.html" class="nav-link${activeKey === 'contact' ? ' is-current' : ''}" data-nav="contact">Contact</a>
      </nav>

      <!-- CTA Button -->
      <a href="/contact.html" class="nav-cta">Book Consultation</a>

      <!-- Mobile Hamburger Button -->
      <button id="nav-burger" class="nav-burger" aria-label="Open mobile menu" aria-expanded="false" aria-controls="mob">
        <span class="nav-burger-box" aria-hidden="true"><span></span><span></span><span></span></span>
      </button>
    </div>
  </header>

  <!-- Navigation Scrim Backdrop -->
  <div id="nav-scrim" aria-hidden="true"></div>

  <!-- Mobile Drawer Menu (#mob) -->
  <div id="mob" aria-hidden="true">
    <div class="mob-hd">
      <a href="/" class="mob-logo" aria-label="Inrank Technologies">
        <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="32" height="32" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>
      <button id="mob-x" class="mob-x" aria-label="Close menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="mob-body">
      <!-- Services Accordion -->
      <div class="mob-acc">
        <button class="mob-acc-btn" aria-expanded="true" aria-controls="mob-acc-services">
          <span>Services (All 27)</span>
          <svg class="mob-acc-chev" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div id="mob-acc-services" class="mob-acc-body">
          <a href="/services/seo-company-pune.html" class="mob-co">
            <span class="mob-co-name">Search &amp; AI Discovery</span>
            <span class="mob-co-cat">SEO &amp; GEO (7 Services)</span>
          </a>
          <a href="/services/custom-website-development.html" class="mob-co">
            <span class="mob-co-name">High-Performance Web</span>
            <span class="mob-co-cat">Next.js &amp; WordPress (7 Services)</span>
          </a>
          <a href="/services/ppc-services.html" class="mob-co">
            <span class="mob-co-name">Performance Marketing</span>
            <span class="mob-co-cat">Google &amp; Meta Ads (6 Services)</span>
          </a>
          <a href="/services/ui-ux-design-services.html" class="mob-co">
            <span class="mob-co-name">Brand &amp; CRO Optimization</span>
            <span class="mob-co-cat">UI/UX &amp; Conversions (7 Services)</span>
          </a>
          <a href="/services.html" class="mob-co" style="background:rgba(0,157,73,0.12);border-color:#009d49;">
            <span class="mob-co-name" style="color:var(--terra-hero);font-weight:750;">Explore All 27 Services →</span>
            <span class="mob-co-cat">Full Directory</span>
          </a>
        </div>
      </div>

      <a href="/pricing.html" class="mob-link${activeKey === 'pricing' ? ' is-current' : ''}">Pricing</a>
      <a href="/our-work.html" class="mob-link${activeKey === 'work' ? ' is-current' : ''}">Our Work</a>
      <a href="/case-studies.html" class="mob-link${activeKey === 'cases' ? ' is-current' : ''}">Case Studies</a>

      <!-- About Accordion -->
      <div class="mob-acc">
        <button class="mob-acc-btn" aria-expanded="false" aria-controls="mob-acc-about">
          <span>About</span>
          <svg class="mob-acc-chev" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div id="mob-acc-about" class="mob-acc-body" style="display:none">
          <a href="/about.html" class="mob-co">
            <span class="mob-co-name">About Inrank</span>
            <span class="mob-co-cat">Baner Lab</span>
          </a>
          <a href="/about.html#prasad-mhaske" class="mob-co">
            <span class="mob-co-name">Leadership Profile</span>
            <span class="mob-co-cat">Founder</span>
          </a>
        </div>
      </div>

      <a href="/contact.html" class="mob-link${activeKey === 'contact' ? ' is-current' : ''}">Contact</a>

      <a href="/contact.html" class="mob-cta">Book Free Consultation</a>
    </div>
  </div>`;
}

// ════════════════════════════════════════════════════════════
// 3. CLEAN & REPLACE HEADER + MOB IN ANY HTML
// ════════════════════════════════════════════════════════════
function replaceHeaderClean(html, activeKey) {
  const bodyIdx = html.indexOf('<body');
  if (bodyIdx === -1) return html;
  const bodyOpenEnd = html.indexOf('>', bodyIdx) + 1;
  const mainIdx = html.indexOf('<main');
  if (mainIdx === -1) return html;

  const headerBlock = `
  <!-- Skip Link -->
  <a href="#main" class="skip-link">Skip to main content</a>

  <!-- Top Scroll Progress Bar -->
  <div id="scroll-bar" role="progressbar" aria-label="Page scroll progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>

${getHeaderHtml(activeKey)}

  `;

  return html.substring(0, bodyOpenEnd) + headerBlock + html.substring(mainIdx);
}

// ════════════════════════════════════════════════════════════
// 4. CLEAN AND UPDATE ALL MAIN PAGES
// ════════════════════════════════════════════════════════════
function cleanAndUpdateAllPages() {
  const pages = [
    { file: 'index.html', key: '' },
    { file: 'services.html', key: 'services' },
    { file: 'pricing.html', key: 'pricing' },
    { file: 'our-work.html', key: 'work' },
    { file: 'about.html', key: 'about' },
    { file: 'case-studies.html', key: 'cases' },
    { file: 'contact.html', key: 'contact' }
  ];

  for (const pg of pages) {
    const fullPath = path.join(__dirname, '../inrank2.0', pg.file);
    let html = fs.readFileSync(fullPath, 'utf8');

    // Cleanly replace header & mob
    html = replaceHeaderClean(html, pg.key);

    // Fix mojibake
    html = html.replace(/,111,999/g, '₹11,999')
               .replace(/,114.2M\+/g, '₹14.2M+')
               .replace(/,118,999/g, '₹18,999')
               .replace(/,134,999/g, '₹34,999')
               .replace(/4.9~\./g, '4.9★')
               .replace(/Traditional Pune Agencies/g, 'Traditional Agencies')
               .replace(/\+''/g, '→')
               .replace(/dY"\?/g, '📍')
               .replace(/\?,/g, '⚡');

    fs.writeFileSync(fullPath, html, 'utf8');
    console.log(`Cleaned and updated: ${pg.file}`);
  }
}

// ════════════════════════════════════════════════════════════
// 5. UPDATE ALL 10 INDIVIDUAL WORK PAGES
// ════════════════════════════════════════════════════════════
function buildIndividualWorkPage(p) {
  const header = getHeaderHtml('work');

  return `<!doctype html>
<html lang="en">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WLZ75BS8');</script>
  <!-- End Google Tag Manager -->

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${p.name} — Inrank Technologies Case Study</title>
  <meta name="description" content="${p.tagline}. Documented outcomes, performance metrics, and technical architecture by Inrank Technologies Pune." />
  <link rel="canonical" href="https://www.inranktech.com/our-work/${p.slug}.html" />
  <link rel="icon" type="image/svg+xml" href="/img/inrank-white-logo.svg" />

  <!-- Fonts & Stylesheets -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/corporate.css" />
</head>
<body class="theme-corporate">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLZ75BS8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  <!-- Skip Link -->
  <a href="#main" class="skip-link">Skip to main content</a>

  <!-- Top Scroll Progress Bar -->
  <div id="scroll-bar" role="progressbar" aria-label="Page scroll progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>

${header}

  <main id="main">
    
    <!-- ════════════════════════════════════════════════════════
         HERO SECTION: IMAGE FIRST, THEN TITLE & DETAILS
         ════════════════════════════════════════════════════════ -->
    <section class="work-hero-top" style="padding-top:calc(var(--nav-h) + 2.5rem);padding-bottom:3.5rem;background: radial-gradient(circle at 80% 20%, rgba(0, 157, 73, 0.28) 0%, transparent 60%), #081424;">
      <div class="shell">
        
        <!-- Breadcrumb Navigation -->
        <nav style="display:flex;align-items:center;gap:8px;font-size:0.84rem;color:#94a3b8;margin-bottom:1.5rem;" aria-label="Breadcrumb">
          <a href="/" style="color:#94a3b8;text-decoration:none;">Home</a>
          <span>/</span>
          <a href="/our-work.html" style="color:#94a3b8;text-decoration:none;">Our Work</a>
          <span>/</span>
          <span style="color:#ffffff;font-weight:700;">${p.name}</span>
        </nav>

        <!-- 1. IMAGE FIRST: Prominent Browser Mockup Showcase -->
        <div class="work-mockup-frame" style="background:#ffffff;border:1px solid rgba(255,255,255,0.15);border-radius:20px;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,0.45);margin-bottom:2.5rem;">
          <div style="padding:12px 20px;background:#f8fafc;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
            <div style="display:flex;gap:6px;">
              <span style="width:11px;height:11px;border-radius:50%;background:#ef4444;display:inline-block;"></span>
              <span style="width:11px;height:11px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>
              <span style="width:11px;height:11px;border-radius:50%;background:#10b981;display:inline-block;"></span>
            </div>
            <span style="font-size:0.8rem;font-weight:700;color:#64748b;font-family:monospace;">${p.domain}</span>
            <span style="font-size:0.75rem;font-weight:800;color:#009d49;background:#e6f7ef;padding:4px 12px;border-radius:999px;">${p.heroBadge}</span>
          </div>
          <img src="/portfolio/screenshots/${p.slug}.webp" alt="${p.name} Production Interface" style="width:100%;height:auto;display:block;" />
        </div>

        <!-- 2. TITLE AND DETAILS COME AFTER IMAGE -->
        <div class="work-hero-details" style="color:#ffffff;">
          <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:1.25rem;">
            <span class="eyebrow-pill" style="background:rgba(0,157,73,0.15);color:#00bf5d;border:1px solid rgba(0,157,73,0.3);padding:6px 14px;border-radius:999px;font-size:0.75rem;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;">${p.category}</span>
            <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,0.08);color:#ffffff;font-size:0.75rem;font-weight:700;">📍 ${p.location}</span>
            <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,0.08);color:#ffffff;font-size:0.75rem;font-weight:700;">⚡ ${p.turnaround}</span>
          </div>

          <h1 class="hero-title" style="margin-bottom:0.75rem;font-size:clamp(2.2rem, 3.8vw, 3.5rem);font-weight:850;letter-spacing:-0.03em;color:#ffffff;line-height:1.15;">${p.name}</h1>
          <p style="font-size:clamp(1.1rem, 1.6vw, 1.35rem);color:#00bf5d;font-weight:700;line-height:1.4;max-width:860px;margin-bottom:2rem;">${p.tagline}</p>

          <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="button primary" style="background:#009d49;color:#ffffff;padding:12px 26px;border-radius:999px;font-weight:750;text-decoration:none;display:inline-flex;align-items:center;gap:8px;">
              <span>Visit Live Portal</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 13L13 3H5M13 3V11"/></svg>
            </a>
            <a href="/contact.html" class="button secondary" style="color:#ffffff;border:1px solid rgba(255,255,255,0.25);background:rgba(255,255,255,0.05);padding:12px 26px;border-radius:999px;font-weight:750;text-decoration:none;">Book Similar Project</a>
          </div>
        </div>

      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         KEY METRICS STRIP
         ════════════════════════════════════════════════════════ -->
    <section style="padding:4rem 0;background:#ffffff;border-bottom:1px solid var(--line);">
      <div class="shell">
        <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:1.5rem;">
          ${p.metrics.map(m => `
            <div style="padding:1.75rem 1.5rem;background:var(--paper);border:1px solid var(--line);border-radius:18px;">
              <strong style="font-size:2.25rem;font-weight:850;color:var(--text-strong);letter-spacing:-0.03em;display:block;margin-bottom:4px;">${m.val}</strong>
              <span style="font-size:0.95rem;font-weight:750;color:var(--terra);display:block;">${m.lbl}</span>
              <small style="font-size:0.8rem;color:#64748b;display:block;margin-top:2px;">${m.sub}</small>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         PROJECT DETAILS: OVERVIEW & DELIVERABLES
         ════════════════════════════════════════════════════════ -->
    <section style="padding:5rem 0;background:#ffffff;">
      <div class="shell">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start;">
          <div>
            <span class="eyebrow-pill" style="margin-bottom:1rem;display:inline-block;">PROJECT OVERVIEW</span>
            <h2 style="font-size:2rem;font-weight:850;color:var(--text-strong);letter-spacing:-0.02em;margin-bottom:1.25rem;">The Commercial Challenge &amp; Solution</h2>
            <p style="font-size:1rem;color:#556980;line-height:1.7;margin-bottom:1.5rem;">${p.overview}</p>
            <div style="padding:1.5rem;background:#f8fafc;border-left:4px solid var(--terra);border-radius:8px;">
              <strong style="display:block;color:var(--text-strong);font-size:0.95rem;margin-bottom:6px;">Technical Challenge</strong>
              <p style="font-size:0.875rem;color:#64748b;line-height:1.6;margin:0;">${p.challenge}</p>
            </div>
          </div>

          <div>
            <span class="eyebrow-pill" style="margin-bottom:1rem;display:inline-block;">ENGINEERING DELIVERABLES</span>
            <h2 style="font-size:2rem;font-weight:850;color:var(--text-strong);letter-spacing:-0.02em;margin-bottom:1.25rem;">Scope of Architecture Deployed</h2>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1rem;">
              ${p.deliverables.map(d => `
                <li style="display:flex;align-items:flex-start;gap:12px;padding:1rem 1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:12px;">
                  <span style="color:var(--terra);font-weight:800;font-size:1.1rem;line-height:1;">✓</span>
                  <span style="font-size:0.92rem;color:var(--text-strong);font-weight:600;line-height:1.4;">${d}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         CLIENT TESTIMONIAL & OUTCOMES
         ════════════════════════════════════════════════════════ -->
    <section style="padding:4rem 0;background:var(--paper);border-top:1px solid var(--line);border-bottom:1px solid var(--line);">
      <div class="shell">
        <div style="max-width:820px;margin:0 auto;text-align:center;">
          <span style="color:var(--terra);font-size:1.75rem;display:block;margin-bottom:1rem;">★★★★★</span>
          <blockquote style="font-size:clamp(1.15rem, 1.8vw, 1.45rem);font-weight:600;color:var(--text-strong);line-height:1.5;margin:0 0 1.5rem;font-style:italic;">
            "${p.testimonial.quote}"
          </blockquote>
          <strong style="display:block;color:var(--text-strong);font-size:1rem;font-weight:800;">${p.testimonial.author}</strong>
          <span style="display:block;color:#64748b;font-size:0.85rem;margin-top:2px;">${p.testimonial.title}</span>
        </div>
      </div>
    </section>

    <!-- ════════════════════════════════════════════════════════
         BOTTOM CTA BANNER
         ════════════════════════════════════════════════════════ -->
    <section style="padding:5rem 0;background:#081424;color:#ffffff;text-align:center;">
      <div class="shell" style="max-width:760px;margin:0 auto;">
        <span class="eyebrow-pill" style="background:rgba(0,157,73,0.15);color:#00bf5d;border-color:rgba(0,157,73,0.3);margin-bottom:1.5rem;display:inline-block;">SCALE YOUR REVENUE</span>
        <h2 style="font-size:clamp(2rem, 3.5vw, 2.8rem);font-weight:850;color:#ffffff;letter-spacing:-0.03em;margin-bottom:1rem;">
          Ready for a similar commercial deployment?
        </h2>
        <p style="font-size:1.05rem;color:#94a3b8;line-height:1.6;margin-bottom:2rem;">
          Schedule an executive growth audit with Prasad Mhaske at our Baner lab. We analyze Core Web Vitals, local Google 3-Pack gaps, and competitor ad strategies.
        </p>
        <div style="display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap;">
          <a href="/contact.html" class="button primary" style="background:#009d49;color:#ffffff;padding:14px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Book Free Growth Audit</a>
          <a href="/our-work.html" class="button secondary" style="color:#ffffff;border:1px solid rgba(255,255,255,0.25);background:rgba(255,255,255,0.05);padding:14px 28px;border-radius:999px;font-weight:750;text-decoration:none;">Explore More Deployments</a>
        </div>
      </div>
    </section>

  </main>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="shell">
      <div class="footer-top">
        <div class="footer-col brand-col">
          <a href="/" class="nav-logo" aria-label="Inrank Technologies">
            <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon" />
            <div class="nav-logo-brand">
              <span class="nav-logo-name">Inrank</span>
              <span class="nav-logo-sub">Technologies</span>
            </div>
          </a>
          <p class="brand-desc">
            Pune's dedicated performance digital marketing agency &amp; custom web development company. We engineer sub-second web platforms, rank you #1 on Google, and manage high-ROAS paid funnels.
          </p>
          <div class="footer-contact-info">
            <p><strong>Baner Lab:</strong> Baner Road, Pune, Maharashtra 411045</p>
            <p><strong>Direct Line:</strong> <a href="tel:+918788823182">+91 87888 23182</a></p>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Growth Services</h4>
          <ul class="footer-links">
            <li><a href="/services/seo-company-pune.html">SEO Services in Pune</a></li>
            <li><a href="/services/custom-website-development.html">Custom Web Development</a></li>
            <li><a href="/services/ppc-services.html">Google &amp; Meta Ads</a></li>
            <li><a href="/services/ui-ux-design-services.html">UI/UX &amp; CRO Optimization</a></li>
            <li><a href="/services/ai-seo-services.html">AI SEO &amp; Answer Engines</a></li>
            <li><a href="/services.html">View All 27 Services →</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Client Work</h4>
          <ul class="footer-links">
            <li><a href="/our-work/dravyafinancial.html">Dravya Financial Solutions</a></li>
            <li><a href="/our-work/cytos.html">Cytos Healthcare</a></li>
            <li><a href="/our-work/greytothegreen.html">Grey To The Green</a></li>
            <li><a href="/our-work/fludio.html">Fludio Architecture</a></li>
            <li><a href="/our-work/hcpnest.html">HCP Nest Workspaces</a></li>
            <li><a href="/our-work.html">View All 10 Cases →</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Company</h4>
          <ul class="footer-links">
            <li><a href="/about.html">About Inrank</a></li>
            <li><a href="/pricing.html">Sprint Pricing</a></li>
            <li><a href="/case-studies.html">Case Studies</a></li>
            <li><a href="/contact.html">Executive Consultation</a></li>
            <li><a href="/privacy-policy.html">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions.html">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; <span id="footer-year">2026</span> Inrank Technologies. All rights reserved.</p>
        <div class="footer-badges">
          <span class="badge">Baner, Pune</span>
          <span class="badge">Sub-Second Speed</span>
          <span class="badge">Direct Senior Engineers</span>
        </div>
      </div>
    </div>
  </footer>

  <script src="/js/core.js"></script>
</body>
</html>`;
}

function updateAllIndividualWorkPages() {
  for (const p of projects) {
    const pageHtml = buildIndividualWorkPage(p);

    const workPath = path.join(__dirname, '../inrank2.0/our-work', `${p.slug}.html`);
    fs.writeFileSync(workPath, pageHtml, 'utf8');

    const casePath = path.join(__dirname, '../inrank2.0/case-studies', `${p.slug}.html`);
    fs.writeFileSync(casePath, pageHtml, 'utf8');

    console.log(`Updated work page (IMAGE FIRST): ${p.slug}.html`);
  }
}

// EXECUTE
updateNavCss();
cleanAndUpdateAllPages();
updateAllIndividualWorkPages();

console.log('REBUILD COMPLETE! 100% CLEAN DOM ACROSS ALL PAGES.');

