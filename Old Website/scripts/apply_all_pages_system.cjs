const fs = require('fs');
const path = require('path');
const { projects } = require('./projects_data.cjs');

// Unified header generator
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
// 1. UPDATE INDEX.HTML
// ════════════════════════════════════════════════════════════
function updateIndexHtml() {
  const filePath = path.join(__dirname, '../inrank2.0/index.html');
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace header and mobile menu
  const headerBlockRegex = /<header id="nav"[\s\S]*?<\/div>\s*<\/div>/i;
  const newHeader = getHeaderHtml('');
  html = html.replace(headerBlockRegex, newHeader);

  // Replace hero right column with new visual card containing real high-res team photo & floating badges
  const heroCopyRegex = /<div class="hero-visual-card">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/i;
  const heroVisualCard = `<div class="hero-visual-card">
            <div class="hero-visual-frame">
              <img src="/img/photography/home-team-at-work-hd.webp" alt="Inrank Technologies Baner Lab Team" class="hero-visual-img" />
              <div class="hero-visual-overlay"></div>
            </div>
            <div class="hero-stat-badge hero-stat-badge--top">
              <div class="stat-badge-dot"></div>
              <div>
                <strong>4.8x Average ROAS</strong>
                <small>Google &amp; Meta Campaigns</small>
              </div>
            </div>
            <div class="hero-stat-badge hero-stat-badge--mid">
              <div class="stat-badge-dot stat-badge-dot--blue"></div>
              <div>
                <strong>&lt; 1.2s Core Web Vitals</strong>
                <small>Google 90+ Mobile Speed</small>
              </div>
            </div>
            <div class="hero-stat-badge hero-stat-badge--bot">
              <div class="stat-badge-dot stat-badge-dot--amber"></div>
              <div>
                <strong>50+ Pune Portals</strong>
                <small>Baner Engineering Lab</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  
  if (heroCopyRegex.test(html)) {
    html = html.replace(heroCopyRegex, heroVisualCard);
  } else {
    html = html.replace(/<div class="hero-note">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/i, heroVisualCard);
  }

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

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('index.html updated successfully with real team image.');
}

// ════════════════════════════════════════════════════════════
// 2. UPDATE SERVICES.HTML
// ════════════════════════════════════════════════════════════
function updateServicesHtml() {
  const filePath = path.join(__dirname, '../inrank2.0/services.html');
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace header
  const headerBlockRegex = /<header id="nav"[\s\S]*?<\/header>/i;
  html = html.replace(headerBlockRegex, getHeaderHtml('services'));

  // Ensure right column hero image visual
  const heroSection = `<section class="hero image-hero" id="top">
    <div class="hero-shade"></div>
    <div class="shell">
      <div class="hero-content">
        <div class="hero-copy">
          <span class="eyebrow">FULL-STACK GROWTH ARSENAL</span>
          <h1 class="hero-title display">
            27 specialized services.<br />
            <span class="hero-accent">4 accountable growth pillars.</span>
          </h1>
          <p class="lede">
            We replaced sluggish, fragmented agencies with an accountable technical team. Every service is delivered with direct senior engineering, transparent fixed pricing, and verified revenue targets.
          </p>
          <div class="hero-actions">
            <a href="/contact.html" class="button primary">
              <span>Request Custom Proposal</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
            <a href="#pillar-1" class="button secondary">Browse Pillars Below</a>
          </div>
        </div>

        <!-- Hero Right Column: Image Visual with Live Badges -->
        <div class="hero-visual-card">
          <div class="hero-visual-frame">
            <img src="/images/service-website-development.webp" alt="Inrank Growth Services Architecture" class="hero-visual-img" />
            <div class="hero-visual-overlay"></div>
          </div>
          <div class="hero-stat-badge hero-stat-badge--top">
            <div class="stat-badge-dot"></div>
            <div>
              <strong>27 Specialized Services</strong>
              <small>Search, Web, Ads &amp; CRO</small>
            </div>
          </div>
          <div class="hero-stat-badge hero-stat-badge--bot">
            <div class="stat-badge-dot stat-badge-dot--blue"></div>
            <div>
              <strong>4 Growth Pillars</strong>
              <small>Direct Senior Engineers</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  html = html.replace(/<section class="hero[^>]*>[\s\S]*?<\/section>/i, heroSection);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('services.html updated successfully.');
}

// ════════════════════════════════════════════════════════════
// 3. UPDATE PRICING.HTML
// ════════════════════════════════════════════════════════════
function updatePricingHtml() {
  const filePath = path.join(__dirname, '../inrank2.0/pricing.html');
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace header
  const headerBlockRegex = /<header id="nav"[\s\S]*?<\/header>/i;
  html = html.replace(headerBlockRegex, getHeaderHtml('pricing'));

  // Ensure right column hero image visual
  const heroSection = `<section class="hero image-hero" id="top">
    <div class="hero-shade"></div>
    <div class="shell">
      <div class="hero-content">
        <div class="hero-copy">
          <span class="eyebrow">TRANSPARENT SPRINT PRICING</span>
          <h1 class="hero-title display">
            Fixed deliverables.<br />
            <span class="hero-accent">Zero lock-in retainers.</span>
          </h1>
          <p class="lede">
            Enterprise growth engineering shouldn't require opaque retainer contracts. We deliver rapid, measurable 7-to-14 day sprints with 100% code and asset ownership from Day 1.
          </p>
          <div class="hero-actions">
            <a href="#packages" class="button primary">
              <span>View 3 Core Packages</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
            <a href="/contact.html" class="button secondary">Request Custom Scope</a>
          </div>
        </div>

        <!-- Hero Right Column: Image Visual with Live Badges -->
        <div class="hero-visual-card">
          <div class="hero-visual-frame">
            <img src="/images/blog-conversion-funnels.webp" alt="Inrank Transparent Pricing Packages" class="hero-visual-img" />
            <div class="hero-visual-overlay"></div>
          </div>
          <div class="hero-stat-badge hero-stat-badge--top">
            <div class="stat-badge-dot"></div>
            <div>
              <strong>From ₹11,999 / Sprint</strong>
              <small>Transparent Fixed Deliverables</small>
            </div>
          </div>
          <div class="hero-stat-badge hero-stat-badge--bot">
            <div class="stat-badge-dot stat-badge-dot--amber"></div>
            <div>
              <strong>Zero Lock-in Retainers</strong>
              <small>100% Code &amp; Asset Ownership</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  html = html.replace(/<section class="hero[^>]*>[\s\S]*?<\/section>/i, heroSection);

  // Fix rupee mojibake
  html = html.replace(/,111,999/g, '₹11,999')
             .replace(/,118,999/g, '₹18,999')
             .replace(/,134,999/g, '₹34,999');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('pricing.html updated successfully.');
}

// ════════════════════════════════════════════════════════════
// 4. UPDATE OUR-WORK.HTML
// ════════════════════════════════════════════════════════════
function updateOurWorkHtml() {
  const filePath = path.join(__dirname, '../inrank2.0/our-work.html');
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace header
  const headerBlockRegex = /<header id="nav"[\s\S]*?<\/header>/i;
  html = html.replace(headerBlockRegex, getHeaderHtml('work'));

  // Ensure right column hero image visual
  const heroSection = `<section class="hero image-hero" id="top">
    <div class="hero-shade"></div>
    <div class="shell">
      <div class="hero-content">
        <div class="hero-copy">
          <span class="eyebrow">PRODUCTION WEB DEPLOYMENTS</span>
          <h1 class="hero-title display">
            Real websites.<br />
            <span class="hero-accent">Built for commercial dominance.</span>
          </h1>
          <p class="lede">
            Explore 10 verified live web deployments delivered by our Baner engineering lab. Every project is custom-coded for sub-second Core Web Vitals, Google 3-Pack prominence, and qualified inbound leads.
          </p>
          <div class="hero-actions">
            <a href="#work-grid" class="button primary">
              <span>Explore 10 Live Cases</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
            <a href="/contact.html" class="button secondary">Book Similar Sprint</a>
          </div>
        </div>

        <!-- Hero Right Column: Image Visual with Live Badges -->
        <div class="hero-visual-card">
          <div class="hero-visual-frame">
            <img src="/portfolio/screenshots/dravyafinancial.webp" alt="Inrank Production Web Deployments" class="hero-visual-img" />
            <div class="hero-visual-overlay"></div>
          </div>
          <div class="hero-stat-badge hero-stat-badge--top">
            <div class="stat-badge-dot"></div>
            <div>
              <strong>50+ Production Deployments</strong>
              <small>Pune &amp; Global Commercial Portals</small>
            </div>
          </div>
          <div class="hero-stat-badge hero-stat-badge--bot">
            <div class="stat-badge-dot stat-badge-dot--blue"></div>
            <div>
              <strong>100% Custom Engineering</strong>
              <small>Sub-Second Page Load Speeds</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  html = html.replace(/<section class="hero[^>]*>[\s\S]*?<\/section>/i, heroSection);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('our-work.html updated successfully.');
}

// ════════════════════════════════════════════════════════════
// 5. UPDATE ABOUT.HTML
// ════════════════════════════════════════════════════════════
function updateAboutHtml() {
  const filePath = path.join(__dirname, '../inrank2.0/about.html');
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace header
  const headerBlockRegex = /<header id="nav"[\s\S]*?<\/header>/i;
  html = html.replace(headerBlockRegex, getHeaderHtml('about'));

  // Ensure right column hero image visual
  const heroSection = `<section class="hero image-hero" id="top">
    <div class="hero-shade"></div>
    <div class="shell">
      <div class="hero-content">
        <div class="hero-copy">
          <span class="eyebrow">ABOUT INRANK TECHNOLOGIES</span>
          <h1 class="hero-title display">
            Senior growth architects.<br />
            <span class="hero-accent">Zero junior interns.</span>
          </h1>
          <p class="lede">
            Founded by Prasad Mhaske in Baner, Pune, Inrank Technologies replaces sluggish legacy agencies with direct senior engineering accountability, sub-second web performance, and commercial revenue growth.
          </p>
          <div class="hero-actions">
            <a href="/contact.html" class="button primary">
              <span>Book Lab Consultation</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
            <a href="/our-work.html" class="button secondary">View Production Work</a>
          </div>
        </div>

        <!-- Hero Right Column: Image Visual with Live Badges -->
        <div class="hero-visual-card">
          <div class="hero-visual-frame">
            <img src="/img/photography/vinove-team-collaboration-hd.webp" alt="Inrank Baner Engineering Lab" class="hero-visual-img" />
            <div class="hero-visual-overlay"></div>
          </div>
          <div class="hero-stat-badge hero-stat-badge--top">
            <div class="stat-badge-dot"></div>
            <div>
              <strong>Baner Engineering Lab</strong>
              <small>Pune Growth &amp; Tech Hub</small>
            </div>
          </div>
          <div class="hero-stat-badge hero-stat-badge--bot">
            <div class="stat-badge-dot stat-badge-dot--amber"></div>
            <div>
              <strong>Prasad Mhaske • Lead Architect</strong>
              <small>Direct Technical Accountability</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  html = html.replace(/<section class="hero[^>]*>[\s\S]*?<\/section>/i, heroSection);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('about.html updated successfully.');
}

// ════════════════════════════════════════════════════════════
// 6. UPDATE CASE-STUDIES.HTML
// ════════════════════════════════════════════════════════════
function updateCaseStudiesHtml() {
  const filePath = path.join(__dirname, '../inrank2.0/case-studies.html');
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace header
  const headerBlockRegex = /<header id="nav"[\s\S]*?<\/header>/i;
  html = html.replace(headerBlockRegex, getHeaderHtml('cases'));

  // Ensure right column hero image visual
  const heroSection = `<section class="hero image-hero" id="top">
    <div class="hero-shade"></div>
    <div class="shell">
      <div class="hero-content">
        <div class="hero-copy">
          <span class="eyebrow">DOCUMENTED COMMERCIAL OUTCOMES</span>
          <h1 class="hero-title display">
            Numbers that move P&amp;Ls.<br />
            <span class="hero-accent">Not just vanity dashboards.</span>
          </h1>
          <p class="lede">
            Over ₹14.2M in client revenue influenced across healthcare, industrial manufacturing, luxury interiors, financial advisory, and consumer e-commerce.
          </p>
          <div class="hero-actions">
            <a href="#cases" class="button primary">
              <span>Explore Case Studies</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
            <a href="/contact.html" class="button secondary">Request Growth Audit</a>
          </div>
        </div>

        <!-- Hero Right Column: Image Visual with Live Badges -->
        <div class="hero-visual-card">
          <div class="hero-visual-frame">
            <img src="/images/blog-entity-seo.webp" alt="Inrank Documented Outcomes" class="hero-visual-img" />
            <div class="hero-visual-overlay"></div>
          </div>
          <div class="hero-stat-badge hero-stat-badge--top">
            <div class="stat-badge-dot"></div>
            <div>
              <strong>₹14.2M+ Client Revenue</strong>
              <small>Documented Commercial Outcomes</small>
            </div>
          </div>
          <div class="hero-stat-badge hero-stat-badge--bot">
            <div class="stat-badge-dot stat-badge-dot--blue"></div>
            <div>
              <strong>+318% Organic Search Surge</strong>
              <small>Verified Google Search Impact</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  html = html.replace(/<section class="hero[^>]*>[\s\S]*?<\/section>/i, heroSection);

  // Fix rupee mojibake
  html = html.replace(/,114.2M\+/g, '₹14.2M+');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('case-studies.html updated successfully.');
}

// ════════════════════════════════════════════════════════════
// 7. UPDATE CONTACT.HTML
// ════════════════════════════════════════════════════════════
function updateContactHtml() {
  const filePath = path.join(__dirname, '../inrank2.0/contact.html');
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace header
  const headerBlockRegex = /<header id="nav"[\s\S]*?<\/header>/i;
  html = html.replace(headerBlockRegex, getHeaderHtml('contact'));

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('contact.html updated successfully.');
}

// ════════════════════════════════════════════════════════════
// 8. UPDATE ALL 10 INDIVIDUAL WORK PAGES (IMAGE FIRST, THEN TITLE & DETAILS)
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

  <!-- Navigation -->
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

    // Write to inrank2.0/our-work/{slug}.html
    const workPath = path.join(__dirname, '../inrank2.0/our-work', `${p.slug}.html`);
    fs.writeFileSync(workPath, pageHtml, 'utf8');

    // Write to inrank2.0/case-studies/{slug}.html
    const casePath = path.join(__dirname, '../inrank2.0/case-studies', `${p.slug}.html`);
    fs.writeFileSync(casePath, pageHtml, 'utf8');

    console.log(`Updated: our-work/${p.slug}.html and case-studies/${p.slug}.html (IMAGE FIRST)`);
  }
}

// RUN ALL UPDATES
updateIndexHtml();
updateServicesHtml();
updatePricingHtml();
updateOurWorkHtml();
updateAboutHtml();
updateCaseStudiesHtml();
updateContactHtml();
updateAllIndividualWorkPages();

console.log('ALL PAGES FULLY UPDATED WITH UNIFIED SYSTEM!');
