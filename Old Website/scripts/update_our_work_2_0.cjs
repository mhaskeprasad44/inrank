const fs = require('fs');
const path = require('path');

const projects = [
  {
    slug: 'greytothegreen',
    name: 'Greytothegreen — Sustainable Architecture Platform',
    category: 'Landscape Architecture & Botanical D2C',
    filterTag: 'architecture',
    pill: '99 PageSpeed Score',
    screenshot: '/portfolio/screenshots/greytothegreen.webp',
    metric: '+340% Inquiries in 60 Days',
    desc: 'Engineered sub-second web architecture and molecular formulation credibility. Dominates competitive Pune landscaping and botanical D2C search queries organically.',
    liveUrl: 'https://greytothegreen.com/'
  },
  {
    slug: 'shetkarifoodstuff',
    name: 'Shetkari Foodstuff — Export E-Commerce Infrastructure',
    category: 'Agro-Export & E-Commerce Infrastructure',
    filterTag: 'ecommerce',
    pill: '0.7s LCP Load Time',
    screenshot: '/portfolio/screenshots/shetkarifoodstuff.webp',
    metric: '₹18L+ Monthly Export GMV',
    desc: 'Replaced a slow legacy site with multi-currency export e-commerce, automated RFQ quotation funnels, and high-ROAS targeted search campaigns across GCC & UAE markets.',
    liveUrl: 'https://shetkarifoodstuff.com/'
  },
  {
    slug: 'cytos',
    name: 'CyTOS Healthcare & Diagnostics — Pathology Booking Portal',
    category: 'Healthcare & Clinical Diagnostics',
    filterTag: 'healthcare',
    pill: '4.2x Appointment Booking',
    screenshot: '/portfolio/screenshots/cytos.webp',
    metric: '4.2x Patient Inquiries',
    desc: 'Clean HIPAA-conscious healthcare UI with automated test selection, WhatsApp appointment confirmation, and Google 3-Pack domination in Shivaji Nagar & FC Road.',
    liveUrl: 'https://cytosdiagnostics.com/'
  },
  {
    slug: 'dravyafinancial',
    name: 'Dravya Financial Solutions — Institutional Wealth Advisory',
    category: 'Wealth Management & Corporate Advisory',
    filterTag: 'professional',
    pill: '₹4.5Cr+ Inbound AUM',
    screenshot: '/portfolio/screenshots/dravyafinancial.webp',
    metric: '92% Lead Qualification Rate',
    desc: 'Constructed an executive wealth portal with interactive portfolio risk calculators, discreet booking funnels, and high-intent Pune search SEO for HNIs.',
    liveUrl: 'https://dravyafinancial.com/'
  },
  {
    slug: 'fludio',
    name: 'Fludio Water Solutions — Industrial Filtration Systems',
    category: 'Industrial Engineering & Water Systems',
    filterTag: 'manufacturing',
    pill: '3.8x B2B Quotations',
    screenshot: '/portfolio/screenshots/fludio.webp',
    metric: '3.8x B2B Quotations',
    desc: 'Engineered a technical product spec browser with sub-second video demonstrations, zero layout shift, and instant RFQ quotation builders for Bhosari & PCMC manufacturing plants.',
    liveUrl: 'https://fludio.in/'
  },
  {
    slug: 'hcpnest',
    name: 'HCPNest — Medical Staffing & Healthcare Talent Network',
    category: 'Healthcare Staffing & Enterprise SaaS',
    filterTag: 'healthcare',
    pill: '5,000+ Verified HCPs',
    screenshot: '/portfolio/screenshots/hcpnest.webp',
    metric: '65% Lower Acquisition Cost',
    desc: 'Built a candidate portal with 1-click CV upload, automated credential verification, and programmatic SEO across 40+ medical specialties throughout India.',
    liveUrl: 'https://hcpnest.com/'
  },
  {
    slug: 'hiragrafix',
    name: 'HIRAGRAFIX™ — Luxury Packaging & Commercial Printing',
    category: 'Packaging & Industrial Printing',
    filterTag: 'manufacturing',
    pill: '120+ Corporate Clients',
    screenshot: '/portfolio/screenshots/hiragrafix.webp',
    metric: '4.2x Commercial Print RFQs',
    desc: 'Designed a modern industrial manufacturing showcase with finishes visualizer (UV, foil, embossing), paper GSM calculators, and targeted Pune print SEO.',
    liveUrl: 'https://hiragrafix.com/'
  },
  {
    slug: 'orthopedicanklefootspecialist',
    name: 'Dr. Shyam Thakkar — Orthopedic Foot & Ankle Clinic',
    category: 'Clinical Orthopedics & Surgery',
    filterTag: 'healthcare',
    pill: '#1 Google Rank Pune',
    screenshot: '/portfolio/screenshots/orthopedicanklefootspecialist.webp',
    metric: '150+ Monthly Patient Calls',
    desc: 'Sub-specialized surgical clinic portal with structured medical procedure schemas, 1-tap WhatsApp consultation scheduling, and #1 Google 3-Pack rank across Baner & Aundh.',
    liveUrl: 'https://orthopedicanklefootspecialist.com/'
  },
  {
    slug: 'riituinstitution',
    name: 'Riitu Institution — Student Admissions & Coaching Platform',
    category: 'Higher Education & Coaching',
    filterTag: 'education',
    pill: '14 Top-3 Pune Rankings',
    screenshot: '/portfolio/screenshots/riituinstitution.webp',
    metric: '14 Top-3 Pune Rankings',
    desc: 'Structured local SEO citations and GEO indexing across Pune educational hubs. Tripled organic enrollment applications across Kothrud, Baner, and PCMC.',
    liveUrl: 'https://riituinstitution.com/'
  },
  {
    slug: 'vasroventures',
    name: 'Vasro Ventures — Commercial Real Estate Platform',
    category: 'Real Estate & Infrastructure',
    filterTag: 'architecture',
    pill: '₹12Cr+ Land Inquiries',
    screenshot: '/portfolio/screenshots/vasroventures.webp',
    metric: '₹12Cr+ Commercial Deals',
    desc: 'Corporate land development showcase featuring interactive zoning masterplans, automated investor brochure downloads, and high-precision Google Ads for NRI buyers.',
    liveUrl: 'https://vasroventures.com/'
  }
];

const cardsHtml = projects.map(p => `
          <!-- Work Card: ${p.slug} -->
          <article class="work-card" data-filter="${p.filterTag}" data-reveal>
            <div class="work-card-media">
              <img src="${p.screenshot}" alt="${p.name} Hero Screenshot" loading="lazy" />
              <span class="work-card-pill">${p.pill}</span>
            </div>
            <div class="work-card-body">
              <span class="work-card-category">${p.category}</span>
              <h3 class="work-card-title"><a href="/our-work/${p.slug}.html">${p.name}</a></h3>
              <p class="work-card-desc">${p.desc}</p>
            </div>
            <div class="work-card-footer">
              <span class="work-card-metric">${p.metric}</span>
              <div class="work-card-actions">
                <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="work-live-link" title="Visit Live Portal">
                  <span>Live Site</span>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
                <a href="/our-work/${p.slug}.html" class="work-card-link">
                  <span>Case Study</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </div>
          </article>
`).join('\n');

const fullHtml = `<!doctype html>
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
  <title>Our Work & Production Web Deployments | Inrank Technologies Pune</title>
  <meta name="description" content="Inspect 10 live production web deployments, custom portals, and e-commerce platforms engineered by Inrank Technologies in Baner, Pune." />
  <link rel="canonical" href="https://www.inranktech.com/our-work.html" />
  <link rel="icon" type="image/svg+xml" href="/img/inrank-white-logo.svg" />

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Master CSS -->
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/corporate.css" />
  <link rel="stylesheet" href="/css/footer-social.css" />
</head>
<body class="theme-corporate">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLZ75BS8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  <div id="scroll-bar" role="progressbar" aria-label="Page reading progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

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
        <a href="/our-work.html" class="nav-link is-current" aria-current="page">Our Work</a>
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
      <a href="/our-work.html" class="mob-link is-current">Our Work</a>
      <a href="/case-studies.html" class="mob-link">Case Studies</a>
      <a href="/about.html" class="mob-link">About Inrank</a>
      <a href="/contact.html" class="mob-link">Contact</a>
      <a href="/contact.html" class="mob-cta">Request Strategy Consultation</a>
    </nav>
  </div>

  <main id="main">
    
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:52vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:3.5rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="shell hero-content">
        <div class="hero-copy">
          <span class="eyebrow-pill">VERIFIED PRODUCTION PORTFOLIO</span>
          <h1 class="hero-title" style="margin-top:1rem;margin-bottom:1rem;font-size:clamp(2.4rem, 4.2vw, 3.8rem);">
            Selected Client <em>Deployments.</em>
          </h1>
          <p class="hero-sub" style="max-width:820px;font-size:clamp(1.05rem, 1.5vw, 1.25rem);color:var(--terra-hero);line-height:1.55;">
            Documented search ranking breakthroughs, sub-second web platforms, and automated lead capture engines engineered for Pune and national market leaders.
          </p>
        </div>
      </div>
    </section>

    <!-- Work Filter Strip -->
    <section style="background:#ffffff;border-bottom:1px solid var(--line);padding:1.25rem 0;position:sticky;top:var(--nav-h);z-index:90;backdrop-filter:blur(16px);background:rgba(255,255,255,0.95);">
      <div class="shell" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <span style="font-size:0.8rem;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;">Filter Sectors:</span>
        <div class="work-filter-pills" style="display:flex;flex-wrap:wrap;gap:8px;">
          <button class="filter-btn is-active" data-target="all">All (10)</button>
          <button class="filter-btn" data-target="healthcare">Healthcare &amp; Clinical</button>
          <button class="filter-btn" data-target="ecommerce">E-Commerce &amp; Export</button>
          <button class="filter-btn" data-target="manufacturing">Manufacturing &amp; Packaging</button>
          <button class="filter-btn" data-target="architecture">Real Estate &amp; Architecture</button>
          <button class="filter-btn" data-target="professional">Wealth &amp; Advisory</button>
          <button class="filter-btn" data-target="education">Education</button>
        </div>
      </div>
    </section>

    <!-- Work Grid Section -->
    <section class="work-section" aria-labelledby="cases-title" style="padding:4rem 0 6rem;background:var(--paper);">
      <div class="shell">
        <div style="max-width:760px;margin-bottom:3rem;">
          <p class="section-kicker">PROVEN REVENUE IMPACT</p>
          <h2 class="section-title" id="cases-title">10 Production Case Studies.</h2>
          <p class="section-copy">Click on any project to inspect technical architecture, core metrics, client testimonials, and verified deliverables.</p>
        </div>

        <div class="work-grid">
${cardsHtml}
        </div>
      </div>
    </section>

    <!-- Closing Dual Action Cards -->
    <section class="closing-section" id="contact">
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

  </main>

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

  <script src="/js/core.js"></script>
  <script>
    // Client-side instant filtering
    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('.work-card');

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');

          const target = btn.getAttribute('data-target');
          cards.forEach(card => {
            if (target === 'all' || card.getAttribute('data-filter') === target) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    });
  </script>
</body>
</html>`;

fs.writeFileSync('inrank2.0/our-work.html', fullHtml, 'utf8');
console.log('inrank2.0/our-work.html updated with 10 projects and hero screenshots!');

