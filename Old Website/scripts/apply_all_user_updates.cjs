const fs = require('fs');
const path = require('path');

// 1. DEFINE THE UNIFIED HEADER AND DROPDOWN HTML
function getHeaderHtml(activeKey) {
  return `  <header id="nav" class="nav-dock" data-dock="default">
    <div class="nav-bar">
      <!-- Brand Logo -->
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
        <a href="/pricing.html" class="nav-link${activeKey === 'pricing' ? ' is-current' : ''}">Pricing</a>
        <a href="/our-work.html" class="nav-link${activeKey === 'work' ? ' is-current' : ''}">Our Work</a>
        <a href="/case-studies.html" class="nav-link${activeKey === 'cases' ? ' is-current' : ''}">Case Studies</a>

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

        <a href="/contact.html" class="nav-link${activeKey === 'contact' ? ' is-current' : ''}">Contact</a>
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

console.log('Unified Header Generator Ready.');

