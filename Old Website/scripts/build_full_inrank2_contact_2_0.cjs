const fs = require('fs');

const contactHtml = `<!doctype html>
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
  <title>Contact Inrank Technologies Pune | Free Consultation &amp; Growth Audit</title>
  <meta name="description" content="Contact Inrank Technologies in Baner, Pune for custom website development, local SEO, PPC advertising, and free technical audits. Call or WhatsApp +91 87888 23182." />
  <link rel="canonical" href="https://www.inranktech.com/contact.html" />
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

        <a href="/contact.html" class="nav-link is-current" aria-current="page">Contact</a>
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
      <a href="/contact.html" class="mob-link is-current">Contact</a>
      <a href="/contact.html" class="mob-cta">Request Strategy Consultation</a>
    </nav>
  </div>

  <main id="main">
    
    <!-- Subpage Hero -->
    <section class="hero image-hero" style="min-height:52vh;padding-top:calc(var(--nav-h) + 4rem);padding-bottom:3.5rem;background: radial-gradient(circle at 75% 30%, rgba(0, 157, 73, 0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16, 33, 56, 0.8) 0%, transparent 60%), #081424;">
      <div class="shell hero-content">
        <div class="hero-copy">
          <span class="eyebrow-pill">DIRECT SENIOR ARCHITECT ACCESS</span>
          <h1 class="hero-title" style="margin-top:1rem;margin-bottom:1rem;font-size:clamp(2.4rem, 4.2vw, 3.8rem);">
            Let's Talk <em>Growth.</em>
          </h1>
          <p class="hero-sub" style="max-width:820px;font-size:clamp(1.05rem, 1.5vw, 1.25rem);color:var(--terra-hero);line-height:1.55;">
            Connect directly with Prasad Mhaske and our senior growth engineering pod in Baner, Pune. Receive an objective technical audit of your existing site and an actionable 90-day search roadmap with zero sales pitch.
          </p>

          <!-- Quick Trust Badges Strip -->
          <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:2rem;">
            <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);padding:8px 16px;border-radius:999px;font-size:0.8rem;color:#ffffff;font-weight:700;display:inline-flex;align-items:center;gap:6px;">
              <span>⏱️</span> 15-Minute Response SLA
            </div>
            <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);padding:8px 16px;border-radius:999px;font-size:0.8rem;color:#ffffff;font-weight:700;display:inline-flex;align-items:center;gap:6px;">
              <span>🛡️</span> Transparent Fixed Pricing
            </div>
            <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);padding:8px 16px;border-radius:999px;font-size:0.8rem;color:#ffffff;font-weight:700;display:inline-flex;align-items:center;gap:6px;">
              <span>💻</span> Direct Senior Access
            </div>
            <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);padding:8px 16px;border-radius:999px;font-size:0.8rem;color:#ffffff;font-weight:700;display:inline-flex;align-items:center;gap:6px;">
              <span>📍</span> Baner &amp; Balewadi, Pune
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Grid Section -->
    <section class="contact-section" aria-labelledby="contact-heading">
      <div class="shell contact-grid">
        
        <!-- Left Column: Direct Senior Channels & Assurance -->
        <div>
          <p class="section-kicker">DIRECT SENIOR CHANNELS</p>
          <h2 class="section-title" id="contact-heading" style="margin-bottom:1rem;">Speak directly with an engineer, not a salesperson.</h2>
          <p class="section-copy" style="margin-bottom:2.5rem;">
            No junior account managers, outsourced support, or generic slide decks. When you contact Inrank, you interface directly with senior practitioners who build high-performance web systems and drive organic search dominance.
          </p>

          <div style="display:flex;flex-direction:column;gap:1.25rem;margin-bottom:3rem;">
            <!-- WhatsApp & Phone -->
            <a href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer" class="contact-channel-card">
              <div class="channel-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div style="flex-grow:1;">
                <span style="font-size:0.75rem;font-weight:800;color:var(--terra);text-transform:uppercase;letter-spacing:0.06em;display:block;margin-bottom:2px;">Phone &amp; WhatsApp · Fastest Channel</span>
                <strong style="font-size:1.2rem;color:var(--text-strong);display:block;">+91 87888 23182</strong>
                <p style="font-size:0.85rem;color:#64748b;margin:4px 0 0;">Direct access to Prasad Mhaske. Instant project briefing &amp; quick quotation.</p>
              </div>
            </a>

            <!-- Direct Inquiries Email -->
            <a href="mailto:contact@inranktech.com" class="contact-channel-card">
              <div class="channel-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div style="flex-grow:1;">
                <span style="font-size:0.75rem;font-weight:800;color:var(--terra);text-transform:uppercase;letter-spacing:0.06em;display:block;margin-bottom:2px;">Direct Inquiries Email</span>
                <strong style="font-size:1.2rem;color:var(--text-strong);display:block;">contact@inranktech.com</strong>
                <p style="font-size:0.85rem;color:#64748b;margin:4px 0 0;">Formal RFPs, technical specifications, and complimentary audit requests.</p>
              </div>
            </a>

            <!-- Engineering Laboratory -->
            <div class="contact-channel-card">
              <div class="channel-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div style="flex-grow:1;">
                <span style="font-size:0.75rem;font-weight:800;color:var(--terra);text-transform:uppercase;letter-spacing:0.06em;display:block;margin-bottom:2px;">Baner Engineering Lab</span>
                <strong style="font-size:1.05rem;color:var(--text-strong);display:block;">Baner Road, Near Balewadi High Street, Pune 411045</strong>
                <p style="font-size:0.85rem;color:#64748b;margin:4px 0 0;">In-person strategy reviews by appointment. Open Mon–Sat, 9:30 AM – 7:30 PM IST.</p>
              </div>
            </div>
          </div>

          <!-- What Happens Next Timeline -->
          <div style="background:#ffffff;border:1px solid var(--line);border-radius:20px;padding:2rem;margin-bottom:2.5rem;">
            <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-strong);margin:0 0 1.25rem;">What Happens After You Inquire:</h3>
            
            <div class="timeline-step">
              <span class="timeline-num">1</span>
              <div>
                <strong style="font-size:0.95rem;color:var(--text-strong);display:block;">15-Min Scoping or WhatsApp Review</strong>
                <p style="font-size:0.85rem;color:#64748b;margin:4px 0 0;">We review your business goals, target Pune/national search terms, and current website architecture.</p>
              </div>
            </div>

            <div class="timeline-step">
              <span class="timeline-num">2</span>
              <div>
                <strong style="font-size:0.95rem;color:var(--text-strong);display:block;">48-Hour Technical &amp; SEO Audit</strong>
                <p style="font-size:0.85rem;color:#64748b;margin:4px 0 0;">You receive a complimentary deep-dive audit analyzing speed, indexation, ranking gaps, and competitors.</p>
              </div>
            </div>

            <div class="timeline-step">
              <span class="timeline-num">3</span>
              <div>
                <strong style="font-size:0.95rem;color:var(--text-strong);display:block;">Fixed-Price Sprint Proposal</strong>
                <p style="font-size:0.85rem;color:#64748b;margin:4px 0 0;">Transparent fixed pricing (₹11,999 - ₹34,999), 5-7 day sprint milestones, and zero hidden retainer fees.</p>
              </div>
            </div>
          </div>

          <!-- Local Corridor Strip -->
          <div style="padding:1.5rem;background:rgba(8,20,36,0.03);border:1px solid var(--line);border-radius:16px;">
            <span style="font-size:0.75rem;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;display:block;margin-bottom:8px;">Pune Local Service Coverage:</span>
            <p style="font-size:0.85rem;color:#475569;line-height:1.6;margin:0;">
              Baner · Balewadi High Street · Hinjewadi Phase 1-3 · Aundh · Wakad · Kothrud · Shivaji Nagar · Viman Nagar · Kharadi · Magarpatta · Bhosari &amp; PCMC Industrial Belt.
            </p>
          </div>

        </div>

        <!-- Right Column: Consultation Request Form -->
        <div>
          <div class="contact-form-card" data-reveal>
            <div style="margin-bottom:1.75rem;">
              <span class="eyebrow-pill" style="margin-bottom:8px;">COMPLIMENTARY STRATEGY SESSION</span>
              <h3 style="font-size:1.65rem;font-weight:850;color:var(--text-strong);letter-spacing:-0.02em;margin:8px 0 6px;">Request Consultation</h3>
              <p style="font-size:0.9rem;color:#64748b;line-height:1.5;margin:0;">
                Fill out your details below. Prasad Mhaske will review your digital footprint and return an actionable plan within 24 hours.
              </p>
            </div>

            <form id="contact-form" action="/contact.php" method="POST">
              <div class="form-group">
                <label class="form-label" for="form-name">
                  <span>Your Full Name</span>
                  <span style="color:var(--terra);font-weight:900;">*</span>
                </label>
                <input class="form-input" id="form-name" name="name" type="text" placeholder="e.g. Vikram Shinde" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="form-phone">
                  <span>Phone / WhatsApp Number</span>
                  <span style="color:var(--terra);font-weight:900;">*</span>
                </label>
                <input class="form-input" id="form-phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="form-email">
                  <span>Work Email</span>
                  <span style="color:var(--terra);font-weight:900;">*</span>
                </label>
                <input class="form-input" id="form-email" name="email" type="email" placeholder="name@company.com" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="form-url">
                  <span>Current Website URL / Brand</span>
                  <span style="color:#94a3b8;font-weight:500;">(Optional)</span>
                </label>
                <input class="form-input" id="form-url" name="website" type="text" placeholder="https://example.com" />
              </div>

              <div class="form-group">
                <label class="form-label" for="form-service">
                  <span>Required Capability</span>
                  <span style="color:var(--terra);font-weight:900;">*</span>
                </label>
                <select class="form-select" id="form-service" name="service" required>
                  <option value="Custom Next.js Website Development">Custom Next.js &amp; WordPress Web Development</option>
                  <option value="Local SEO & Google 3-Pack Domination" selected>Local SEO &amp; Google 3-Pack Domination</option>
                  <option value="Google Ads & Meta Performance PPC">Google Ads &amp; Meta Performance PPC</option>
                  <option value="AI SEO & Generative Engine Optimization (GEO)">AI SEO &amp; Generative Optimization (GEO)</option>
                  <option value="E-Commerce Store & Export Infrastructure">E-Commerce Store &amp; Export Infrastructure</option>
                  <option value="Full Market Domination Package">Full Market Domination Sprint</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="form-package">
                  <span>Target Investment / Package</span>
                </label>
                <select class="form-select" id="form-package" name="package">
                  <option value="Starter Sprint (₹11,999)">Starter Sprint — ₹11,999 (Local Dominance)</option>
                  <option value="Growth Scale (₹18,999)" selected>Growth Scale — ₹18,999 (Most Popular)</option>
                  <option value="Market Domination (₹34,999)">Market Domination — ₹34,999 (National/Full Engine)</option>
                  <option value="Custom Enterprise">Custom Enterprise Requirement</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="form-message">
                  <span>Project Goals or Primary Bottleneck</span>
                </label>
                <textarea class="form-textarea" id="form-message" name="message" placeholder="Briefly describe your business goals, target keywords, or what needs fixing..."></textarea>
              </div>

              <button type="submit" class="form-btn-submit" style="margin-top:0.75rem;">
                <span>Submit Consultation Request</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
              </button>

              <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:1.25rem;font-size:0.75rem;color:#64748b;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span>100% Confidential. Zero spam. Direct response from Baner, Pune.</span>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>

    <!-- Closing Dual Action Cards -->
    <section class="closing-section">
      <div class="shell">
        <span class="eyebrow-pill">TAKE THE NEXT STEP</span>
        <div class="closing-grid">
          <div class="closing-card card-dark">
            <h2 class="closing-title">Ready to engineer similar growth for your brand?</h2>
            <p class="closing-desc">Talk directly to our senior growth engineering pod about your business goals, target keywords, and market expansion.</p>
            <a href="https://wa.me/918788823182" target="_blank" rel="noopener" class="closing-cta-link">
              <span>Message on WhatsApp (+91 87888 23182)</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </div>
          <div class="closing-card card-light">
            <h2 class="closing-title">Speak directly with an engineer, not a salesperson.</h2>
            <p class="closing-desc">Schedule a 30-minute direct technical consultation with Prasad Mhaske at our Baner lab or over Google Meet.</p>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <a href="tel:+918788823182" class="closing-contact-link" style="color:#081424;">
                <span>Call directly: <strong>+91 87888 23182</strong></span>
              </a>
              <a href="mailto:contact@inranktech.com" class="closing-contact-link" style="color:#64748b;">
                <span>Email: <strong>contact@inranktech.com</strong></span>
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
</body>
</html>`;

fs.writeFileSync('inrank2.0/contact.html', contactHtml, 'utf8');
console.log('inrank2.0/contact.html updated with 2.0 corporate system!');

