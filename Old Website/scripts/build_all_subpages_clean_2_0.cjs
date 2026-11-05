const fs = require('fs');

const navSnippet = `  <div id="scroll-bar" role="progressbar" aria-label="Page reading progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

  <!-- Skip Link for Accessibility -->
  <a class="skip-link" href="#main">Skip to main content</a>

  <!-- Floating Dock Navigation -->
  <header id="nav" class="nav-dock" role="banner">
    <div class="nav-bar">
      <!-- Inrank Brand Logo -->
      <a href="/" class="nav-logo" aria-label="Inrank Technologies Home">
        <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>

      <!-- Desktop Links -->
      <nav class="nav-links" aria-label="Main Navigation">
        <!-- Services Mega Dropdown -->
        <div class="nav-item" data-dropdown="services">
          <button class="nav-link nav-link--drop" aria-expanded="false" aria-haspopup="true">
            <span>Services</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12"><path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
          <div class="nav-drop drop-mega" role="region" aria-label="Services Directory">
            <div class="mega-grid-wrap">
              <div class="mega-rail">
                <span class="mega-rail-eyebrow">Digital Capabilities</span>
                <p class="mega-rail-title">Full-Stack Growth Engineering</p>
                <p class="mega-rail-text">We replace fragmented agencies with an accountable, high-performance growth engineering partner.</p>
                <a href="/services.html" class="mega-rail-cta">
                  <span>Explore all 27 services</span>
                  <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
              </div>
              <div class="mega-cards">
                <a href="/services.html#pillar-1" class="mega-co" style="--co:#009d49">
                  <span class="mega-co-logo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">Search &amp; AI Discovery</span>
                    <span class="mega-co-tag">SEO in Pune, GEO &amp; Google 3-Pack</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services.html#pillar-2" class="mega-co" style="--co:#102138">
                  <span class="mega-co-logo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">High-Performance Web</span>
                    <span class="mega-co-tag">Custom Next.js, WordPress &amp; E-Commerce</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services.html#pillar-3" class="mega-co" style="--co:#047857">
                  <span class="mega-co-logo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">Performance Marketing</span>
                    <span class="mega-co-tag">Google Ads, Meta &amp; High-ROI Funnels</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
                <a href="/services.html#pillar-4" class="mega-co" style="--co:#081424">
                  <span class="mega-co-logo">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
                  </span>
                  <span class="mega-co-text">
                    <span class="mega-co-name">Brand &amp; CRO Optimization</span>
                    <span class="mega-co-tag">UI/UX, Brand Identity &amp; Conversions</span>
                  </span>
                  <svg class="mega-co-arr" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 11L11 1M11 1H4M11 1V8"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="/our-work.html" class="nav-link">Our Work</a>
        <a href="/case-studies.html" class="nav-link">Case Studies</a>

        <!-- About Dropdown -->
        <div class="nav-item" data-dropdown="about">
          <button class="nav-link nav-link--drop" aria-expanded="false">
            <span>About</span>
            <svg class="nav-chev" viewBox="0 0 12 12" width="12" height="12"><path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
          <div class="nav-drop drop-simple" role="region" aria-label="About Inrank">
            <div class="mega-grid-wrap">
              <div class="simple-cards">
                <a href="/about.html" class="drop-row">
                  <span class="drop-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </span>
                  <span class="drop-row-text">
                    <span class="drop-name">Leadership &amp; Founder</span>
                    <span class="drop-desc">Prasad Mhaske and our Baner Engineering Lab.</span>
                  </span>
                </a>
                <a href="/about.html#operating-model" class="drop-row">
                  <span class="drop-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/></svg>
                  </span>
                  <span class="drop-row-text">
                    <span class="drop-name">The Inrank Standard</span>
                    <span class="drop-desc">5-7 day sprints, transparent fixed pricing.</span>
                  </span>
                </a>
                <a href="/about.html#baner-lab" class="drop-row">
                  <span class="drop-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span class="drop-row-text">
                    <span class="drop-name">Baner, Pune Office</span>
                    <span class="drop-desc">Direct technical consultation on FC Road / Baner.</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <a href="/contact.html" class="nav-link">Contact</a>
      </nav>

      <!-- CTA -->
      <a href="/contact.html" class="nav-cta">Book Consultation</a>

      <!-- Mobile Hamburger -->
      <button id="nav-burger" class="nav-burger" aria-label="Open mobile menu" aria-expanded="false" aria-controls="mob">
        <span class="nav-burger-box" aria-hidden="true"><span></span><span></span><span></span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Drawer Menu -->
  <div id="mob" aria-hidden="true">
    <div class="mob-hd">
      <a href="/" class="mob-logo" aria-label="Inrank Technologies">
        <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="32" height="32" class="logo-icon" />
        <div class="nav-logo-brand">
          <span class="nav-logo-name">Inrank</span>
          <span class="nav-logo-sub">Technologies</span>
        </div>
      </a>
      <button id="mob-x" class="mob-x" aria-label="Close menu">✕</button>
    </div>
    <nav class="mob-body">
      <a href="/services.html" class="mob-link">All 27 Services</a>
      <a href="/pricing.html" class="mob-link">Pricing Packages</a>
      <a href="/our-work.html" class="mob-link">Our Work</a>
      <a href="/case-studies.html" class="mob-link">Case Studies</a>
      <a href="/about.html" class="mob-link">About Inrank</a>
      <a href="/contact.html" class="mob-link">Contact</a>
      <a href="/contact.html" class="mob-cta">Request Strategy Consultation</a>
    </nav>
  </div>`;

const closingAndFooter = `  <!-- Closing Dual Action Cards -->
  <section class="closing-section">
    <div class="shell">
      <span class="eyebrow-pill">TAKE THE NEXT STEP</span>
      <div class="closing-grid">
        <div class="closing-card card-dark">
          <h2 class="closing-title">Ready to engineer similar growth for your brand?</h2>
          <p class="closing-desc">Talk directly to our senior growth engineering pod about your business goals, target keywords, and market expansion.</p>
          <a href="/contact.html" class="closing-cta-link">
            <span>Book a Free Strategy Consultation</span>
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
          </a>
        </div>
        <div class="closing-card card-light">
          <h2 class="closing-title">Speak directly with an engineer, not a salesperson.</h2>
          <p class="closing-desc">Schedule a 30-minute direct technical consultation with Prasad Mhaske at our Baner lab or over Google Meet.</p>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <a href="https://wa.me/918788823182" target="_blank" rel="noopener" class="closing-contact-link">
              <strong>Message on WhatsApp (+91 87888 23182)</strong>
            </a>
            <a href="tel:+918788823182" class="closing-contact-link" style="color:#081424;">
              <span>Or call directly: <strong>+91 87888 23182</strong></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Corporate Footer -->
  <footer class="site-footer">
    <div class="shell">
      <div class="footer-grid">
        <div class="footer-col brand-col">
          <a href="/" class="footer-logo">
            <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="36" height="36" />
            <div class="nav-logo-brand">
              <span class="nav-logo-name">Inrank</span>
              <span class="nav-logo-sub">Technologies</span>
            </div>
          </a>
          <p class="footer-bio">
            Inrank Technologies is Pune's leading performance digital marketing agency &amp; web development company. Engineering search dominance, ultra-fast web platforms, and measurable commercial growth.
          </p>
        </div>
        <div class="footer-col">
          <h4 class="col-title">Capabilities</h4>
          <ul class="col-links">
            <li><a href="/services.html#pillar-1">Search &amp; AI Discovery</a></li>
            <li><a href="/services.html#pillar-2">High-Performance Web</a></li>
            <li><a href="/services.html#pillar-3">Performance Marketing</a></li>
            <li><a href="/services.html">All 27 Services</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="col-title">Packages</h4>
          <ul class="col-links">
            <li><a href="/pricing.html">Starter Sprint (₹11,999)</a></li>
            <li><a href="/pricing.html">Growth Scale (₹18,999)</a></li>
            <li><a href="/pricing.html">Market Domination</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="col-title">Proof &amp; Work</h4>
          <ul class="col-links">
            <li><a href="/our-work.html">Featured Portals</a></li>
            <li><a href="/case-studies.html">Client Case Studies</a></li>
            <li><a href="/about.html">About Inrank</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="col-title">Pune Service Hubs</h4>
          <ul class="col-links">
            <li><span>Baner &amp; Balewadi</span></li>
            <li><span>Hinjewadi Tech Hub</span></li>
            <li><span>Shivaji Nagar / FC Rd</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copyright">&copy; 2026 Inrank Technologies Pune. All rights reserved. Baner Engineering Lab.</p>
        <div class="site-footer-legal">
          <a href="/privacy-policy.html">Privacy Policy</a>
          <a href="/terms-and-conditions.html">Terms &amp; Conditions</a>
          <a href="/contact.html">Contact</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="/js/core.js"></script>`;

// 1. BUILD PRICING.HTML
const pricingHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Transparent Pricing Packages | Inrank Technologies Pune</title>
  <meta name="description" content="Fixed-price website development and performance marketing packages in Pune. Starter Sprint (₹11,999), Growth Scale (₹18,999), Market Domination (₹34,999)." />
  <link rel="canonical" href="https://www.inranktech.com/pricing.html" />
  <link rel="icon" type="image/svg+xml" href="/img/inrank-white-logo.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/corporate.css" />
  <link rel="stylesheet" href="/css/footer-social.css" />
</head>
<body class="theme-corporate">
${navSnippet}

  <main id="main">
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:50vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:3.5rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="shell hero-content">
        <div class="hero-copy">
          <span class="eyebrow-pill">TRANSPARENT VALUE PACKAGES</span>
          <h1 class="hero-title" style="margin-top:1rem;margin-bottom:1rem;font-size:clamp(2.4rem, 4.2vw, 3.8rem);">
            Fixed-Price Web &amp; Growth <em>Retainers.</em>
          </h1>
          <p class="hero-sub" style="max-width:820px;font-size:clamp(1.05rem, 1.5vw, 1.25rem);color:var(--terra-hero);line-height:1.55;">
            No hidden fees. No hostage code. Complete intellectual property ownership from day one. Every website includes high-performance cloud hosting, free SSL, business emails, and 365 days of active support.
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Grid Section -->
    <section class="pricing-section" id="packages" style="padding:4.5rem 0 6rem;background:var(--paper);">
      <div class="shell">
        <div class="section-head" style="text-align:center;max-width:760px;margin:0 auto 3.5rem;">
          <span class="eyebrow-pill">FAIR FIXED INVESTMENT</span>
          <h2 class="section-title">Zero Hidden Fees. 100% Code Ownership.</h2>
          <p class="section-sub">Choose a proven sprint tier designed for your commercial growth stage.</p>
        </div>

        <div class="pricing-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:2rem;align-items:stretch;">
          
          <!-- Tier 1: Starter Sprint -->
          <div class="pricing-card" style="background:#ffffff;border:1px solid var(--line);border-radius:24px;padding:2.5rem 2rem;display:flex;flex-direction:column;position:relative;">
            <div style="font-size:0.75rem;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">ENTRY LEVEL DOMINANCE</div>
            <h3 style="font-size:1.6rem;font-weight:850;color:var(--text-strong);margin:0 0 12px;">Starter Sprint</h3>
            <div style="font-size:2.5rem;font-weight:900;color:var(--text-strong);line-height:1;margin-bottom:12px;">₹11,999 <small style="font-size:0.85rem;color:#64748b;font-weight:600;">/ one-time</small></div>
            <p style="font-size:0.875rem;color:#475569;line-height:1.5;margin-bottom:1.75rem;">Fast 7-day deployment for ambitious local businesses, clinics, and professionals seeking immediate credibility.</p>
            
            <ul style="list-style:none;padding:0;margin:0 0 2rem;display:flex;flex-direction:column;gap:10px;font-size:0.875rem;color:#334155;flex-grow:1;">
              <li style="display:flex;gap:8px;">✔ <strong>Up to 5 Custom Pages</strong> (Sub-second speed)</li>
              <li style="display:flex;gap:8px;">✔ <strong>Google Maps 3-Pack Setup</strong> (Local Pune citations)</li>
              <li style="display:flex;gap:8px;">✔ <strong>1-Tap WhatsApp Lead Routing</strong></li>
              <li style="display:flex;gap:8px;">✔ <strong>Free Cloud Hosting &amp; SSL</strong> (1 Year)</li>
              <li style="display:flex;gap:8px;">✔ <strong>365 Days Technical Support</strong></li>
            </ul>

            <a href="/contact.html" class="button secondary" style="width:100%;text-align:center;padding:12px 20px;border-radius:999px;font-weight:800;text-decoration:none;border:1px solid var(--line);color:var(--text-strong);">Get Started with Starter</a>
          </div>

          <!-- Tier 2: Growth Scale (Featured) -->
          <div class="pricing-card featured" style="background:#ffffff;border:2px solid var(--terra);border-radius:24px;padding:2.5rem 2rem;display:flex;flex-direction:column;position:relative;box-shadow:0 20px 48px rgba(0,157,73,0.12);">
            <div style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:var(--terra);color:#ffffff;font-size:0.7rem;font-weight:850;padding:4px 16px;border-radius:999px;letter-spacing:0.06em;text-transform:uppercase;">MOST POPULAR CHOICE</div>
            <div style="font-size:0.75rem;font-weight:800;color:var(--terra);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">SCALING BUSINESSES</div>
            <h3 style="font-size:1.6rem;font-weight:850;color:var(--text-strong);margin:0 0 12px;">Growth Scale</h3>
            <div style="font-size:2.5rem;font-weight:900;color:var(--terra);line-height:1;margin-bottom:12px;">₹18,999 <small style="font-size:0.85rem;color:#64748b;font-weight:600;">/ one-time</small></div>
            <p style="font-size:0.875rem;color:#475569;line-height:1.5;margin-bottom:1.75rem;">Complete commercial engine with full SEO architecture, Google Ads launch, and multi-page corporate conversion layout.</p>
            
            <ul style="list-style:none;padding:0;margin:0 0 2rem;display:flex;flex-direction:column;gap:10px;font-size:0.875rem;color:#334155;flex-grow:1;">
              <li style="display:flex;gap:8px;">✔ <strong>10–15 Custom Pages</strong> (Next.js / WordPress)</li>
              <li style="display:flex;gap:8px;">✔ <strong>Full Technical &amp; On-Page SEO Moat</strong></li>
              <li style="display:flex;gap:8px;">✔ <strong>Google Ads Search &amp; PMax Campaign Setup</strong></li>
              <li style="display:flex;gap:8px;">✔ <strong>Schema JSON-LD &amp; GEO Entity Markup</strong></li>
              <li style="display:flex;gap:8px;">✔ <strong>Lead Qualification Form &amp; CRM Sync</strong></li>
              <li style="display:flex;gap:8px;">✔ <strong>365 Days Comprehensive Active Support</strong></li>
            </ul>

            <a href="/contact.html" class="button primary" style="width:100%;text-align:center;padding:14px 20px;border-radius:999px;font-weight:850;text-decoration:none;background:var(--terra);color:#ffffff;box-shadow:0 8px 24px rgba(0,157,73,0.3);">Select Growth Scale</a>
          </div>

          <!-- Tier 3: Market Domination -->
          <div class="pricing-card" style="background:#ffffff;border:1px solid var(--line);border-radius:24px;padding:2.5rem 2rem;display:flex;flex-direction:column;position:relative;">
            <div style="font-size:0.75rem;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">FULL CATEGORY MOAT</div>
            <h3 style="font-size:1.6rem;font-weight:850;color:var(--text-strong);margin:0 0 12px;">Market Domination</h3>
            <div style="font-size:2.5rem;font-weight:900;color:var(--text-strong);line-height:1;margin-bottom:12px;">₹34,999 <small style="font-size:0.85rem;color:#64748b;font-weight:600;">/ sprint</small></div>
            <p style="font-size:0.875rem;color:#475569;line-height:1.5;margin-bottom:1.75rem;">For market leaders who need total category monopoly, custom e-commerce infrastructure, and programmatic SEO dominance.</p>
            
            <ul style="list-style:none;padding:0;margin:0 0 2rem;display:flex;flex-direction:column;gap:10px;font-size:0.875rem;color:#334155;flex-grow:1;">
              <li style="display:flex;gap:8px;">✔ <strong>Unlimited Pages / Complex E-Commerce</strong></li>
              <li style="display:flex;gap:8px;">✔ <strong>AI Answer Engine Dominance (ChatGPT, Gemini)</strong></li>
              <li style="display:flex;gap:8px;">✔ <strong>Omnichannel Paid Ad Funnels (Google, Meta, LinkedIn)</strong></li>
              <li style="display:flex;gap:8px;">✔ <strong>Dedicated Senior Engineer Lead Allocation</strong></li>
              <li style="display:flex;gap:8px;">✔ <strong>Weekly Performance Reviews with Prasad Mhaske</strong></li>
            </ul>

            <a href="/contact.html" class="button secondary" style="width:100%;text-align:center;padding:12px 20px;border-radius:999px;font-weight:800;text-decoration:none;border:1px solid var(--line);color:var(--text-strong);">Book Domination Sprint</a>
          </div>

        </div>
      </div>
    </section>

${closingAndFooter}
</body>
</html>`;

fs.writeFileSync('inrank2.0/pricing.html', pricingHtml, 'utf8');
console.log('inrank2.0/pricing.html cleanly updated with 2.0 system!');

// 2. BUILD ABOUT.HTML
const aboutHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Inrank Technologies | Baner, Pune Engineering Lab</title>
  <meta name="description" content="Meet Prasad Mhaske and the senior engineering team at Inrank Technologies in Baner, Pune. 5-7 day sprints, transparent pricing, zero junior account managers." />
  <link rel="canonical" href="https://www.inranktech.com/about.html" />
  <link rel="icon" type="image/svg+xml" href="/img/inrank-white-logo.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/corporate.css" />
  <link rel="stylesheet" href="/css/footer-social.css" />
</head>
<body class="theme-corporate">
${navSnippet}

  <main id="main">
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:50vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:3.5rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="shell hero-content">
        <div class="hero-copy">
          <span class="eyebrow-pill">SENIOR OPERATING MODEL</span>
          <h1 class="hero-title" style="margin-top:1rem;margin-bottom:1rem;font-size:clamp(2.4rem, 4.2vw, 3.8rem);">
            Engineers, Not <em>Account Managers.</em>
          </h1>
          <p class="hero-sub" style="max-width:820px;font-size:clamp(1.05rem, 1.5vw, 1.25rem);color:var(--terra-hero);line-height:1.55;">
            Why ambitious businesses across Pune partner directly with senior practitioners to dominate Google search rankings, build sub-second web platforms, and capture real revenue.
          </p>
        </div>
      </div>
    </section>

    <!-- Leadership & Operating Philosophy -->
    <section style="padding:5rem 0;background:var(--paper);">
      <div class="shell" style="display:grid;grid-template-columns:1.2fr 1fr;gap:4rem;align-items:center;">
        <div>
          <span class="eyebrow-pill">FOUNDER &amp; LEAD ARCHITECT</span>
          <h2 class="section-title" style="margin-bottom:1rem;">Prasad Mhaske &amp; The Baner Lab</h2>
          <p class="section-copy" style="margin-bottom:1.5rem;">
            Traditional agencies in Pune are built around sales reps and junior interns. You talk to a smooth salesperson during the pitch, but your campaign is handed off to fresh graduates with zero skin in the game.
          </p>
          <p class="section-copy" style="margin-bottom:2rem;">
            At Inrank, you interface directly with Prasad Mhaske and seasoned engineers who write the code, configure the servers, and optimize the ad algorithms. We deploy in 5-7 day sprints, provide transparent fixed pricing, and remain actively accountable for client P&amp;L growth.
          </p>
          
          <div style="display:flex;gap:2rem;flex-wrap:wrap;">
            <div>
              <strong style="font-size:2rem;font-weight:900;color:var(--text-strong);display:block;">50+</strong>
              <span style="font-size:0.85rem;color:#64748b;font-weight:700;">Pune Deployments</span>
            </div>
            <div>
              <strong style="font-size:2rem;font-weight:900;color:var(--terra);display:block;">4.9★</strong>
              <span style="font-size:0.85rem;color:#64748b;font-weight:700;">Client Rating</span>
            </div>
            <div>
              <strong style="font-size:2rem;font-weight:900;color:var(--text-strong);display:block;">0%</strong>
              <span style="font-size:0.85rem;color:#64748b;font-weight:700;">Outsourced Work</span>
            </div>
          </div>
        </div>

        <div style="background:#ffffff;border:1px solid var(--line);border-radius:24px;padding:2.5rem;box-shadow:0 20px 48px rgba(8,20,36,0.06);">
          <h3 style="font-size:1.3rem;font-weight:800;color:var(--text-strong);margin:0 0 1.25rem;">The Inrank Standard</h3>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:14px;font-size:0.9rem;color:#334155;">
            <li style="display:flex;gap:10px;">✔ <strong>Direct Senior Access:</strong> Call or WhatsApp Prasad Mhaske directly at +91 87888 23182.</li>
            <li style="display:flex;gap:10px;">✔ <strong>5–7 Day Sprint Delivery:</strong> Fast production turnarounds with zero bureaucratic delays.</li>
            <li style="display:flex;gap:10px;">✔ <strong>100% Code Ownership:</strong> You own all source files, domains, and advertising accounts.</li>
            <li style="display:flex;gap:10px;">✔ <strong>Baner Engineering Lab:</strong> In-person consultations on Baner Road near Balewadi High Street.</li>
          </ul>
        </div>
      </div>
    </section>

${closingAndFooter}
</body>
</html>`;

fs.writeFileSync('inrank2.0/about.html', aboutHtml, 'utf8');
console.log('inrank2.0/about.html cleanly updated with 2.0 system!');

// 3. BUILD SERVICES.HTML
const servicesHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>All 27 Services &amp; 4 Growth Pillars | Inrank Technologies Pune</title>
  <meta name="description" content="Explore all 27 specialized growth engineering services across our 4 foundational pillars: Search Engine Discovery, High-Performance Web, Paid Ads, and Brand CRO." />
  <link rel="canonical" href="https://www.inranktech.com/services.html" />
  <link rel="icon" type="image/svg+xml" href="/img/inrank-white-logo.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/corporate.css" />
  <link rel="stylesheet" href="/css/footer-social.css" />
</head>
<body class="theme-corporate">
${navSnippet}

  <main id="main">
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:50vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:3.5rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="shell hero-content">
        <div class="hero-copy">
          <span class="eyebrow-pill">END-TO-END EXECUTION</span>
          <h1 class="hero-title" style="margin-top:1rem;margin-bottom:1rem;font-size:clamp(2.4rem, 4.2vw, 3.8rem);">
            27 Specialized Growth <em>Capabilities.</em>
          </h1>
          <p class="hero-sub" style="max-width:820px;font-size:clamp(1.05rem, 1.5vw, 1.25rem);color:var(--terra-hero);line-height:1.55;">
            Four foundational pillars delivered by senior practitioners in Baner, Pune. Accountable, sub-second web systems and top-ranking search campaigns.
          </p>
        </div>
      </div>
    </section>

    <!-- Pillars Breakdown -->
    <section style="padding:5rem 0 6rem;background:var(--paper);">
      <div class="shell">
        
        <!-- Pillar 1 -->
        <div id="pillar-1" style="background:#ffffff;border:1px solid var(--line);border-radius:24px;padding:3rem 2.5rem;margin-bottom:2.5rem;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem;">
            <span class="eyebrow-pill">PILLAR 01</span>
            <span style="font-size:0.85rem;font-weight:800;color:var(--terra);">+318% Average Organic Traffic Surge</span>
          </div>
          <h2 style="font-size:2rem;font-weight:850;color:var(--text-strong);margin:0 0 1rem;">Search Engine &amp; AI Discovery Engineering</h2>
          <p style="font-size:1rem;color:#475569;line-height:1.6;margin-bottom:2rem;max-width:820px;">
            Dominate Google search results and emerging generative AI answer engines. We execute high-authority local SEO in Pune, Generative Engine Optimization (GEO), Google Business Profile 3-Pack optimization, and technical backlink acquisition.
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem;">
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">SEO Services in Pune</strong>
              <small style="color:#64748b;">Keyword architecture &amp; local ranking sprint</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">Google 3-Pack Optimization</strong>
              <small style="color:#64748b;">Baner, Hinjewadi &amp; PCMC local map domination</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">AI SEO &amp; GEO Citations</strong>
              <small style="color:#64748b;">Entity markup for ChatGPT, Gemini, Perplexity</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">Technical SEO Audits</strong>
              <small style="color:#64748b;">Core Web Vitals &amp; crawl efficiency diagnostics</small>
            </div>
          </div>
        </div>

        <!-- Pillar 2 -->
        <div id="pillar-2" style="background:#ffffff;border:1px solid var(--line);border-radius:24px;padding:3rem 2.5rem;margin-bottom:2.5rem;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem;">
            <span class="eyebrow-pill">PILLAR 02</span>
            <span style="font-size:0.85rem;font-weight:800;color:var(--terra);">&lt; 1.2s Average Page Load Speed</span>
          </div>
          <h2 style="font-size:2rem;font-weight:850;color:var(--text-strong);margin:0 0 1rem;">High-Performance Web &amp; E-Commerce Engineering</h2>
          <p style="font-size:1rem;color:#475569;line-height:1.6;margin-bottom:2rem;max-width:820px;">
            Sub-second web architectures built with semantic HTML5, Next.js, and lightweight WordPress. Engineered to convert casual traffic into qualified buyers with zero layout shift.
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem;">
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">Custom Next.js &amp; React</strong>
              <small style="color:#64748b;">Ultra-fast corporate platforms &amp; web applications</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">WordPress Development</strong>
              <small style="color:#64748b;">Lightweight, bloat-free custom theme engineering</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">E-Commerce &amp; Export Stores</strong>
              <small style="color:#64748b;">Shopify &amp; WooCommerce multi-currency catalogs</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">365-Day Maintenance</strong>
              <small style="color:#64748b;">Proactive security, backups &amp; uptime monitoring</small>
            </div>
          </div>
        </div>

        <!-- Pillar 3 -->
        <div id="pillar-3" style="background:#ffffff;border:1px solid var(--line);border-radius:24px;padding:3rem 2.5rem;margin-bottom:2.5rem;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem;">
            <span class="eyebrow-pill">PILLAR 03</span>
            <span style="font-size:0.85rem;font-weight:800;color:var(--terra);">4.8x Average Return on Ad Spend</span>
          </div>
          <h2 style="font-size:2rem;font-weight:850;color:var(--text-strong);margin:0 0 1rem;">Performance Marketing &amp; Paid Acquisition</h2>
          <p style="font-size:1rem;color:#475569;line-height:1.6;margin-bottom:2rem;max-width:820px;">
            High-intent paid ad funnels engineered for profitable customer acquisition across Google Search, Performance Max, Meta Ads, and LinkedIn with end-to-end CRM attribution.
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem;">
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">Google Ads (PPC) Management</strong>
              <small style="color:#64748b;">Search intent harvesting &amp; negative keyword gating</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">Meta Ads &amp; Retargeting</strong>
              <small style="color:#64748b;">Instagram/Facebook high-conversion catalog ads</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">LinkedIn B2B Advertising</strong>
              <small style="color:#64748b;">Account-based marketing for manufacturing &amp; SaaS</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">Full Funnel Analytics &amp; CRO</strong>
              <small style="color:#64748b;">Server-side GTM, GA4, and offline conversion sync</small>
            </div>
          </div>
        </div>

        <!-- Pillar 4 -->
        <div id="pillar-4" style="background:#ffffff;border:1px solid var(--line);border-radius:24px;padding:3rem 2.5rem;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem;">
            <span class="eyebrow-pill">PILLAR 04</span>
            <span style="font-size:0.85rem;font-weight:800;color:var(--terra);">+42% Average Conversion Rate Lift</span>
          </div>
          <h2 style="font-size:2rem;font-weight:850;color:var(--text-strong);margin:0 0 1rem;">Brand Identity &amp; Conversion Rate Optimization (CRO)</h2>
          <p style="font-size:1rem;color:#475569;line-height:1.6;margin-bottom:2rem;max-width:820px;">
            Eliminating bounce rates and friction points with high-fidelity Figma user journey prototypes, strategic copywriting, and brand identity systems that establish immediate trust.
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem;">
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">UI/UX Design in Figma</strong>
              <small style="color:#64748b;">Mobile-first wireframes &amp; high-fidelity components</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">Conversion Rate Audits</strong>
              <small style="color:#64748b;">Heatmap analysis, form friction removal &amp; A/B tests</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">Corporate Brand Identity</strong>
              <small style="color:#64748b;">Vector logos, color tokens &amp; typography guidelines</small>
            </div>
            <div style="padding:1.25rem;background:var(--paper);border:1px solid var(--line);border-radius:14px;">
              <strong style="display:block;font-size:1rem;color:var(--text-strong);margin-bottom:4px;">High-Converting Landing Pages</strong>
              <small style="color:#64748b;">Dedicated paid ad landing pages built to convert</small>
            </div>
          </div>
        </div>

      </div>
    </section>

${closingAndFooter}
</body>
</html>`;

fs.writeFileSync('inrank2.0/services.html', servicesHtml, 'utf8');
console.log('inrank2.0/services.html cleanly updated with 2.0 system!');

// 4. BUILD CASE-STUDIES.HTML
const caseStudiesHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Client Case Studies &amp; Documented Outcomes | Inrank Technologies</title>
  <meta name="description" content="Explore documented case studies and revenue breakthroughs delivered by Inrank Technologies across Pune, Mumbai, and global export markets." />
  <link rel="canonical" href="https://www.inranktech.com/case-studies.html" />
  <link rel="icon" type="image/svg+xml" href="/img/inrank-white-logo.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/corporate.css" />
  <link rel="stylesheet" href="/css/footer-social.css" />
</head>
<body class="theme-corporate">
${navSnippet}

  <main id="main">
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:50vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:3.5rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="shell hero-content">
        <div class="hero-copy">
          <span class="eyebrow-pill">DOCUMENTED PROOF</span>
          <h1 class="hero-title" style="margin-top:1rem;margin-bottom:1rem;font-size:clamp(2.4rem, 4.2vw, 3.8rem);">
            Client Growth <em>Records.</em>
          </h1>
          <p class="hero-sub" style="max-width:820px;font-size:clamp(1.05rem, 1.5vw, 1.25rem);color:var(--terra-hero);line-height:1.55;">
            Inspect our live client deployments, technical architecture, and measurable commercial breakthroughs across Pune, Mumbai, and international export channels.
          </p>
        </div>
      </div>
    </section>

    <!-- Case Studies List -->
    <section style="padding:5rem 0 6rem;background:var(--paper);">
      <div class="shell">
        <div class="section-head" style="margin-bottom:3rem;">
          <span class="eyebrow-pill">PROVEN REVENUE IMPACT</span>
          <h2 class="section-title">Verified Case Studies</h2>
          <p class="section-sub">Click on any case study below to inspect technical deliverables, verified metrics, and client quotes.</p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(340px, 1fr));gap:2rem;">
          
          <div style="background:#ffffff;border:1px solid var(--line);border-radius:20px;padding:2rem;display:flex;flex-direction:column;">
            <div style="font-size:0.75rem;font-weight:800;color:var(--terra);text-transform:uppercase;margin-bottom:6px;">LANDSCAPE ARCHITECTURE &amp; BOTANICAL D2C</div>
            <h3 style="font-size:1.35rem;font-weight:850;color:var(--text-strong);margin:0 0 10px;">Greytothegreen Platform</h3>
            <p style="font-size:0.875rem;color:#475569;line-height:1.55;margin-bottom:1.5rem;flex-grow:1;">Tripled organic search inquiries in 60 days with 99 Google Lighthouse score and automated WhatsApp lead routing.</p>
            <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--line);padding-top:1rem;">
              <strong style="font-size:1rem;color:var(--text-strong);">+340% Inquiries</strong>
              <a href="/our-work/greytothegreen.html" class="button primary" style="padding:6px 14px;font-size:0.8rem;border-radius:999px;text-decoration:none;background:var(--terra);color:#ffffff;font-weight:750;">View Case Study →</a>
            </div>
          </div>

          <div style="background:#ffffff;border:1px solid var(--line);border-radius:20px;padding:2rem;display:flex;flex-direction:column;">
            <div style="font-size:0.75rem;font-weight:800;color:var(--terra);text-transform:uppercase;margin-bottom:6px;">AGRO-EXPORT &amp; E-COMMERCE</div>
            <h3 style="font-size:1.35rem;font-weight:850;color:var(--text-strong);margin:0 0 10px;">Shetkari Foodstuff LLC</h3>
            <p style="font-size:0.875rem;color:#475569;line-height:1.55;margin-bottom:1.5rem;flex-grow:1;">Multi-currency export e-commerce infrastructure with targeted GCC search ads generating over ₹18L+ monthly export GMV.</p>
            <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--line);padding-top:1rem;">
              <strong style="font-size:1rem;color:var(--text-strong);">₹18L+ Export GMV</strong>
              <a href="/our-work/shetkarifoodstuff.html" class="button primary" style="padding:6px 14px;font-size:0.8rem;border-radius:999px;text-decoration:none;background:var(--terra);color:#ffffff;font-weight:750;">View Case Study →</a>
            </div>
          </div>

          <div style="background:#ffffff;border:1px solid var(--line);border-radius:20px;padding:2rem;display:flex;flex-direction:column;">
            <div style="font-size:0.75rem;font-weight:800;color:var(--terra);text-transform:uppercase;margin-bottom:6px;">HEALTHCARE &amp; CLINICAL DIAGNOSTICS</div>
            <h3 style="font-size:1.35rem;font-weight:850;color:var(--text-strong);margin:0 0 10px;">CyTOS Healthcare</h3>
            <p style="font-size:0.875rem;color:#475569;line-height:1.55;margin-bottom:1.5rem;flex-grow:1;">Automated pathology booking engine with Google 3-Pack domination in Shivaji Nagar, quadrupling patient appointments.</p>
            <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--line);padding-top:1rem;">
              <strong style="font-size:1rem;color:var(--text-strong);">4.2x Patient Bookings</strong>
              <a href="/our-work/cytos.html" class="button primary" style="padding:6px 14px;font-size:0.8rem;border-radius:999px;text-decoration:none;background:var(--terra);color:#ffffff;font-weight:750;">View Case Study →</a>
            </div>
          </div>

        </div>
      </div>
    </section>

${closingAndFooter}
</body>
</html>`;

fs.writeFileSync('inrank2.0/case-studies.html', caseStudiesHtml, 'utf8');
console.log('inrank2.0/case-studies.html cleanly updated with 2.0 system!');

